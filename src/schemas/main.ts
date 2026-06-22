import { defineCollection } from 'astro:content'
import { blogSchema } from './blog'
import { projectSchema } from './project'

export const collections = {
    blog: defineCollection({
        type: 'content',
        schema: blogSchema,
    }),
    project: defineCollection({
        type: 'content',
        schema: projectSchema,
    }),
}
