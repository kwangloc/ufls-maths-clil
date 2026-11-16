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
  // An axis drawn only between a and b (not across the whole board), for pads
  // that hold several separate figures.
  const boundedAxis = (a, b, label = "d") => ({ type: "axis", a, b, label, bounded: true });
  // Given curves (drawn only; automatic checks ignore them). Angles in degrees,
  // clockwise on screen from the positive x direction.
  const arc = (c, r, start, end) => ({ type: "arc", c, r, start, end });
  const circle = (c, r) => ({ type: "circle", c, r });
  // Maps grid cells of a worksheet picture to cm on the pad: [x, y] -> [x * scale + dx, y * scale + dy].
  // `f.len(n)` turns a length of n cells into cm.
  const cells = (scale, dx, dy) => {
    const f = ([x, y]) => [x * scale + dx, y * scale + dy];
    f.len = (n) => n * scale;
    f.path = (...points) => path(...points.map(f));
    return f;
  };

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
        prompt: "Draw all the axes of symmetry (if any) of the shapes below: a kite, a parallelogram, a rectangle and an isosceles trapezoid.",
        answer: "Kite: 1 axis (the vertical diagonal). Parallelogram: no axis. Rectangle: 2 axes (the lines joining the midpoints of opposite sides). Isosceles trapezoid: 1 axis (the line joining the midpoints of the two bases).",
        height: 6,
        // Same shapes as the picture, traced on its grid (cells).
        given: (() => {
          const f = cells(0.4, 0.2, 0.6);
          return [
            [[5, 0], [8, 4], [5, 9], [2, 4]],
            [[15, 0], [24, 0], [21, 9], [12, 9]],
            [[27, 0], [35, 0], [35, 9], [27, 9]],
            [[40, 0], [43, 0], [45, 9], [38, 9]],
          ].map((points) => polygon(...points.map(f)));
        })(),
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
        prompt: "Draw more on each figure below (a, b, c) so that line d is an axis of symmetry of the new figure.",
        answer: "Reflect every line of each figure across its own line d: each point and its image are the same distance from d, on a line perpendicular to d. (a) completes a house shape; (b) a symmetric zig-zag frame; (c) the mirror image appears above the horizontal line d.",
        height: 7,
        // Same figures as the picture, traced on its grid (cells).
        given: (() => {
          const a = cells(0.4, -1.2, 0.2);
          const b = cells(0.4, 5.6, 0.2);
          const c = cells(0.4, 12, 1.8);
          return [
            boundedAxis(a([12, 0]), a([12, 14])),
            ...a.path([12, 1], [4, 5], [12, 5]),
            ...a.path([6, 5], [6, 13], [12, 13]),
            ...a.path([8, 13], [8, 9], [12, 9]),
            boundedAxis(b([10, 0]), b([10, 14])),
            ...b.path([10, 2], [6, 2], [5, 5], [8, 7], [5, 10], [6, 13], [10, 13]),
            boundedAxis(c([1, 4]), c([17, 4])),
            ...c.path([2, 4], [4, 8], [14, 8], [16, 4]),
            ...c.path([9, 8], [9, 11], [13, 11]),
          ];
        })(),
        check: [
          { type: "symmetry", axes: ["d"], region: [0, 0, 7.2, 7], label: "(a)" },
          { type: "symmetry", axes: ["d"], region: [7.2, 0, 12.2, 7], label: "(b)" },
          { type: "symmetry", axes: ["d"], region: [12.2, 0, 20, 7], label: "(c)" },
        ],
      },
      "5.8": {
        prompt: "Draw more on each figure below so that line d is an axis of symmetry of the new figure.",
        answer: "Reflect every line of each figure across its own line d: each point and its image must be the same distance from d, on a line perpendicular to d. Points already on d stay where they are.",
        height: 10,
        // Same figures as the picture, traced on its grid (cells) and scaled to 0.6 cm per cell;
        // the right figure is shifted 10.4 cm to the right.
        given: (() => {
          const left = ([x, y]) => [x * 0.6, y * 0.6];
          const right = ([x, y]) => [x * 0.6 + 10.4, y * 0.6];
          return [
            boundedAxis(left([1, 1]), left([15, 15])),
            ...path(...[[6, 6], [5, 9], [7, 12], [11, 11]].map(left)),
            ...path(...[[7, 12], [4, 14], [9, 13]].map(left)),
            boundedAxis(right([1, 15]), right([15, 1])),
            ...path(...[[6, 4], [4, 7], [5, 11], [6, 4], [8, 8]].map(right)),
          ];
        })(),
        check: [
          { type: "symmetry", axes: ["d"], region: [0, 0, 10, 10], label: "Left figure:" },
          { type: "symmetry", axes: ["d"], region: [10, 0, 20, 10], label: "Right figure:" },
        ],
      },
    },
    "lesson-22": {
      "5.16": {
        prompt: "Draw more on each figure below (a, b, c) so that point O is the centre of symmetry of the new figure.",
        answer: "Turn each figure half a turn (180°) about O and draw the image: O is the midpoint of every point and its image. (a) The lines continue below and to the right of O. (b) The quarter circle and the small circle are copied on the other side of O, making a half disc. (c) The square corner and the quarter circle are copied below and to the right of O.",
        height: 8,
        // Same figures as the picture, traced on its grid (cells). Only (a) is checked
        // automatically, because (b) and (c) contain curves.
        given: (() => {
          const a = cells(0.5, -1, 0);
          const b = cells(0.5, 5.5, 0);
          const c = cells(0.5, 12.5, 0);
          return [
            point(a([8, 8]), "O"),
            ...a.path([8, 1], [5, 1], [5, 3]),
            ...a.path([8, 3], [3, 3], [3, 8], [8, 8]),
            point(b([8, 8]), "O"),
            ...b.path([2, 8], [8, 8]),
            arc(b([8, 8]), b.len(6), 180, 270),
            circle(b([5.5, 5.5]), b.len(0.9)),
            point(c([8, 8]), "O"),
            ...c.path([2, 2], [8, 2], [8, 8]),
            arc(c([8, 2]), c.len(6), 90, 180),
          ];
        })(),
        check: { type: "symmetry", centres: ["O"], region: [0, 0, 6, 8], label: "(a)" },
      },
    },
    "chapter-5-review": {
      // 5.24–5.27: same figures as the pictures, traced on their grids (cells).
      // Figures with curves are not checked automatically.
      "5.24": {
        prompt: "Complete the drawings below (a, b, c) so that d is an axis of symmetry.",
        answer: "Reflect every part of each figure across line d. (a) The step shape is mirrored to the right of d. (b) The half circle, the two circles and the small half circle are mirrored to make a full face (a bear). (c) The zig-zag is mirrored to make a fir tree.",
        height: 8,
        given: (() => {
          const a = cells(0.5, -2.1, 0);
          const b = cells(0.5, 4.2, 0);
          const c = cells(0.5, 11.4, 0);
          return [
            boundedAxis(a([10, 0]), a([10, 16])),
            ...a.path([10, 5], [7, 5], [7, 8], [5, 8], [5, 10], [10, 10]),
            boundedAxis(b([10, 0]), b([10, 16])),
            arc(b([10, 8]), b.len(6), 90, 270),
            circle(b([5.4, 3.4]), b.len(1.7)),
            circle(b([7, 6]), b.len(0.8)),
            point(b([7, 6])),
            arc(b([10, 11]), b.len(1.3), 90, 270),
            boundedAxis(c([10, 0]), c([10, 16])),
            ...c.path([10, 2], [6, 6], [8, 6], [4, 10], [7, 10], [3, 13], [10, 13], [10, 15]),
          ];
        })(),
        check: [
          { type: "symmetry", axes: ["d"], region: [0, 0, 5.8, 8], label: "(a)" },
          { type: "symmetry", axes: ["d"], region: [12.55, 0, 20, 8], label: "(c)" },
        ],
      },
      "5.25": {
        prompt: "Complete the drawings below (a, b, c) so that d is an axis of symmetry.",
        answer: "Reflect every line of each figure across its own line d; points on d stay where they are, and each point and its image are joined by a line perpendicular to d.",
        height: 7,
        given: (() => {
          const a = cells(0.43, -0.13, -0.03);
          const b = cells(0.43, 6.57, -0.03);
          const c = cells(0.43, 13.27, -0.03);
          return [
            boundedAxis(a([1, 15]), a([15, 1])),
            ...a.path([3, 13], [3, 8], [6, 8], [6, 4], [12, 4]),
            boundedAxis(b([1, 1]), b([15, 15])),
            ...b.path([7, 7], [4, 8], [3, 12], [7, 13], [10, 10]),
            ...b.path([7, 7], [5, 10]),
            boundedAxis(c([1, 8]), c([15, 8])),
            ...c.path([3, 8], [3, 4], [7, 2], [11, 4], [11, 6], [13, 8]),
          ];
        })(),
        check: [
          { type: "symmetry", axes: ["d"], region: [0, 0, 6.65, 7], label: "(a)" },
          { type: "symmetry", axes: ["d"], region: [6.65, 0, 13.35, 7], label: "(b)" },
          { type: "symmetry", axes: ["d"], region: [13.35, 0, 20, 7], label: "(c)" },
        ],
      },
      "5.26": {
        prompt: "Complete the drawings below (a, b, c) so that O is the centre of symmetry.",
        answer: "Turn each figure half a turn (180°) about O and draw the image: O is the midpoint of every point and its image. (b) The half circle is copied below the line, on the other side of O. (c) The small bracket and the quarter circle are copied below and to the left of O.",
        height: 7,
        given: (() => {
          const a = cells(0.55, -0.6, -0.05);
          const b = cells(0.55, 5.7, -0.05);
          const c = cells(0.55, 12.95, -0.05);
          return [
            point(a([6, 6]), "O"),
            ...a.path([8, 1], [4, 1], [5, 3], [2, 3], [3, 6], [6, 6]),
            point(b([6, 6]), "O"),
            ...b.path([2, 6], [6, 6], [6, 1]),
            arc(b([6, 3.5]), b.len(2.5), -90, 90),
            point(c([6, 6]), "O"),
            ...c.path([6, 4], [5, 4], [5, 6], [6, 6]),
            arc(c([6, 6]), c.len(5), 270, 360),
          ];
        })(),
        check: { type: "symmetry", centres: ["O"], region: [0, 0, 6.3, 7], label: "(a)" },
      },
      "5.27": {
        prompt: "Complete the drawings below (a, b, c) so that d is an axis of symmetry and O is a centre of symmetry.",
        answer: "Reflect each figure across d, then turn the whole result half a turn about O (the result is also symmetric about the line through O perpendicular to d). Check that every part has an image on the other side of d and on the other side of O.",
        height: 7,
        given: (() => {
          const a = cells(0.5, 0, 0.3);
          const b = cells(0.5, 6.5, 0.3);
          const c = cells(0.5, 13.5, 0.3);
          return [
            boundedAxis(a([6, 0]), a([6, 12])),
            point(a([6, 6]), "O"),
            arc(a([6, 1]), a.len(5), 90, 180),
            ...a.path([3, 6], [6, 3]),
            boundedAxis(b([0, 6]), b([12, 6])),
            point(b([6, 6]), "O"),
            ...b.path([1, 6], [3, 9], [6, 9]),
            ...b.path([2, 6], [5, 11]),
            boundedAxis(c([0, 0]), c([12, 12])),
            point(c([6, 6]), "O"),
            ...c.path([6, 3], [6, 6]),
            arc(c([8, 6]), c.len(2.45), -90, 90),
          ];
        })(),
        check: { type: "symmetry", axes: ["d"], centres: ["O"], region: [6.3, 0, 13, 7], label: "(b)" },
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
