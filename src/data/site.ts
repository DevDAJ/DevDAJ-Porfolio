/** Production origin, no trailing slash (sitemap and absolute URLs). */
export const siteOrigin = "https://devdaj.tech";

/** Main HTML routes warmed after idle load (see `Layout.astro`). */
export const idlePrefetchPaths = ["/", "/projects", "/blog"] as const;

/**
 * Date of birth as a calendar date `YYYY-MM-DD` (local timezone when computing age).
 */
export const birthDate = "2001-04-09";

/** Site links: profiles, resume path under `public/` (e.g. `resume.pdf`). */
export const links = {
  resume: "/resume.pdf",
  email: "danial.aiman.j@gmail.com",
  github: "https://github.com/devdaj",
  linkedin: "https://www.linkedin.com/in/danial-a-jamil/",
  twitter: "https://twitter.com/D_AimanJ",
} as const;
