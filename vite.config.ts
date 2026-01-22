import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function getBaseFromHomepage(): string {
  // When deploying to GitHub Pages (project pages), Vite must build with a subpath base.
  // We derive it from package.json "homepage" via npm-injected env var.
  // Example: https://user.github.io/Eng_HMurinda-s_Portfolio  -> /Eng_HMurinda-s_Portfolio/
  const homepage = process.env.npm_package_homepage;
  if (!homepage) return "/";
  try {
    const url = new URL(homepage);
    const pathname = url.pathname || "/";
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  } catch {
    return "/";
  }
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? getBaseFromHomepage() : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
