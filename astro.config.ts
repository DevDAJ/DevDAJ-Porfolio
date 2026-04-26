import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteOrigin } from "./src/data/site";

// https://astro.build/config
export default defineConfig({
  site: siteOrigin,
  compressHTML: true,
  /** Prefer tap over hover so mobile / save-data avoids speculative link prefetch. */
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "tap",
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      /** Emit JS as files (not data-URL inlined) so modules can fetch in parallel on HTTP/2. */
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          /** Only split first-party `src/utils` so Astro’s prefetch + VT graph stays default (avoids giant head request). */
          manualChunks(id) {
            const u = id.replace(/\\/g, "/");
            if (u.includes("/src/utils/initProjectGalleryModals")) {
              return "chunk-gallery";
            }
            if (
              u.includes("/src/utils/initProjectTagFilter") ||
              u.includes("/src/utils/layoutProjectsBentoGrid")
            ) {
              return "chunk-projects";
            }
            if (u.includes("/src/utils/initTimelineRailGlow")) {
              return "chunk-timeline";
            }
          },
        },
      },
    },
  },
});