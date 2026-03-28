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
    date: z.date().or(z.string()),           // 兼容字符串日期（如 pubDate）
    cover: z.string(),
    recommend: z.boolean().optional().default(false),
    enableComments: z.boolean().default(true),
    showRating: z.boolean().default(true),
    hide: z.boolean().optional().default(false),
    category: z.string().optional(),
    intro: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    location: z.string().optional(),
    platforms: z.any().optional(),           // 兼容字符串或对象
    rating: z.number().optional(),
    views: z.number().optional().default(0),
    likes: z.number().optional().default(0),
    author: z.string().optional(),
    comments: z.array(z.any()).optional().default([]),  // 兼容旧格式
  }).passthrough(),  // 允许额外字段，不报错
});

export const collections = { pages, videos };
