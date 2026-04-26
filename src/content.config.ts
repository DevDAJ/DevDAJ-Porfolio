import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blogs,
};
