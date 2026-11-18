// The learning path for a lesson: 1 learn the terms -> 2 practise with
// flashcards -> 3 do the worksheet, plus "what's next" suggestions and
// previous/next links. Used by the app and by worksheet.html.
//
// A link is { label, detail?, route? , href?, disabled? }: `route` is an app
// page (see routing.js), `href` is another page such as a worksheet.
import { PAGES } from "./routing";
import {
  CHAPTER_LESSON_RANGES,
  CHAPTERS,
  getChapterIdForLesson,
  getChapterShortLabel,
} from "./constants/chapterMeta";
import {
  getAdjacentWorksheets,
  getWorksheetById,
  getWorksheetForLesson,
  getWorksheetsForChapter,
} from "./worksheets";

export const STEPS = { LEARN: "learn", PRACTISE: "practise", APPLY: "apply" };

const LAST_LESSON = Math.max(
  ...Object.values(CHAPTER_LESSON_RANGES).map(([, last]) => last),
);

function termsLessonLink(lessonNumber, label) {
  return {
    label,
    route: { page: PAGES.TERMS_LESSON, lesson: `Lesson ${lessonNumber}` },
  };
}

function termsChapterLink(chapterId, label) {
  return { label, route: { page: PAGES.TERMS_CHAPTER, chapter: chapterId } };
}

function flashcardsLink(chapterId, label) {
  return { label, route: { page: PAGES.FLASHCARDS_CHAPTER, chapter: chapterId } };
}

function worksheetsChapterLink(chapterId, label) {
  return { label, route: { page: PAGES.WORKSHEETS_CHAPTER, chapter: chapterId } };
}

function worksheetLink(worksheet, label) {
  return { label, href: worksheet.href };
}

function comingSoon(label) {
  return { label, disabled: true };
}

function worksheetShortName(worksheet) {
  return worksheet.isReview
    ? `${getChapterShortLabel(worksheet.chapterId)} review`
    : `Lesson ${worksheet.lessonNumber}`;
}

/**
 * The three steps for a lesson (lessonNumber) or a whole chapter (chapterId
 * only, as on the flashcards page or a chapter review worksheet).
 */
export function getPathSteps({ chapterId, lessonNumber = null }) {
  const chapter = getChapterShortLabel(chapterId);
  const lessonWorksheet = lessonNumber ? getWorksheetForLesson(lessonNumber) : null;
  const hasChapterWorksheets = getWorksheetsForChapter(chapterId).length > 0;

  let apply;
  if (lessonNumber) {
    apply = lessonWorksheet
      ? { ...worksheetLink(lessonWorksheet, "Do the worksheet"), detail: `Lesson ${lessonNumber}` }
      : { ...comingSoon("Do the worksheet"), detail: "Coming soon" };
  } else {
    apply = hasChapterWorksheets
      ? { ...worksheetsChapterLink(chapterId, "Do the worksheets"), detail: chapter }
      : { ...comingSoon("Do the worksheets"), detail: "Coming soon" };
  }

  return [
    {
      step: STEPS.LEARN,
      ...(lessonNumber
        ? termsLessonLink(lessonNumber, "Learn the terms")
        : termsChapterLink(chapterId, "Learn the terms")),
      detail: lessonNumber ? `Lesson ${lessonNumber}` : chapter,
    },
    {
      step: STEPS.PRACTISE,
      ...flashcardsLink(chapterId, "Practise with flashcards"),
      detail: chapter,
    },
    { step: STEPS.APPLY, ...apply },
  ];
}

/** After the terms of one lesson: practise, then the worksheet. */
export function getNextStepsForLesson(lessonNumber, getLessonName = (n) => `Lesson ${n}`) {
  const chapterId = getChapterIdForLesson(lessonNumber);
  const chapter = getChapterShortLabel(chapterId);
  const worksheet = getWorksheetForLesson(lessonNumber);
  return {
    actions: [
      flashcardsLink(chapterId, `Practise ${chapter} flashcards`),
      ...(worksheet ? [worksheetLink(worksheet, `Do the Lesson ${lessonNumber} worksheet`)] : []),
    ],
    previous: lessonNumber > 1
      ? termsLessonLink(lessonNumber - 1, getLessonName(lessonNumber - 1))
      : null,
    next: lessonNumber < LAST_LESSON
      ? termsLessonLink(lessonNumber + 1, getLessonName(lessonNumber + 1))
      : null,
  };
}

/** After practising a chapter: its worksheets, or back to its terms. */
export function getNextStepsForChapter(chapterId) {
  const chapter = getChapterShortLabel(chapterId);
  const index = CHAPTERS.findIndex((item) => item.id === chapterId);
  const previousChapter = CHAPTERS[index - 1];
  const nextChapter = CHAPTERS[index + 1];
  return {
    actions: [
      ...(getWorksheetsForChapter(chapterId).length
        ? [worksheetsChapterLink(chapterId, `Do the ${chapter} worksheets`)]
        : []),
      termsChapterLink(chapterId, `Review the ${chapter} terms`),
    ],
    previous: previousChapter
      ? flashcardsLink(previousChapter.id, `${getChapterShortLabel(previousChapter.id)} flashcards`)
      : null,
    next: nextChapter
      ? flashcardsLink(nextChapter.id, `${getChapterShortLabel(nextChapter.id)} flashcards`)
      : null,
  };
}

/**
 * After a worksheet: the next lesson starts again at its terms; the last
 * lesson of a chapter leads to the chapter review.
 */
export function getNextStepsForWorksheet(worksheetId) {
  const worksheet = getWorksheetById(worksheetId);
  if (!worksheet) return null;
  const chapter = getChapterShortLabel(worksheet.chapterId);
  const { previous, next } = getAdjacentWorksheets(worksheetId);

  // The lesson that follows: after a review, the first lesson of the next chapter.
  const nextLesson = worksheet.isReview
    ? CHAPTER_LESSON_RANGES[worksheet.chapterId][1] + 1
    : worksheet.lessonNumber + 1;

  let primary = null;
  if (next?.isReview) {
    primary = worksheetLink(next, `Do the ${chapter} review`);
  } else if (nextLesson <= LAST_LESSON) {
    primary = termsLessonLink(nextLesson, `Start Lesson ${nextLesson}: learn the terms`);
  }

  return {
    actions: [
      ...(primary ? [primary] : []),
      flashcardsLink(worksheet.chapterId, `Practise ${chapter} flashcards`),
    ],
    previous: previous ? worksheetLink(previous, worksheetShortName(previous)) : null,
    next: next ? worksheetLink(next, worksheetShortName(next)) : null,
  };
}

/** Path steps for a worksheet page. */
export function getPathStepsForWorksheet(worksheetId) {
  const worksheet = getWorksheetById(worksheetId);
  if (!worksheet) return null;
  const steps = getPathSteps({
    chapterId: worksheet.chapterId,
    lessonNumber: worksheet.lessonNumber,
  });
  // A review is chapter-wide, but step 3 is this worksheet rather than the list.
  if (worksheet.isReview) {
    steps[2] = { ...steps[2], ...worksheetLink(worksheet, "Do the worksheet"), detail: worksheetShortName(worksheet), disabled: false };
  }
  return steps;
}
