// Learning path on worksheet.html: the three steps under the breadcrumb and
// "What's next" after the questions. Links here are ordinary page links.
import React from "react";
import { createRoot } from "react-dom/client";
import { NextSteps, PathSteps } from "./components/LearningPath.jsx";
import {
  STEPS,
  getNextStepsForWorksheet,
  getPathStepsForWorksheet,
} from "./learningPath";
import "./learning-path.css";

const worksheetId = new URLSearchParams(window.location.search).get("lesson");
const steps = getPathStepsForWorksheet(worksheetId);
const next = getNextStepsForWorksheet(worksheetId);

const pathMount = document.getElementById("learning-path");
if (pathMount && steps) {
  createRoot(pathMount).render(
    <React.StrictMode>
      <PathSteps steps={steps} current={STEPS.APPLY} />
    </React.StrictMode>,
  );
}

const nextMount = document.getElementById("next-steps");
if (nextMount && next) {
  createRoot(nextMount).render(
    <React.StrictMode>
      <NextSteps {...next} />
    </React.StrictMode>,
  );
}
