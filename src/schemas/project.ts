import { z } from 'astro:content';

//import { DEFAULTS_PROJECT } from '@/constants/collections';

import type { SchemaContext } from 'astro:content';

const removeDuplicatesAndToLowerCase = (items: string[]) => {
  const lowercaseItems = items.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
};

export const projectSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    heroAlt: z.string().default("This is image"),
    draft: z.boolean(),
    tags: z.array(z.string()).nonempty().transform(removeDuplicatesAndToLowerCase),
  });
