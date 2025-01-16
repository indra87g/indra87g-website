import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'

import mdx from '@astrojs/mdx'

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), expressiveCode({
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
  }), mdx(), icon(), alpinejs()],

  site: 'https://indra87g.surge.sh/',
  adapter: vercel(),
})