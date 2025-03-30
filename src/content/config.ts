import { defineCollection } from 'astro:content'

import { blogSchema } from '@/schemas/blog'
import { projectSchema } from '@/schemas/project'

const blogCollection = defineCollection({
    type: 'content',
    schema: blogSchema,
})

const projectCollection = defineCollection({
    type: 'content',
    schema: projectSchema,
})

export const collections = {
    blog: blogCollection,
    project: projectCollection,
}
