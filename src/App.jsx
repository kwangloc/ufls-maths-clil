import React, { useEffect, useMemo, useRef, useState } from "react";
import content from "./data/content.json";
import volume2Terms from "./data/volume2Terms.json";
import teachingTips from "./data/teachingTips";
import {
  CHAPTERS,
  getChapterIdForLesson,
  getChapterShortLabel,
} from "./constants/chapterMeta";
import HomePage from "./pages/HomePage";
import TermsPage, { TermsChapterPage } from "./pages/TermsPage";
import LessonDetailPage from "./pages/LessonDetailPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import WorksheetsPage, { WorksheetsChapterPage } from "./pages/WorksheetsPage";
import TipsPage, { TeachingTipDetailPage } from "./pages/TipsPage";
import AboutPage from "./pages/AboutPage";
import FeedbackForm from "./components/FeedbackForm";
import Breadcrumb from "./components/Breadcrumb";
import SiteHeader from "./components/SiteHeader";
import {
  CHAPTER_PAGES,
  GRADES,
  PAGES,
  RESOURCE_PAGES,
  buildUrl,
} from "./routing";

const DEFAULT_CHAPTER = "chapter-1";
const terms = [...content.terms, ...volume2Terms];

function getDefaultLesson() {
  return terms[0]?.lesson || "all";
}

// "lesson-18" -> "Lesson 18: Equilateral triangle..."; "all" stays "all".
function lessonFromSlug(slug) {
  if (slug === "all") return "all";
  const number = /^lesson-(\d+)$/.exec(slug ?? "")?.[1];
  return number
    ? terms.find((term) => term.lesson.startsWith(`Lesson ${number}:`))?.lesson
    : undefined;
}

// The URL is the source of truth on load and on Back/Forward. Unknown or
// invalid values fall back to the nearest valid page instead of erroring.
function readRoute(search) {
  const params = new URLSearchParams(search);
  const requestedPage = params.get("page");
  const grade = Number(params.get("grade"));
  const route = {
    page: Object.values(PAGES).includes(requestedPage)
      ? requestedPage
      : PAGES.HOME,
    chapter: DEFAULT_CHAPTER,
    lesson: getDefaultLesson(),
    tip: null,
    grade: GRADES.includes(grade) ? grade : 6,
  };

  if (CHAPTER_PAGES[route.page]) {
    const chapter = params.get("chapter");
    if (CHAPTERS.some((item) => item.id === chapter)) route.chapter = chapter;
    else route.page = CHAPTER_PAGES[route.page];
  }

  if (route.page === PAGES.TERMS_LESSON) {
    const lesson = lessonFromSlug(params.get("lesson"));
    if (lesson) route.lesson = lesson;
    else route.page = PAGES.TERMS;
  }

  if (route.page === PAGES.TIPS_DETAIL) {
    const tip = params.get("tip");
    if (teachingTips.some((item) => item.id === tip)) route.tip = tip;
    else route.page = PAGES.TIPS;
  }

  return route;
}

function withRouteDefaults(route) {
  return {
    chapter: DEFAULT_CHAPTER,
    lesson: getDefaultLesson(),
    tip: null,
    grade: 6,
    ...route,
  };
}

