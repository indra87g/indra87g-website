import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import tailwindScrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                main: 'var(--main)',
                mainAccent: 'var(--main-accent)', // not needed for shadcn components
                overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

                bg: 'var(--bg)',
                text: 'var(--text)',
                border: 'var(--border)',

                darkBg: 'var(--bg)',
                darkText: 'var(--text)',
                darkBorder: 'var(--border)',
                secondaryBlack: 'var(--secondary-black)', // opposite of plain white, not used pitch black because borders and box-shadows are that color
            },
            borderRadius: {
                base: 'var(--radius)',
            },
            boxShadow: {
                light: 'var(--shadow)',
                dark: 'var(--shadow)',
            },
            translate: {
                boxShadowX: '0px',
                boxShadowY: '4px',
                reverseBoxShadowX: '0px',
                reverseBoxShadowY: '-4px',
            },
            fontWeight: {
                base: '400',
                heading: '600',
            },
            screens: {
                w700: { max: '700px' },
                w500: { max: '500px' },
                w400: { max: '400px' },
            },
            typography: (theme) => ({
                lightMode: {
                    css: {
                        '--tw-prose-kbd': 'var(--text)',
                        '--tw-prose-quote-borders': 'var(--text)',
                        '--tw-prose-bullets': 'var(--text)',
                        '--tw-prose-code': 'var(--text)',
                    },
                },
                darkMode: {
                    css: {
                        '--tw-prose-kbd': 'var(--text)',
                        '--tw-prose-quote-borders': 'var(--text)',
                        '--tw-prose-bullets': 'var(--text)',
                        '--tw-prose-code': 'var(--text)',
                    },
                },
            }),
        },
    },
    plugins: [typography, tailwindScrollbar],
    darkMode: 'class',
}
