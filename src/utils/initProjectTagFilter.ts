import { layoutProjectsBentoGrid } from "./layoutProjectsBentoGrid";

export const projectTagChipInactiveClass =
  "rounded-full border border-border bg-canvas-elevated px-3 py-1 text-xs font-medium text-foreground-muted transition-colors duration-200 ease-out hover:border-mint/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint motion-reduce:transition-none";

export const projectTagChipActiveClass =
  "rounded-full border border-mint/50 bg-mint/15 px-3 py-1 text-xs font-semibold text-mint shadow-sm";

const chipInactive = projectTagChipInactiveClass;
const chipActive = projectTagChipActiveClass;

let documentClickBound = false;

function applyTagFilter(selected: string) {
  const root = document.getElementById("project-tag-filters");
  if (!root) return;

  root
    .querySelectorAll<HTMLButtonElement>("[data-tag-filter]")
    .forEach((btn) => {
      const v = btn.dataset.tagFilter ?? "";
      const on = v === selected;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.className = on ? chipActive : chipInactive;
    });

  document
    .querySelectorAll<HTMLLIElement>("li[data-project-tags]")
    .forEach((li) => {
      const raw = li.getAttribute("data-project-tags") ?? "";
      const tags = raw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const show = !selected || tags.includes(selected);
      li.classList.toggle("hidden", !show);
    });

  layoutProjectsBentoGrid();
}

function onDocumentClick(e: MouseEvent) {
  const btn = (e.target as Element | null)?.closest<HTMLButtonElement>(
    "[data-tag-filter]",
  );
  if (!btn) return;
  const root = document.getElementById("project-tag-filters");
  if (!root || !root.contains(btn)) return;
  const selected = btn.dataset.tagFilter ?? "";
  applyTagFilter(selected);
}

export function initProjectTagFilter(): void {
  if (!document.getElementById("project-tag-filters")) return;

  if (!documentClickBound) {
    documentClickBound = true;
    document.addEventListener("click", onDocumentClick);
  }
  applyTagFilter("");
}
