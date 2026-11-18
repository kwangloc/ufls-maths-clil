// Every interactive worksheet, in study order: each chapter's lessons, then its
// review. Built from the printable PDFs in src/pages/worksheet/ (one per
// worksheet) and the titles in src/data/worksheetTitles.json, which
// scripts/build-worksheet-titles.mjs reads from public/worksheet-content*.js.
import titles from "./data/worksheetTitles.json";

const PDFS = import.meta.glob("./pages/worksheet/Chapter_*_Worksheets/Chapter_*/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const ROMAN_TO_NUMBER = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9 };

function toWorksheet(path, pdfUrl) {
  const match = /\/Chapter_([IVX]+)_Worksheets\/Chapter_\1\/([^/]+)\.pdf$/.exec(path);
  if (!match) return null;
  const [, roman, filename] = match;
  const chapterNumber = ROMAN_TO_NUMBER[roman];
  const chapterId = `chapter-${chapterNumber}`;

  const lessonMatch = /^Lesson_(\d+)_(.+)$/.exec(filename);
  if (lessonMatch) {
    const lessonNumber = Number(lessonMatch[1]);
    const id = `lesson-${lessonNumber}`;
    return {
      id,
      chapterId,
      lessonNumber,
      isReview: false,
      title: titles[id] ?? `Lesson ${lessonNumber}: ${lessonMatch[2].replace(/_/g, " ")}`,
      pdfUrl,
    };
  }

  if (filename === `Chapter_${roman}_Review`) {
    // Chapter I's review predates the chapter-N-review naming.
    const id = chapterNumber === 1 ? "review" : `${chapterId}-review`;
    return {
      id,
      chapterId,
      lessonNumber: null,
      isReview: true,
      title: titles[id] ?? `Chapter ${roman}: Review`,
      pdfUrl,
    };
  }

  return null;
}

export const WORKSHEETS = Object.entries(PDFS)
  .map(([path, url]) => toWorksheet(path, url))
  .filter(Boolean)
  .sort((a, b) => {
    const chapterA = Number(a.chapterId.slice(8));
    const chapterB = Number(b.chapterId.slice(8));
    if (chapterA !== chapterB) return chapterA - chapterB;
    if (a.isReview !== b.isReview) return a.isReview ? 1 : -1;
    return a.lessonNumber - b.lessonNumber;
  })
  .map((worksheet) => ({
    ...worksheet,
    href: `/worksheet.html?${new URLSearchParams({ lesson: worksheet.id, pdf: worksheet.pdfUrl })}`,
  }));

export function getWorksheetById(id) {
  return WORKSHEETS.find((worksheet) => worksheet.id === id);
}

export function getWorksheetForLesson(lessonNumber) {
  return WORKSHEETS.find((worksheet) => worksheet.lessonNumber === lessonNumber);
}

export function getWorksheetsForChapter(chapterId) {
  return WORKSHEETS.filter((worksheet) => worksheet.chapterId === chapterId);
}

// The worksheets just before and after this one in study order.
export function getAdjacentWorksheets(id) {
  const index = WORKSHEETS.findIndex((worksheet) => worksheet.id === id);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: WORKSHEETS[index - 1] ?? null,
    next: WORKSHEETS[index + 1] ?? null,
  };
}
