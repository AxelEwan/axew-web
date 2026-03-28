import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()),           // 支持字符串日期
    cover: z.string(),
    recommend: z.boolean().optional().default(false),
    enableComments: z.boolean().default(true),
    showRating: z.boolean().default(true),
    hide: z.boolean().optional().default(false),
    category: z.string().optional(),
    intro: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    location: z.string().optional(),
    platforms: z.string().optional(),        // 兼容你现在的字符串格式
    rating: z.number().optional(),
    views: z.number().optional().default(0),
    likes: z.number().optional().default(0),
    author: z.string().optional(),
    comments: z.array(z.any()).optional().default([]),  // 兼容任意格式
  }),
});

export const collections = { pages, videos };
