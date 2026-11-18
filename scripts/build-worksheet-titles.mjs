// Reads the worksheet titles from public/worksheet-content*.js (the Volume 1
// chapter files and the Volume 2 file) and writes src/data/worksheetTitles.json
// ({ "lesson-18": "Lesson 18: ...", ... }), so the app can show the same titles
// as worksheet.html without loading every question.
//
// It runs automatically before `npm run dev` and `npm run build`; run
// `npm run worksheet-titles` after editing a title while the dev server is running.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const output = join(root, "src", "data", "worksheetTitles.json");

// worksheet-content.js creates window.WORKSHEET_SETS; the other files
// (worksheet-content-chapter-N.js, worksheet-content-volume-2-full.js) add to it.
const files = readdirSync(publicDir)
  .filter((name) => /^worksheet-content(-[\w-]+)?\.js$/.test(name))
  .sort((a, b) => (a === "worksheet-content.js" ? -1 : b === "worksheet-content.js" ? 1 : a.localeCompare(b, "en", { numeric: true })));

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const name of files) {
  vm.runInContext(readFileSync(join(publicDir, name), "utf8"), sandbox, { filename: name });
}

const sets = sandbox.window.WORKSHEET_SETS ?? {};
const titles = Object.fromEntries(
  Object.entries(sets)
    .filter(([, set]) => typeof set?.title === "string")
    .map(([id, set]) => [id, set.title]),
);

writeFileSync(output, `${JSON.stringify(titles, null, 2)}\n`);
console.log(`Wrote ${Object.keys(titles).length} worksheet titles to src/data/worksheetTitles.json`);
