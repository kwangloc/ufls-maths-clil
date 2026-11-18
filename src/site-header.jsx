// Renders the shared site header on standalone pages (worksheet.html,
// grade.html). Each page adds <div id="site-header" data-active-page="...">.
import React from "react";
import { createRoot } from "react-dom/client";
import SiteHeader from "./components/SiteHeader.jsx";
import "./header.css";

const mount = document.getElementById("site-header");
if (mount) {
  createRoot(mount).render(
    <React.StrictMode>
      <SiteHeader activePage={mount.dataset.activePage} />
    </React.StrictMode>,
  );
}
