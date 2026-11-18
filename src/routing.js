// Page ids and URL building shared by the app and the site header, which also
// runs on the standalone worksheet.html page. Keep this file
// free of data imports so those pages stay small.

export const PAGES = {
  HOME: "home",
  TERMS: "terms",
  TERMS_CHAPTER: "terms-chapter",
  TERMS_LESSON: "terms-lesson",
  FLASHCARDS: "flashcards",
  FLASHCARDS_CHAPTER: "flashcards-chapter",
  WORKSHEETS: "worksheets",
  WORKSHEETS_CHAPTER: "worksheets-chapter",
  TIPS: "tips",
  TIPS_DETAIL: "tips-detail",
  ABOUT: "about",
};

export const NAV_ITEMS = [
  { id: PAGES.HOME, label: "Home" },
  { id: PAGES.TERMS, label: "Maths term" },
  { id: PAGES.FLASHCARDS, label: "Flashcard" },
  { id: PAGES.WORKSHEETS, label: "Worksheet" },
  { id: PAGES.TIPS, label: "Teaching tips" },
  { id: PAGES.ABOUT, label: "About us" },
];

export const GRADES = [6, 7, 8, 9];

// Sections that have a grade menu, with their display names.
export const RESOURCE_PAGES = {
  [PAGES.TERMS]: "Maths terms",
  [PAGES.FLASHCARDS]: "Flashcards",
  [PAGES.WORKSHEETS]: "Worksheets",
};

// Pages that show one chapter, mapped to the chapter list they belong to.
export const CHAPTER_PAGES = {
  [PAGES.TERMS_CHAPTER]: PAGES.TERMS,
  [PAGES.FLASHCARDS_CHAPTER]: PAGES.FLASHCARDS,
  [PAGES.WORKSHEETS_CHAPTER]: PAGES.WORKSHEETS,
};

// The top-level menu item a page belongs to, so the menu can highlight it.
const NAV_SECTION = {
  [PAGES.TERMS_CHAPTER]: PAGES.TERMS,
  [PAGES.TERMS_LESSON]: PAGES.TERMS,
  [PAGES.FLASHCARDS_CHAPTER]: PAGES.FLASHCARDS,
  [PAGES.WORKSHEETS_CHAPTER]: PAGES.WORKSHEETS,
  [PAGES.TIPS_DETAIL]: PAGES.TIPS,
};

export function getNavSection(page) {
  return NAV_SECTION[page] ?? page;
}

// "Lesson 18: Equilateral triangle..." -> "lesson-18"; "all" stays "all".
export function lessonToSlug(lesson) {
  const number = /^Lesson (\d+)/.exec(lesson)?.[1];
  return number ? `lesson-${number}` : lesson;
}

export function buildUrl({ page, chapter, lesson, tip, grade = 6 }) {
  if (page === PAGES.HOME) return "/";
  const params = new URLSearchParams({ page });
  if (RESOURCE_PAGES[page] && grade !== 6) params.set("grade", grade);
  if (CHAPTER_PAGES[page]) params.set("chapter", chapter);
  if (page === PAGES.TERMS_LESSON) params.set("lesson", lessonToSlug(lesson));
  if (page === PAGES.TIPS_DETAIL && tip) params.set("tip", tip);
  return `/?${params.toString()}`;
}

// True for an ordinary left click. Ctrl/Cmd/Shift/middle clicks are left to the
// browser so links still open in a new tab or window.
export function isPlainLeftClick(event) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}
