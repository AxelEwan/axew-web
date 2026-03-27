import { defineCollection, z } from 'astro:content';
const videos = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),           // 支持未来日期
    cover: z.string(),
    recommend: z.boolean().optional(),
    enableComments: z.boolean().default(true),
    showRating: z.boolean().default(true),
    hide: z.boolean().optional(),
    category: z.string(),
    intro: z.string(),
    tags: z.array(z.string()),
    location: z.string().optional(),
    platforms: z.object({     // 核心字段
      bilibili: z.string().optional(),   // 只填 BV 号，如 "BV1xx..."
      douyin: z.string().optional(),
      xiaohongshu: z.string().optional(),
      youtube: z.string().optional(),
      local: z.string().optional(),      // 本地视频链接
    }).optional(),
    rating: z.number().min(0).max(10).optional(),
    views: z.number().optional(),
    likes: z.number().optional(),
    comments: z.array(z.object({       // 手动评论
      avatar: z.string(),
      nickname: z.string(),
      content: z.string(),
    })).optional(),
  })
});
// 再加一个 articles collection 给你的 MD 文章
export const collections = { videos, articles };
