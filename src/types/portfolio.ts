export type TimelineLink = { label: string; href: string };

export type TimelineEntry = {
  id: string;
  employer: string;
  employerUrl: string;
  logoSrc?: string;
  logoAlt: string;
  initial: string;
  subtitle: string;
  startLabel: string;
  endLabel: string;
  bullets?: string[];
};

export type Project = {
  title: string;
  description: string;
  /**
   * Tags shown on the card and used for `/projects` filter chips.
   * Avoid commas inside tag strings (stored comma-separated in HTML).
   */
  tags?: string[];
  /** Tech stack labels shown as small chips on the card. */
  technologies?: string[];
  /** When true, shown in Experience / Projects tabs “Featured” strip. */
  featured: boolean;
  /** Optional cover image at the top of the card (`public/` path or https URL). */
  cardImage?: {
    src: string;
    alt: string;
  };
  /**
   * Extra screenshots for the card image modal carousel (shown after `cardImage`).
   * Omit when there is only one image.
   */
  extraCardImages?: { src: string; alt: string }[];
  /** Live site or demo — shows “Open project” when set. */
  projectUrl?: string;
  /** Repository — shows “View GitHub” when set. */
  githubUrl?: string;
  /**
   * Optional `blogs` collection entry id (filename without `.mdx`) — shows a “Write-up” link to `/blog/[slug]`.
   */
  writeUpSlug?: string;
};
