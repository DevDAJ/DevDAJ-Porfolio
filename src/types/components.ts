import type { CollectionEntry } from "astro:content";
import type { Project } from "./portfolio";

export type ProjectCardHeadingTag = "h2" | "h3" | "h4";

export interface ProjectCardProps {
  project: Project;
  heading?: ProjectCardHeadingTag;
  /** First visible card image: eager + high fetch priority for LCP (e.g. homepage / projects). */
  cardImagePriority?: boolean;
}

export interface SocialIconLinkProps {
  href: string;
  tooltip: string;
  ariaLabel: string;
  external?: boolean;
}

export interface ThemeToggleProps {
  /** `toolbar`: header control. `floating`: fixed FAB for small screens (includes `md:hidden`). */
  variant?: "toolbar" | "floating";
}

export interface BlogPostPageProps {
  post: CollectionEntry<"blogs">;
}
