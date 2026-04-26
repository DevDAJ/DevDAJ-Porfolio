import { getCollection, type CollectionEntry } from "astro:content";
import type { BlogPost } from "../types/blog";
import { readingTimeMinutesFromBody } from "../utils/readingTime";

export type { BlogPost } from "../types/blog";

function entryToListPost(entry: CollectionEntry<"blogs">): BlogPost {
  return {
    slug: entry.id,
    title: entry.data.title,
    date: entry.data.date,
    excerpt: entry.data.excerpt,
    readingMinutes: readingTimeMinutesFromBody(entry.body),
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blogs", ({ data }) => data.draft !== true);
  return posts.map(entryToListPost);
}

export async function getLatestBlogPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
