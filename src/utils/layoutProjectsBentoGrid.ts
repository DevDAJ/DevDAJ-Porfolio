const GRID_ID = "projects-bento-grid";

function isImageCard(li: HTMLElement): boolean {
  return li.dataset.hasImage === "true";
}

function clearPlacement(li: HTMLElement): void {
  li.style.removeProperty("grid-column");
  li.style.removeProperty("grid-row");
}

/** Visible, in DOM order (matches `projects` array order). */
function visibleItems(grid: HTMLElement): HTMLElement[] {
  return [
    ...grid.querySelectorAll<HTMLElement>("li[data-project-tags]"),
  ].filter((li) => !li.classList.contains("hidden"));
}

function placeFeature(el: HTMLElement, row: number): void {
  el.style.gridColumn = "1 / span 7";
  el.style.gridRow = `${row} / span 2`;
}

function placeSideTop(el: HTMLElement, row: number): void {
  el.style.gridColumn = "8 / span 5";
  el.style.gridRow = String(row);
}

function placeSideBottom(el: HTMLElement, row: number): void {
  el.style.gridColumn = "8 / span 5";
  el.style.gridRow = String(row + 1);
}

function placeTallSide(el: HTMLElement, row: number): void {
  el.style.gridColumn = "8 / span 5";
  el.style.gridRow = `${row} / span 2`;
}

function placeFullTwoRows(el: HTMLElement, row: number): void {
  el.style.gridColumn = "1 / -1";
  el.style.gridRow = `${row} / span 2`;
}

function placeHalfLeft(el: HTMLElement, row: number): void {
  el.style.gridColumn = "1 / span 6";
  el.style.gridRow = String(row);
}

function placeHalfRight(el: HTMLElement, row: number): void {
  el.style.gridColumn = "7 / span 6";
  el.style.gridRow = String(row);
}

function placeFullOneRow(el: HTMLElement, row: number): void {
  el.style.gridColumn = "1 / -1";
  el.style.gridRow = String(row);
}

function applyMdLayout(items: HTMLElement[]): void {
  let row = 1;
  let i = 0;
  while (i < items.length) {
    const cur = items[i];
    const img = isImageCard(cur);
    const n1 = items[i + 1];
    const n2 = items[i + 2];

    if (img) {
      const n1Ok = n1 && !isImageCard(n1);
      const n2Ok = n2 && !isImageCard(n2);
      if (n1Ok && n2Ok) {
        placeFeature(cur, row);
        placeSideTop(n1, row);
        placeSideBottom(n2, row);
        row += 2;
        i += 3;
      } else if (n1Ok) {
        placeFeature(cur, row);
        placeTallSide(n1, row);
        row += 2;
        i += 2;
      } else {
        placeFullTwoRows(cur, row);
        row += 2;
        i += 1;
      }
    } else {
      if (n1 && !isImageCard(n1)) {
        placeHalfLeft(cur, row);
        placeHalfRight(n1, row);
        row += 1;
        i += 2;
      } else {
        placeFullOneRow(cur, row);
        row += 1;
        i += 1;
      }
    }
  }
}

let resizeBound = false;

function bindResize(): void {
  if (resizeBound) return;
  resizeBound = true;
  let t: ReturnType<typeof setTimeout> | undefined;
  window.addEventListener("resize", () => {
    if (t) clearTimeout(t);
    t = setTimeout(() => layoutProjectsBentoGrid(), 120);
  });
}

/**
 * Recomputes CSS Grid placement for `/projects` so image cards span two rows
 * and up to two following text-only cards fill the right column; pairs of
 * non-image cards use a half–half row. Hidden items are cleared and skipped.
 */
export function layoutProjectsBentoGrid(): void {
  const grid = document.getElementById(GRID_ID);
  if (!grid) return;

  bindResize();

  const all = [...grid.querySelectorAll<HTMLElement>("li[data-project-tags]")];
  const md = window.matchMedia("(min-width: 768px)").matches;

  for (const li of all) {
    if (li.classList.contains("hidden")) {
      clearPlacement(li);
      continue;
    }
    if (!md) {
      clearPlacement(li);
    }
  }

  if (!md) return;

  const visible = visibleItems(grid);
  for (const li of visible) {
    clearPlacement(li);
  }
  applyMdLayout(visible);
}
