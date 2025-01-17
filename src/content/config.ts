import { z, defineCollection, type CollectionEntry } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().or(z.date()),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};

export type Post = CollectionEntry<'blog'>;
