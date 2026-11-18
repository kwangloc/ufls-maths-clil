import React, { useState } from "react";
import {
  GRADES,
  NAV_ITEMS,
  PAGES,
  RESOURCE_PAGES,
  buildUrl,
  getNavSection,
  isPlainLeftClick,
} from "../routing";

/**
 * The site header. Inside the app, pass onNavigate and onSelectGrade so a
 * plain click switches page without reloading. On standalone pages such as
 * worksheet.html, leave them out and every item works as an ordinary link.
 */
export default function SiteHeader({ activePage, onNavigate, onSelectGrade }) {
  const [openGradeMenu, setOpenGradeMenu] = useState(null);
  const activeSection = getNavSection(activePage);

  function followLink(event, action) {
    setOpenGradeMenu(null);
    if (!action || !isPlainLeftClick(event)) return;
    event.preventDefault();
    action();
  }

  return (
    <header className="horizontal-header">
      <a
        className="brand-block"
        href="/"
        aria-label="Maths CLIL home"
        onClick={(event) =>
          followLink(event, onNavigate && (() => onNavigate(PAGES.HOME)))
        }
      >
        <div className="brand-identity">
          <img className="brand-mark" src="/Main-logo.svg" alt="" />
        </div>
      </a>

      <nav className="top-nav" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => {
          const hasGradeMenu = Boolean(RESOURCE_PAGES[item.id]);
          const isActive = activeSection === item.id;

          if (!hasGradeMenu) {
            return (
              <div key={item.id} className="nav-menu">
                <a
                  className={`nav-link ${isActive ? "active" : ""}`}
                  href={buildUrl({ page: item.id })}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) =>
                    followLink(
                      event,
                      onNavigate && (() => onNavigate(item.id)),
                    )
                  }
                >
                  <span>{item.label}</span>
                </a>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className={`nav-menu ${openGradeMenu === item.id ? "open" : ""}`}
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setOpenGradeMenu(item.id);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setOpenGradeMenu((current) =>
                    current === item.id ? null : current,
                  );
                }
              }}
              onFocus={() => setOpenGradeMenu(item.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenGradeMenu((current) =>
                    current === item.id ? null : current,
                  );
                }
              }}
            >
              <button
                type="button"
                className={`nav-link ${isActive ? "active" : ""}`}
                aria-haspopup="true"
                aria-expanded={openGradeMenu === item.id}
                onClick={(event) => {
                  // A mouse or touch click opens the menu; keyboard Enter or
                  // Space (detail 0) toggles it.
                  if (event.detail > 0) {
                    setOpenGradeMenu(item.id);
                  } else {
                    setOpenGradeMenu((current) =>
                      current === item.id ? null : item.id,
                    );
                  }
                }}
              >
                <span>{item.label}</span>
              </button>
              <div className="grade-menu" aria-label={`${item.label} grades`}>
                {GRADES.map((grade) => (
                  <a
                    key={grade}
                    className="grade-option"
                    href={buildUrl({ page: item.id, grade })}
                    onClick={(event) =>
                      followLink(
                        event,
                        onSelectGrade && (() => onSelectGrade(item.id, grade)),
                      )
                    }
                  >
                    <span>Grade {grade}</span>
                    {grade !== 6 && (
                      <span className="grade-option-status">Coming soon</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
