# Maths CLIL ("The Hunt")

Static site for teachers of Grade 6 Mathematics using CLIL (Content and Language
Integrated Learning), following the Vietnamese *Kết nối tri thức với cuộc sống*
curriculum, Volume 1. It offers an English/Vietnamese glossary, flashcards, and
links to worksheets and teaching tips.

React 18 + Vite 6, plain JSX and CSS. There is no backend, database, router,
test suite or linter. All content is compiled in from one JSON file.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview
```

---

## Where things live

```
Materials for MathsCLILweb.xlsx   source of truth for all content
scripts/import_excel.py           workbook -> src/data/content.json
src/data/content.json             generated; imported directly by pages
src/constants/chapterMeta.js      volumes and chapters (hand-written, not from the workbook)
src/App.jsx                       page state, navigation, header
src/pages/                        one file per page
src/components/                   VolumeChapterPage, FeedbackForm, EmptyState
src/styles.css                    all styling, one global file
public/                           logos, referenced by absolute path
```

**Navigation is a `useState` in `App.jsx`, not URLs.** Refreshing always returns
to Home, and pages cannot be linked to or reached with the browser's back button.
Terms and Worksheets keep their chapter and lesson state in `App`. Flashcards keeps
its own state inside `FlashcardsPage`.

---

## Changing content

Edit the workbook, then regenerate. Never hand-edit `content.json`, because the
next import overwrites it.

```bash
python -m pip install openpyxl
python scripts/import_excel.py                     # or pass a workbook path
```

The importer reads columns by position, so reordering columns silently puts data
in the wrong fields:

| Sheet | Rows read | Columns |
|---|---|---|
| `Maths term` | from row 3 | number, lesson, Vietnamese, English, example, IPA |
| `flashcard` | from row 3 | id, chapter code, Vietnamese, English, example |
| `worksheet` | all rows | chapter, lesson, URL |
| `teaching tips` | all rows | first cell starting with `http` |

- A blank lesson or chapter cell inherits the value above it, which handles merged cells.
- `worksheet` has no header skip, so a header row would be imported as a resource.
- Lesson names are grouped by exact string and shown as written, so `LESSON 1: SET`
  really is capitalised differently from `Lesson 2: ...`.

Current data: 53 terms across 7 lessons, 53 flashcards, 8 worksheet links (lessons
1-7 plus a revision sheet). Everything belongs to Chapter I.

---

## Things that will bite

**Only Chapter I has content, and that is hardcoded in three places.** Terms,
Flashcards and Worksheets each check `chapterId === "chapter-1"` and show an empty
state otherwise. Nothing filters on `chapterCode` or the worksheet `chapter` field,
and terms have no chapter field at all. Adding Chapter II to the workbook will not
make it appear, and if imported as-is its data would show up under Chapter I. Volume
2 exists in `chapterMeta.js` but every page passes `volumeId="volume-1"`.

**The feedback form discards what people type.** `FeedbackForm` calls an optional
`onSubmit`, and no caller passes one. Pressing "Comment" does nothing: nothing is
sent or stored, and the fields do not clear. Do not describe this as a working
feature.

**There is no `vite.config`.** `@vitejs/plugin-react` is installed but never loaded,
and `typescript` is installed but unused. JSX is compiled by Vite's built-in esbuild
step, so every JSX file needs `import React from "react"`. Keep that import until a
config adds the plugin. With no `base` set and logos at `/Main-logo.svg`, deploying
under a subpath such as GitHub Pages also needs `base` configured and those paths
changed.

**`VolumeChapterPage` renders `title` with `dangerouslySetInnerHTML`** so headings
can contain `<em>`. Only pass hardcoded strings, never workbook or user data.

**The page needs network access for some features.** Fonts load from Google Fonts
via `@import` in `styles.css`, worksheets open from Google Drive, and teaching tips
from Google Docs. Those Drive and Docs links only work for visitors if their sharing
settings allow it.

**Text-to-speech depends on the browser.** It uses `speechSynthesis` with `en-US`
and always speaks the English term, even from a card's Vietnamese side.

---

## Known bugs (found by reading the code, not yet fixed)

All in `FlashcardsPage.jsx` unless noted:

- **Review list can open the wrong card.** The handler stores an index into
  `content.flashcards`, but `cardIndex` indexes `filteredCards`. They differ while a
  search is active.
- **A search stays active with no way to see it.** Multiple-choice mode hides the
  search box but still uses `filteredCards`, so switching modes after searching
  quietly limits the deck.
- **Active recall accepts only the whole string.** The check is an exact match after
  lowercasing and collapsing spaces. `FC_02` (`Element/member`) and `FC_51`
  (`Brackets / parentheses`) reject "element" and "brackets".
- **Auto-advance timers are never cancelled.** After a correct answer, the 450 ms
  (active recall) or 550 ms (multiple choice) timer still fires, so clicking Next or
  answering again within that window skips an extra card.
- **Clicking the Flashcard nav item inside a chapter does nothing,** because the
  chapter is held in `FlashcardsPage` and the page stays mounted.
- **`App.jsx`: no nav item is highlighted on sub-pages,** since the check is
  `page === item.id` and `terms-chapter` and similar never match. "Back to lessons"
  on a lesson page actually goes to the chapter list.

---

## Conventions

**Style with the tokens on `:root` in `styles.css`** (`--ink`, `--green`, `--paper`,
and so on) instead of new literal colours. Breakpoints are 1100px and 760px. Icons
come from `lucide-react`.

**Interface text is English, content is bilingual.** The multiple-choice heading
`CHỌN NGHĨA ĐÚNG` is currently the one Vietnamese UI label.

**The name is not settled in the code.** Home says "The Hunt"; the page title, About
page and logo alt text say "Maths CLIL". `siteName`, `tagline` and `sourceWorkbook`
in `content.json` are generated but not read by any page, so changing them has no
effect on the site.

**The README is partly out of date.** Its project structure predates `pages/` and
`components/`, and it mentions unzipping the project. Trust this file and the code.
