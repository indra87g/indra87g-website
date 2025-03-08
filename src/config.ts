import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
    author: string
    title: string
    description: string
    lang: string
    themes: {
        dark: ThemeObjectOrShikiThemeName
        light: ThemeObjectOrShikiThemeName
    }
}

export default {
    author: 'Indra Sah Noeldy',
    title: 'indra87g',
    description: 'Lorem ipsum dolor sit amet',
    lang: 'en',
    themes: {
        dark: 'github-dark',
        light: 'github-light',
    },
} satisfies Config
