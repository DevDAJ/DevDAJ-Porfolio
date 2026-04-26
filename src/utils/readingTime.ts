/** Typical English reading speed for web articles (words per minute). */
const DEFAULT_WPM = 200;

/**
 * Estimates read time from markdown/MDX source (body only; excludes frontmatter).
 * Returns at least 1 minute.
 */
export function readingTimeMinutesFromBody(
  body: string | undefined,
  wpm = DEFAULT_WPM,
): number {
  if (!body?.trim()) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wpm));
}
