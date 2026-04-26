/// <reference types="astro/client" />

/** Short `data-*` names keep this chunk small (many string literals minify poorly). */
const S = "[data-pg-s]";
const D = "[data-pg]";

function slides(d: HTMLElement): HTMLElement[] {
  return [...d.querySelectorAll<HTMLElement>(S)];
}

function idx(d: HTMLElement): number {
  const n = Number.parseInt(d.dataset.carouselIdx ?? "0", 10);
  return Number.isFinite(n) ? n : 0;
}

function show(d: HTMLElement, i: number): void {
  const el = slides(d);
  const n = el.length;
  if (!n) return;
  const k = ((i % n) + n) % n;
  d.dataset.carouselIdx = String(k);
  for (let j = 0; j < n; j++) {
    const on = j === k;
    el[j]!.toggleAttribute("hidden", !on);
    el[j]!.setAttribute("aria-hidden", on ? "false" : "true");
  }
  const ind = d.querySelector("[data-pg-i]");
  if (ind) ind.textContent = `${k + 1} / ${n}`;
}

let on = false;

function click(e: MouseEvent): void {
  const t = e.target;
  if (!(t instanceof Element)) return;

  const o = t.closest<HTMLElement>("[data-pg-o]");
  if (o) {
    const id = o.getAttribute("aria-controls");
    const d = id ? document.getElementById(id) : null;
    if (d instanceof HTMLDialogElement) {
      e.preventDefault();
      d.showModal();
      show(d, 0);
      d.querySelector<HTMLElement>("[data-pg-x]")?.focus();
    }
    return;
  }

  const x = t.closest<HTMLElement>("[data-pg-x]");
  if (x) {
    const d = x.closest("dialog");
    if (d instanceof HTMLDialogElement) d.close();
    return;
  }

  const p = t.closest<HTMLElement>("[data-pg-p]");
  if (p) {
    const d = p.closest<HTMLElement>(D);
    if (d) show(d, idx(d) - 1);
    return;
  }

  const n = t.closest<HTMLElement>("[data-pg-n]");
  if (n) {
    const d = n.closest<HTMLElement>(D);
    if (d) show(d, idx(d) + 1);
    return;
  }

  const g = t.closest<HTMLDialogElement>(D);
  if (g && t === g) g.close();
}

function key(e: KeyboardEvent): void {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  const a = document.activeElement;
  if (!(a instanceof Element)) return;
  const d = a.closest<HTMLDialogElement>(D);
  if (!d?.open) return;
  if (slides(d).length <= 1) return;
  e.preventDefault();
  show(d, e.key === "ArrowLeft" ? idx(d) - 1 : idx(d) + 1);
}

export function initProjectGalleryModals(): void {
  if (!on) {
    on = true;
    document.addEventListener("click", click);
    document.addEventListener("keydown", key);
  }
}
