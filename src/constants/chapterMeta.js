export const VOLUMES = [
  {
    id: "volume-1",
    label: "Volume 1",
    chapters: [
      {
        id: "chapter-1",
        label: "Chapter I:",
        title: "THE SET OF NATURAL NUMBERS",
      },
      {
        id: "chapter-2",
        label: "Chapter II:",
        title: "DIVISIBILITY IN THE SET OF NATURAL NUMBER",
      },
      {
        id: "chapter-3",
        label: "Chapter III:",
        title: "INTEGER",
      },
      {
        id: "chapter-4",
        label: "Chapter IV:",
        title: "SOME PLANE SHAPES IN REAL LIFE",
      },
      {
        id: "chapter-5",
        label: "Chapter V:",
        title: "SYMMETRY OF PLANE SHAPES IN NATURE",
      },
    ],
  },
  {
    id: "volume-2",
    label: "Volume 2",
    chapters: [
      {
        id: "chapter-6",
        label: "Chapter VI:",
        title: "FRACTIONS",
      },
      {
        id: "chapter-7",
        label: "Chapter VII:",
        title: "DECIMALS",
      },
      {
        id: "chapter-8",
        label: "Chapter VIII:",
        title: "BASIC GEOMETRIC FIGURES",
      },
      {
        id: "chapter-9",
        label: "Chapter IX:",
        title: "DATA AND EXPERIMENTAL PROBABILITY",
      },
    ],
  },
];

export const DEFAULT_VOLUME = "volume-1";
export const CHAPTERS = VOLUMES.flatMap((volume) => volume.chapters);

export function getVolumeById(volumeId) {
  return VOLUMES.find((volume) => volume.id === volumeId) ?? VOLUMES[0];
}

export function getChaptersByVolume(volumeId) {
  return getVolumeById(volumeId).chapters;
}

export function getChapterById(chapterId) {
  return CHAPTERS.find((chapter) => chapter.id === chapterId) ?? CHAPTERS[0];
}

// First and last lesson number in each chapter.
export const CHAPTER_LESSON_RANGES = {
  "chapter-1": [1, 7],
  "chapter-2": [8, 12],
  "chapter-3": [13, 17],
  "chapter-4": [18, 20],
  "chapter-5": [21, 22],
  "chapter-6": [23, 27],
  "chapter-7": [28, 31],
  "chapter-8": [32, 37],
  "chapter-9": [38, 43],
};

export function getChapterIdForLesson(lessonNumber) {
  return Object.entries(CHAPTER_LESSON_RANGES).find(
    ([, [first, last]]) => lessonNumber >= first && lessonNumber <= last,
  )?.[0];
}

// "Chapter IV:" -> "Chapter IV", for short labels such as breadcrumbs.
export function getChapterShortLabel(chapterId) {
  return getChapterById(chapterId).label.replace(/:$/, "");
}
