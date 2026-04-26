import type { Project } from "../data/portfolio";

/** Unique tag strings for filter chips (from each project’s `tags`). */
export function collectProjectFilterTags(projects: Project[]): string[] {
  const s = new Set<string>();
  for (const p of projects) {
    for (const t of p.tags ?? []) s.add(t);
  }
  return [...s].sort((a, b) => a.localeCompare(b));
}

/** Flat list for `data-project-tags` (comma-separated; avoid commas inside tag names). */
export function projectTagsFlat(p: Project): string[] {
  return [...new Set(p.tags ?? [])];
}
