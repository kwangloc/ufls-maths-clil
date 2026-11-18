import { resolve } from "node:path";
import { defineConfig } from "vite";

// Multi-page build: the React app plus the standalone worksheet page, which
// shares the site header through src/site-header.jsx.
// JSX is still compiled by Vite's built-in esbuild step (no React plugin), so
// JSX files keep `import React from "react"`.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        worksheet: resolve(import.meta.dirname, "worksheet.html"),
      },
    },
  },
});
