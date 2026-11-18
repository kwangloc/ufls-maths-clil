import React from "react";
import { ChevronRight } from "lucide-react";
import { isPlainLeftClick } from "../routing";

/**
 * items: [{ label, href?, onSelect? }]. The last item is the current page and
 * is not a link. Earlier items are real links so they can be opened in a new
 * tab; a plain click calls onSelect instead of reloading the app.
 */
export default function Breadcrumb({ items }) {
  if (items.length < 2) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${index}-${item.label}`}>
              {index > 0 && (
                <ChevronRight
                  className="breadcrumb-separator"
                  size={14}
                  aria-hidden="true"
                />
              )}
              {isCurrent ? (
                <span aria-current="page" title={item.label}>
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(event) => {
                    if (!item.onSelect || !isPlainLeftClick(event)) return;
                    event.preventDefault();
                    item.onSelect();
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