// The trail of pages leading to the current one, as routes. The last entry is
// the current page.
function getBreadcrumbRoutes({ page, chapter, lesson, tip, grade }) {
  const home = { label: "Home", route: { page: PAGES.HOME } };
  const section = (sectionPage, label) => ({ label, route: { page: sectionPage } });
  const terms = section(PAGES.TERMS, "Maths terms");
  const flashcards = section(PAGES.FLASHCARDS, "Flashcards");
  const worksheets = section(PAGES.WORKSHEETS, "Worksheets");
  const tips = section(PAGES.TIPS, "Teaching tips");
  const current = (label) => ({ label });

  switch (page) {
    case PAGES.TERMS:
    case PAGES.FLASHCARDS:
    case PAGES.WORKSHEETS: {
      const label = RESOURCE_PAGES[page];
      if (grade === 6) return [home, current(label)];
      return [home, section(page, label), current(`Grade ${grade}`)];
    }
    case PAGES.TERMS_CHAPTER:
      return [home, terms, current(getChapterShortLabel(chapter))];
    case PAGES.TERMS_LESSON: {
      if (lesson === "all") return [home, terms, current("All lessons")];
      const lessonChapter = getChapterIdForLesson(
        Number(/^Lesson (\d+)/.exec(lesson)?.[1]),
      );
      return [
        home,
        terms,
        ...(lessonChapter
          ? [
              {
                label: getChapterShortLabel(lessonChapter),
                route: { page: PAGES.TERMS_CHAPTER, chapter: lessonChapter },
              },
            ]
          : []),
        current(lesson),
      ];
    }
    case PAGES.FLASHCARDS_CHAPTER:
      return [home, flashcards, current(getChapterShortLabel(chapter))];
    case PAGES.WORKSHEETS_CHAPTER:
      return [home, worksheets, current(getChapterShortLabel(chapter))];
    case PAGES.TIPS:
      return [home, current("Teaching tips")];
    case PAGES.TIPS_DETAIL:
      return [
        home,
        tips,
        current(teachingTips.find((item) => item.id === tip)?.title ?? ""),
      ];
    case PAGES.ABOUT:
      return [home, current("About us")];
    default:
      return [];
  }
}

