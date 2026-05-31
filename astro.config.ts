import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import pagefind from 'astro-pagefind'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
    build: {
        format: 'file',
    },
    integrations: [
        tailwind(),
        react(),
        expressiveCode({
            themes: ['github-dark', 'github-light'],
            styleOverrides: {
                frames: {
                    editorActiveTabIndicatorTopColor: 'transparent',
                    editorActiveTabBorderColor: '#80808080',
                    editorTabBarBorderBottomColor: '#80808080',
                    tooltipSuccessBackground: 'black',
                },
                uiFontFamily: 'inherit',
                borderColor: '#80808080',
            },
        }),
        mdx(),
        icon(),
        sitemap(),
        svelte(),
        pagefind(),
    ],

    site: 'https://hello.indra87g.pages.dev/',
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
})
