import React from "react";
import { BookOpen, ClipboardList, ArrowRight } from "lucide-react";
import VolumeChapterPage from "../components/VolumeChapterPage";
import {
  getChapterById,
  getChapterShortLabel,
} from "../constants/chapterMeta";
import { getWorksheetsForChapter } from "../worksheets";

// "Lesson 18: Equilateral Triangles..." -> "Equilateral Triangles...", since
// the card already shows the lesson number above the title.
function getCardTitle(worksheet) {
  return worksheet.title.replace(/^(Lesson \d+|Chapter [IVX]+):\s*/, "");
}

function getCardLabel(worksheet) {
  const chapter = getChapterShortLabel(worksheet.chapterId);
  return worksheet.isReview
    ? `${chapter} · Review`
    : `${chapter} · Lesson ${worksheet.lessonNumber}`;
}

export function WorksheetsChapterPage({ chapterId }) {
  const chapter = getChapterById(chapterId);
  const worksheets = getWorksheetsForChapter(chapterId);

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <div className="eyebrow">
            <ClipboardList size={14} /> PRACTISE & APPLY
          </div>
          <h1>
            Your learning <em>toolkit.</em>
          </h1>
          <p>
            Choose a lesson and complete its interactive worksheet on this site.
          </p>
        </div>
      </div>

      <div className="chapter-detail-header">
        <div className="chapter-detail-title">
          <span>{chapter.label}</span>
          <h2>{chapter.title}</h2>
        </div>
      </div>

      {worksheets.length ? (
        <>
          <div className="resource-intro">
            <div className="resource-icon">
              <BookOpen size={24} />
            </div>
            <div>
              <strong>Maths CLIL worksheets</strong>
              <p>
                Complete each worksheet here. Your answers are saved in this
                browser. Use Print / Save as PDF inside the worksheet to open
                the original.
              </p>
            </div>
            <span className="resource-total">{worksheets.length} resources</span>
          </div>

          <div className="resource-grid">
            {worksheets.map((worksheet, i) => (
              <a
                key={worksheet.id}
                className="resource-card"
                href={worksheet.href}
              >
                <div className="resource-card-top">
                  <span className="resource-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="resource-open">
                    <ClipboardList size={16} />
                  </span>
                </div>
                <span className="resource-chapter">{getCardLabel(worksheet)}</span>
                <strong>{getCardTitle(worksheet)}</strong>
                <span className="resource-link">
                  Start worksheet <ArrowRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-chapter-panel">
          No worksheets available yet for this chapter.
        </div>
      )}
    </section>
  );
}

export default function WorksheetsPage({ onOpenChapter }) {
  return (
    <VolumeChapterPage
      eyebrow={
        <>
          <ClipboardList size={14} /> PRACTISE & APPLY
        </>
      }
      title="Your learning <em>toolkit.</em>"
      description="Choose a chapter to explore interactive maths worksheets."
      volumeId="volume-1"
      onOpenChapter={onOpenChapter}
    />
  );
}
