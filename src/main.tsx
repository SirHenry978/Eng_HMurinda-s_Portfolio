import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA fallback support (works with public/404.html redirect)
// See: https://github.com/rafgraph/spa-github-pages
(() => {
  const l = window.location;
  if (l.search.length > 1 && l.search[1] === "/") {
    const decoded = l.search
      .slice(1)
      .split("&")
      .map((s) => s.replace(/~and~/g, "&"))
      .join("?");
    window.history.replaceState(null, "", l.pathname.slice(0, -1) + decoded + l.hash);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
