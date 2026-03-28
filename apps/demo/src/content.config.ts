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
    title: z.string().optional(),
    date: z.date().or(z.string()).optional(),
    cover: z.string().optional(),
    recommend: z.boolean().optional().default(false),
    enableComments: z.boolean().optional().default(true),
    showRating: z.boolean().optional().default(true),
    hide: z.boolean().optional().default(false),
    category: z.string().optional(),
    intro: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    location: z.string().optional(),
    platforms: z.any().optional(),           // 完全不限制格式
    rating: z.number().optional(),
    views: z.number().optional().default(0),
    likes: z.number().optional().default(0),
    author: z.string().optional(),
    comments: z.array(z.any()).optional().default([]), // 完全不限制
  }).passthrough(),   // 允许任意额外字段，不报错
});

export const collections = { pages, videos };