function App() {
  const [initialRoute] = useState(() => readRoute(window.location.search));
  const [page, setPage] = useState(initialRoute.page);
  const [search, setSearch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(initialRoute.chapter);
  const [selectedLesson, setSelectedLesson] = useState(initialRoute.lesson);
  const [selectedTeachingTip, setSelectedTeachingTip] = useState(
    initialRoute.tip,
  );
  const [selectedGrade, setSelectedGrade] = useState(initialRoute.grade);

  const url = buildUrl({
    page,
    chapter: selectedChapter,
    lesson: selectedLesson,
    tip: selectedTeachingTip,
    grade: selectedGrade,
  });
  const lastPageInHistory = useRef(null);

  // Keep the address bar in step with the page. Moving to another page adds a
  // history entry so Back works; changing a filter on the same page (such as
  // the lesson dropdown) only replaces the current entry.
  useEffect(() => {
    const current = window.location.pathname + window.location.search;
    if (url !== current) {
      const isNewPage =
        lastPageInHistory.current !== null && lastPageInHistory.current !== page;
      window.history[isNewPage ? "pushState" : "replaceState"](null, "", url);
    }
    lastPageInHistory.current = page;
  }, [url, page]);

  function applyRoute(route) {
    const next = withRouteDefaults(route);
    setPage(next.page);
    setSelectedChapter(next.chapter);
    setSelectedLesson(next.lesson);
    setSelectedTeachingTip(next.tip);
    setSelectedGrade(next.grade);
    setSearch("");
  }

  useEffect(() => {
    function handlePopState() {
      const route = readRoute(window.location.search);
      lastPageInHistory.current = route.page;
      applyRoute(route);
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const breadcrumbItems = getBreadcrumbRoutes({
    page,
    chapter: selectedChapter,
    lesson: selectedLesson,
    tip: selectedTeachingTip,
    grade: selectedGrade,
  }).map(({ label, route }) =>
    route
      ? {
          label,
          href: buildUrl(withRouteDefaults(route)),
          onSelect: () => applyRoute(route),
        }
      : { label },
  );

  const lessons = useMemo(
    () => [...new Set(terms.map((t) => t.lesson))],
    [],
  );

  function resetSearch() {
    setSearch("");
  }

  function navigate(nextPage) {
    setPage(nextPage);
    resetSearch();

    if (nextPage === PAGES.TIPS) {
      setSelectedTeachingTip(null);
    }

    if (RESOURCE_PAGES[nextPage]) {
      setSelectedGrade(6);
    }

    if (nextPage === PAGES.TERMS || nextPage === PAGES.HOME) {
      setSelectedLesson(getDefaultLesson());
    }

    if (nextPage === PAGES.WORKSHEETS) {
      setSelectedChapter(DEFAULT_CHAPTER);
    }
  }

  function selectGrade(nextPage, grade) {
    setSelectedGrade(grade);
    setPage(nextPage);
    resetSearch();

    if (nextPage === PAGES.TERMS) {
      setSelectedLesson(getDefaultLesson());
    }

    if (nextPage === PAGES.WORKSHEETS) {
      setSelectedChapter(DEFAULT_CHAPTER);
    }
  }

  function openLesson(lessonName) {
    setPage(PAGES.TERMS_LESSON);
    setSelectedLesson(lessonName);
    resetSearch();
  }

  function openTermsChapter(chapterId) {
    setSelectedChapter(chapterId);
    setPage(PAGES.TERMS_CHAPTER);
    resetSearch();
  }

  function openFlashcardsChapter(chapterId) {
    setSelectedChapter(chapterId);
    setPage(PAGES.FLASHCARDS_CHAPTER);
    resetSearch();
  }

  function openWorksheetChapter(chapterId) {
    setSelectedChapter(chapterId);
    setPage(PAGES.WORKSHEETS_CHAPTER);
    resetSearch();
  }

  function openTeachingTip(tipId) {
    setSelectedTeachingTip(tipId);
    setPage(PAGES.TIPS_DETAIL);
  }

  return (
    <div className="app-shell">
      <SiteHeader
        activePage={page}
        onNavigate={navigate}
        onSelectGrade={selectGrade}
      />

      <main className="main-content">
        <Breadcrumb items={breadcrumbItems} />
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "terms" && selectedGrade !== 6 && (
          <GradeComingSoon
            grade={selectedGrade}
            resource={RESOURCE_PAGES[PAGES.TERMS]}
            onExploreGradeSix={() => selectGrade(PAGES.TERMS, 6)}
          />
        )}
        {page === "terms" && selectedGrade === 6 && (
          <TermsPage lessons={lessons} onOpenChapter={openTermsChapter} />
        )}
        {page === "terms-chapter" && (
          <TermsChapterPage
            chapterId={selectedChapter}
            lessons={lessons}
            onOpenLesson={openLesson}
          />
        )}
        {page === "terms-lesson" && (
          <LessonDetailPage
            terms={terms}
            lesson={selectedLesson}
            lessons={lessons}
            search={search}
            setSearch={setSearch}
            onLessonChange={(nextLesson) => {
              setSelectedLesson(nextLesson);
              setSearch("");
            }}
          />
        )}
        {page === "flashcards" && selectedGrade !== 6 && (
          <GradeComingSoon
            grade={selectedGrade}
            resource={RESOURCE_PAGES[PAGES.FLASHCARDS]}
            onExploreGradeSix={() => selectGrade(PAGES.FLASHCARDS, 6)}
          />
        )}
        {page === "flashcards" && selectedGrade === 6 && (
          <FlashcardsPage onSelectChapter={openFlashcardsChapter} />
        )}
        {page === PAGES.FLASHCARDS_CHAPTER && (
          <FlashcardsPage key={selectedChapter} chapterId={selectedChapter} />
        )}
        {page === "worksheets" && selectedGrade !== 6 && (
          <GradeComingSoon
            grade={selectedGrade}
            resource={RESOURCE_PAGES[PAGES.WORKSHEETS]}
            onExploreGradeSix={() => selectGrade(PAGES.WORKSHEETS, 6)}
          />
        )}
        {page === "worksheets" && selectedGrade === 6 && (
          <WorksheetsPage onOpenChapter={openWorksheetChapter} />
        )}
        {page === "worksheets-chapter" && (
          <WorksheetsChapterPage chapterId={selectedChapter} />
        )}
        {page === PAGES.TIPS && <TipsPage onOpenTip={openTeachingTip} />}
        {page === PAGES.TIPS_DETAIL && (
          <TeachingTipDetailPage tipId={selectedTeachingTip} />
        )}
        {page === "about" && <AboutPage />}

        {(page === PAGES.TERMS_LESSON ||
          page === PAGES.TIPS ||
          page === PAGES.ABOUT) && <FeedbackForm />}
      </main>
    </div>
  );
}

function GradeComingSoon({ grade, resource, onExploreGradeSix }) {
  return (
    <section className="page-section">
      <div className="grade-coming-soon">
        <div className="eyebrow">{resource}</div>
        <h1>
          Grade {grade} <em>coming soon.</em>
        </h1>
        <p>We're preparing {resource.toLowerCase()} for this grade.</p>
        <button
          type="button"
          className="secondary-button"
          onClick={onExploreGradeSix}
        >
          Explore Grade 6
        </button>
      </div>
    </section>
  );
}

export default App;
