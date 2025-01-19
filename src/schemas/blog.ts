import { z } from 'astro:content';

import type { SchemaContext } from 'astro:content';

/** lowercase tags for routes */
const removeDuplicatesAndToLowerCase = (items: string[]) => {
  const lowercaseItems = items.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
};

// schema and collection are separate
export const blogSchema = ({ image }: SchemaContext) =>
  z.object({
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    title: z.string(),
    description: z.string(),
    heroImage: image(),
    heroAlt: z.string().default('This is image'),
    draft: z.boolean(),
    tags: z.array(z.string()).nonempty().transform(removeDuplicatesAndToLowerCase),
  });
