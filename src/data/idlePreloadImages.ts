import { projects, timeline } from "./portfolio";

/**
 * Image URLs to `<link rel="preload" as="image">` after idle (see `Layout.astro`).
 * Covers project card / gallery assets and experience timeline logos.
 */
function collectIdlePreloadImageHrefs(): readonly string[] {
  const seen = new Set<string>();
  const add = (raw: string | undefined): void => {
    const s = raw?.trim();
    if (!s || seen.has(s)) return;
    seen.add(s);
  };

  for (const e of timeline) {
    add(e.logoSrc);
  }

  for (const p of projects) {
    add(p.cardImage?.src);
    for (const img of p.extraCardImages ?? []) {
      add(img.src);
    }
  }

  return [...seen];
}

export const idlePreloadImageHrefs = collectIdlePreloadImageHrefs();
