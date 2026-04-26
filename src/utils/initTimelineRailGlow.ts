const HOVER = "data-timeline-hover";

function clearAvatarGlows(rail: HTMLElement) {
  rail
    .querySelectorAll("[data-timeline-avatar][data-y-active]")
    .forEach((el) => {
      el.removeAttribute("data-y-active");
    });
}

function updateAvatarGlows(rail: HTMLElement, clientY: number) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  rail.querySelectorAll<HTMLElement>("[data-timeline-avatar]").forEach((av) => {
    const r = av.getBoundingClientRect();
    const within = clientY >= r.top && clientY <= r.bottom;
    if (within) av.setAttribute("data-y-active", "");
    else av.removeAttribute("data-y-active");
  });
}

export function initTimelineRailGlow(): void {
  document
    .querySelectorAll<HTMLElement>("[data-timeline-rail]")
    .forEach((rail) => {
      if (rail.dataset.timelineGlowInit === "1") return;
      rail.dataset.timelineGlowInit = "1";

      const onMove = (e: MouseEvent) => {
        const rect = rail.getBoundingClientRect();
        const pct = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
        rail.style.setProperty(
          "--glow-y",
          `${Math.max(0, Math.min(100, pct))}%`,
        );
        updateAvatarGlows(rail, e.clientY);
      };

      const onEnter = (e: Event) => {
        const me = e as MouseEvent;
        rail.setAttribute(HOVER, "");
        const rect = rail.getBoundingClientRect();
        const pct = ((me.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
        rail.style.setProperty(
          "--glow-y",
          `${Math.max(0, Math.min(100, pct))}%`,
        );
        updateAvatarGlows(rail, me.clientY);
      };

      const onLeave = () => {
        rail.removeAttribute(HOVER);
        /* Keep --glow-y at last position so the fade-out does not snap the band to the CSS default (50%). */
        clearAvatarGlows(rail);
      };

      rail.addEventListener("mousemove", onMove, { passive: true });
      rail.addEventListener("mouseenter", onEnter);
      rail.addEventListener("mouseleave", onLeave);
    });
}
