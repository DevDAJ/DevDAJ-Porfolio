import type { Project } from "../types/portfolio";

export const dedupeImage = (p: Project) => p.cardImage
  ? (() => {
      const list = [p.cardImage, ...(p.extraCardImages ?? [])];
      const seen = new Set<string>();
      return list.filter((img) => {
        if (seen.has(img.src)) return false;
        seen.add(img.src);
        return true;
      });
    })()
  : [];