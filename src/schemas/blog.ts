import { z } from 'astro:content'

import { removeDuplicatesAndToLowerCase } from '@/lib/helper'

export const blogSchema = () =>
    z.object({
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        title: z.string(),
        description: z.string(),
        heroImage: z.string().default('/placeholder.webp'),
        heroAlt: z.string().default('This is image'),
        draft: z.boolean(),
        tags: z
            .array(z.string())
            .nonempty()
            .transform(removeDuplicatesAndToLowerCase),
    })
