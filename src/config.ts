import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
    // Site / SEO
    author: string
    title: string
    description: string
    url: string
    lang: string
    email: string
    themes: {
        dark: ThemeObjectOrShikiThemeName
        light: ThemeObjectOrShikiThemeName
        verdance: ThemeObjectOrShikiThemeName
    }
    // Personal profile (homepage, etc.)
    profile: {
        username: string
        username2: string
        tagline: string
        highlights: string[]
    }
    // Social / contact links
    social: {
        facebook: string
        linkedin: string
        bluesky: string
        youtube: string
        github: string
        whatsapp: string
        trakteer: string
    }
}

export default {
    author: 'Indra Sah Noeldy',
    title: 'indra87g',
    description:
        'Personal website of Indra Sah Noeldy — developer sharing projects, blog posts, and notes on code.',
    url: 'https://indra87g.is-a.dev',
    lang: 'en',
    email: 'noeldycreator@gmail.com',
    themes: {
        dark: 'github-dark',
        light: 'github-light',
        verdance: 'github-dark',
    },
    profile: {
        username: 'indra87g',
        username2: 'TwinightWheel50',
        tagline: 'Fullstuck Developer with 3 years experience in building ...',
        highlights: [
            '🔋 Rust & Javascript enjoyer',
            '🔥 Vibe Coding + Have no life and job',
        ],
    },
    social: {
        facebook: 'https://facebook.com/indra87g',
        linkedin: 'https://linkedin.com',
        bluesky: 'https://indra87g.bsky.social',
        youtube: 'https://youtube.com/@indra87g',
        github: 'https://github.com/indra87g',
        whatsapp: 'https://wa.me/6283172646529',
        trakteer: 'https://trakteer.id/indra87g',
    },
} satisfies Config
