// Figures and drawing tasks for worksheet questions.
//
// Loaded after the worksheet-content*.js files and worksheet-figures/manifest.js.
//
// Pictures need no entry here: a file saved as
// public/worksheet-figures/<worksheet id>/<question number>.png (or .jpg,
// .webp, .svg) is shown under that question's prompt. See README.md.
//
// For each entry below:
// - `figure: { alt }` describes the picture for screen readers (optional;
//   `src` may also be given to use a different file).
// - `prompt` and `answer` replace the question's text, used where a figure
//   here replaces one from the original worksheet PDF.
// - every other field is merged into the question's `drawing` spec (given
//   figures and automatic checks; see drawing-pad.js and drawing-check.js).
//
// All coordinates are in centimetres on the drawing grid (20 cm wide, 12 cm
// tall unless `height` is set), measured from the top-left corner.
(() => {
  const axis = (a, b, label = "d") => ({ type: "axis", a, b, label });
  const point = (p, label) => ({ type: "point", p, label });
  const polygon = (...points) => ({ type: "polygon", points });
  // A broken line through the given points, as separate segments.
  const path = (...points) =>
    points.slice(1).map((p, i) => ({ type: "segment", a: points[i], b: p }));

  const r3 = Math.sqrt(3);
  const hexagon = (cx, cy, r) =>
    polygon(...Array.from({ length: 6 }, (_, i) => [cx + r * Math.cos((i * Math.PI) / 3), cy + r * Math.sin((i * Math.PI) / 3)]));

  const DRAWINGS = {
    "lesson-3": {
      "1.22": { check: { type: "marks", values: [6, 13] } },
    },
    review: {
      10: { check: { type: "marks", values: [6, 8, 10, 12] } },
    },
    "lesson-13": {
      "3.4": { check: { type: "marks", values: [5, -5, -3, 3, -2, 2] } },
    },
    "lesson-18": {
      "4.1": {
        prompt: "Look at the figures below. Identify which figure is an equilateral triangle, which is a square, and which is a regular hexagon.",
        answer: "Figure e) is the equilateral triangle, figure c) is the square, and figure a) is the regular hexagon.",
        figure: { alt: "Six shapes labelled a) to f)." },
      },
      "4.4": {
        prompt: "For regular hexagon ABCDEF in the figure below: (a) name its short diagonals; (b) are triangles ACE and BDF equilateral?",
        figure: { alt: "Regular hexagon ABCDEF with lines joining every second vertex." },
      },
      "4.5": {
        prompt: "Use the figure below to check (a) whether ABC is equilateral; (b) whether MNPQ is a square.",
        answer: "Measure all three sides of ABC to check whether they are equal. For MNPQ, check that all four sides are equal and that each angle is 90°.",
        figure: { alt: "Triangle ABC with points M and Q on BC, N on AB and P on AC, forming quadrilateral MNPQ." },
      },
      "4.6": {
        figure: { alt: "An equilateral triangle with side 4 cm, and six such triangles fitted together into a regular hexagon." },
      },
      "4.7": {
        prompt: "Use the figure below to count the regular hexagons and the equilateral triangles, and name the regular hexagons.",
        answer: "Count the regular six-sided shapes, then count every equilateral triangle once. Use the labels P, Q, R, S, T, U and A to F shown in the figure.",
        figure: { alt: "Regular hexagon PQRSTU with lines between its vertices; the crossing points are labelled A to F." },
      },
      "4.2": { check: { type: "polygon", vertices: 3, sides: [6], labels: ["E", "F", "G"] } },
      "4.3": { check: { type: "polygon", vertices: 4, sides: [4], right: true, diagonals: true, labels: ["M", "N", "P", "Q"] } },
    },
    "lesson-19": {
      "4.10": { check: { type: "polygon", vertices: 4, sides: [6, 4], right: true, labels: ["A", "B", "C", "D"] } },
      "4.11": { check: { type: "polygon", vertices: 4, sides: [3], labels: ["M", "N", "P", "Q"] } },
      "4.12": { check: { type: "polygon", vertices: 4, sides: [5, 3], labels: ["E", "F", "H", "K"] } },
      "4.13": { check: { type: "polygon", vertices: 4, sides: [4, 6], diagonal: 7, labels: ["A", "B", "C", "D"] } },
      "4.14": { check: { type: "polygon", vertices: 4, sides: [4], angle: 60, labels: ["M", "N", "P", "Q"] } },
    },
    "lesson-20": {
      "4.23": {
        prompt: "A window vent has the dimensions shown in the figure below. Is a 7 m iron bar enough to make all its bars? Ignore joints.",
        answer: "Outer frame: 2 × (96 + 72) = 336 cm. Middle bars: 96 + 72 = 168 cm. Four slanted bars: 4 × 60 = 240 cm. Total = 744 cm = 7.44 m, which is more than 7 m, so the bar is not enough.",
        figure: { alt: "Rectangular vent 96 cm wide and 72 cm tall, with a horizontal and a vertical bar through the middle and four 60 cm bars joining the midpoints of its sides." },
      },
      "4.24": {
        prompt: "Calculate the perimeter and area of the garden ABCDEF shown in the figure below.",
        answer: "EF = 7 − 3 = 4 m and DE = 10 − 7 = 3 m. Perimeter = 7 + 10 + 3 + 3 + 4 + 7 = 34 m. Area = 10 × 7 − 3 × 4 = 58 m².",
        figure: { alt: "L-shaped garden ABCDEF: AB = 7 m, BC = 10 m, CD = 3 m, AF = 7 m, with corner E cut in from the bottom right." },
      },
      "4.25": {
        prompt: "A paving stone, shown below, is made from a small regular hexagon and six isosceles trapezoids. Each trapezoid has bases 20 cm and 40 cm and height 17.3 cm. The small hexagon has six equilateral triangles with side 20 cm and height 17.3 cm. Find the total area.",
        figure: { alt: "Regular hexagonal paving stone: a small regular hexagon in the centre surrounded by six isosceles trapezoids." },
      },
    },
    "chapter-4-review": {
      "4.29": {
        height: 14,
        check: [
          { type: "polygon", label: "(a)", vertices: 4, sides: [4.5], right: true },
          { type: "polygon", label: "(b)", vertices: 4, sides: [5, 7], right: true },
          { type: "polygon", label: "(c)", vertices: 4, sides: [5], angle: 60 },
          { type: "polygon", label: "(d)", vertices: 4, sides: [5, 7], height: 4 },
        ],
      },
    },
    "lesson-21": {
      "5.2": {
        prompt: "Draw all the axes of symmetry (if any) of the shapes below: a rectangle, a square, a parallelogram, an isosceles trapezoid, and a kite.",
        answer: "Rectangle: 2 axes. Square: 4 axes. Parallelogram: no axis. Isosceles trapezoid: 1 axis. Kite: 1 axis.",
        given: [
          polygon([1, 2], [6, 2], [6, 5], [1, 5]),
          polygon([8, 1.5], [12, 1.5], [12, 5.5], [8, 5.5]),
          polygon([14, 5], [17, 5], [19, 2], [16, 2]),
          polygon([2, 11], [8, 11], [6.5, 8], [3.5, 8]),
          polygon([12, 7], [14, 8.5], [12, 11], [10, 8.5]),
        ],
        check: { type: "axes" },
      },
      "5.5": {
        prompt: "Draw all the axes of symmetry of the shapes below: an arrow, a cross, and three squares joined at their corners.",
        answer: "Arrow: 1 axis (the vertical line through its tip). Cross: 4 axes (vertical, horizontal and the two diagonals). Three squares: 2 axes (the diagonal line through the centres of the squares, and the line perpendicular to it through the middle square's centre).",
        height: 7,
        // Same shapes as the picture, traced on its grid (cells) and scaled to 0.4 cm per cell.
        given: [
          [[8, 2], [14, 8], [11, 8], [11, 14], [5, 14], [5, 8], [2, 8]],
          [[22, 2], [26, 2], [26, 6], [30, 6], [30, 10], [26, 10], [26, 14], [22, 14], [22, 10], [18, 10], [18, 6], [22, 6]],
          [[36, 2], [40, 2], [40, 6], [44, 6], [44, 10], [48, 10], [48, 14], [44, 14], [44, 10], [40, 10], [40, 6], [36, 6]],
        ].map((cells) => polygon(...cells.map(([x, y]) => [x * 0.4, y * 0.4 + 0.2]))),
        check: { type: "axes" },
      },
      "5.6": {
        prompt: "Draw more on the shape below so that line d is an axis of symmetry of the new shape.",
        given: [
          axis([10, 0.5], [10, 11.5]),
          ...path([10, 1.5], [6, 3.5], [10, 3.5]),
          ...path([7, 3.5], [7, 9.5], [10, 9.5]),
          ...path([10, 7], [8, 7], [8, 9.5]),
        ],
        check: { type: "symmetry", axes: ["d"] },
      },
      "5.8": {
        prompt: "Draw more on the shape below so that line d is an axis of symmetry of the new shape.",
        given: [axis([10, 0.5], [10, 11.5]), ...path([10, 1], [7, 1], [6, 4], [8, 6], [6, 8], [7, 11], [10, 11])],
        check: { type: "symmetry", axes: ["d"] },
      },
    },
    "lesson-22": {
      "5.16": {
        prompt: "Draw more on the shape below so that point O is the centre of symmetry of the new shape.",
        given: [point([10, 6], "O"), ...path([10, 6], [7, 6], [6, 3], [9, 3], [8, 1], [12, 1])],
        check: { type: "symmetry", centres: ["O"] },
      },
    },
    "chapter-5-review": {
      "5.24": {
        prompt: "Complete the drawing below so that d is an axis of symmetry.",
        given: [axis([0.5, 6], [19.5, 6]), ...path([5, 6], [7, 3], [13, 3], [15, 6]), ...path([10, 3], [10, 1], [12, 1])],
        check: { type: "symmetry", axes: ["d"] },
      },
      "5.25": {
        prompt: "Complete the drawing below so that d is an axis of symmetry.",
        given: [axis([10, 0.5], [10, 11.5]), ...path([10, 1], [6, 5], [8, 5], [8, 11], [10, 11])],
        check: { type: "symmetry", axes: ["d"] },
      },
      "5.26": {
        prompt: "Complete the drawing below so that O is the centre of symmetry.",
        given: [point([10, 6], "O"), ...path([10, 6], [10, 3], [13, 3], [13, 1], [15, 1])],
        check: { type: "symmetry", centres: ["O"] },
      },
      "5.27": {
        prompt: "Complete the drawing below so that d is an axis of symmetry and O is a centre of symmetry.",
        given: [axis([10, 0.5], [10, 11.5]), point([10, 6], "O"), ...path([10, 1], [13, 1], [15, 4], [13, 6])],
        check: { type: "symmetry", axes: ["d"], centres: ["O"] },
      },
    },
  };

  // A mistake in one entry (a wrong worksheet id or question number) is
  // reported and skipped; it must not stop the other entries from loading.
  const sets = window.WORKSHEET_SETS || {};
  const problems = [];
  const findQuestion = (setId, number, source) => {
    const worksheet = sets[setId];
    if (!worksheet) {
      problems.push(`${source}: there is no worksheet "${setId}"`);
      return null;
    }
    const question = worksheet.questions.find((q) => q.number === String(number));
    if (!question) problems.push(`${source}: worksheet "${setId}" has no question ${number}`);
    return question || null;
  };

  // 1. Pictures dropped into public/worksheet-figures/<worksheet id>/<number>.png
  //    (listed in worksheet-figures/manifest.js by scripts/build-figure-manifest.mjs).
  for (const [setId, files] of Object.entries(window.WORKSHEET_FIGURES || {})) {
    for (const [number, src] of Object.entries(files)) {
      const question = findQuestion(setId, number, `picture ${src}`);
      if (question) question.figure = { src, alt: `Figure for question ${number}` };
    }
  }

  // 2. Entries above: drawing tasks, figure descriptions and text changes.
  for (const [setId, questions] of Object.entries(DRAWINGS)) {
    for (const [number, patch] of Object.entries(questions)) {
      const question = findQuestion(setId, number, "worksheet-drawings.js");
      if (!question) continue;
      try {
        const { prompt, answer, figure, ...drawing } = patch;
        if (Object.keys(drawing).length) question.drawing = { ...(question.drawing || {}), ...drawing };
        if (figure) {
          question.figure = { ...(question.figure || {}), ...figure };
          if (!question.figure.src) {
            problems.push(`question ${number} in "${setId}" has a figure description but no picture file in public/worksheet-figures/${setId}/`);
          }
        }
        if (prompt) question.prompt = prompt;
        if (answer) question.answer = answer;
      } catch (error) {
        problems.push(`question ${number} in "${setId}": ${error.message}`);
      }
    }
  }

  if (problems.length) {
    console.warn(`worksheet-drawings.js skipped ${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  }
})();
