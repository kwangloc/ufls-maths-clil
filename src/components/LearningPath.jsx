import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Layers3,
} from "lucide-react";
import { buildUrl, isPlainLeftClick } from "../routing";
import { STEPS } from "../learningPath";

const STEP_ICONS = {
  [STEPS.LEARN]: BookOpen,
  [STEPS.PRACTISE]: Layers3,
  [STEPS.APPLY]: ClipboardList,
};

/**
 * Renders a learning-path link. App pages (`route`) switch in place when the
 * app passes onNavigate; otherwise every link is an ordinary page link.
 */
function PathLink({ link, onNavigate, className, children, ...rest }) {
  if (link.disabled) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" {...rest}>
        {children}
      </span>
    );
  }
  const href = link.route ? buildUrl(link.route) : link.href;
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        if (!link.route || !onNavigate || !isPlainLeftClick(event)) return;
        event.preventDefault();
        onNavigate(link.route);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/** The three steps, with the current one highlighted and the others as links. */
export function PathSteps({ steps, current, onNavigate }) {
  return (
    <nav className="path-steps" aria-label="Learning path">
      <ol>
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[step.step];
          const isCurrent = step.step === current;
          const content = (
            <>
              <span className="path-step-number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="path-step-text">
                <strong>
                  <Icon size={15} aria-hidden="true" /> {step.label}
                </strong>
                <small>{step.detail}</small>
              </span>
            </>
          );
          return (
            <li key={step.step} className={isCurrent ? "is-current" : undefined}>
              {isCurrent ? (
                <span className="path-step" aria-current="step">
                  {content}
                </span>
              ) : (
                <PathLink link={step} onNavigate={onNavigate} className="path-step">
                  {content}
                </PathLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Suggested next actions, then previous/next links. */
export function NextSteps({ actions, previous, next, onNavigate }) {
  if (!actions.length && !previous && !next) return null;

  return (
    <section className="next-steps" aria-labelledby="next-steps-title">
      <h2 id="next-steps-title">What's next</h2>
      {actions.length > 0 && (
        <div className="next-steps-actions">
          {actions.map((action, index) => (
            <PathLink
              key={action.label}
              link={action}
              onNavigate={onNavigate}
              className={`next-action ${index === 0 ? "is-primary" : ""}`}
            >
              <span>{action.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </PathLink>
          ))}
        </div>
      )}
      {(previous || next) && (
        <nav className="path-pager" aria-label="Previous and next">
          {previous ? (
            <PathLink link={previous} onNavigate={onNavigate} className="path-pager-link" rel="prev">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>
                <small>Previous</small>
                {previous.label}
              </span>
            </PathLink>
          ) : (
            <span />
          )}
          {next && (
            <PathLink link={next} onNavigate={onNavigate} className="path-pager-link is-next" rel="next">
              <span>
                <small>Next</small>
                {next.label}
              </span>
              <ArrowRight size={16} aria-hidden="true" />
            </PathLink>
          )}
        </nav>
      )}
    </section>
  );
}
