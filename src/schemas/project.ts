import { z } from 'astro:content'

import { removeDuplicatesAndToLowerCase } from '@/lib/helper'

export const projectSchema = () =>
    z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().default('/placeholder.webp'),
        heroAlt: z.string().default('Preview image for my project'),
        draft: z.boolean(),
        tags: z
            .array(z.string())
            .nonempty()
            .transform(removeDuplicatesAndToLowerCase),
    })
