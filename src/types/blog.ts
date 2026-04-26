export type BlogPost = {
  slug: string;
  title: string;
  /** `YYYY-MM-DD` for sorting */
  date: string;
  excerpt: string;
  readingMinutes: number;
};
