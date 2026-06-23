import { useState, useEffect } from 'react'
import config from '@/config'

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light')

    const applyTheme = (newTheme: string) => {
        document.documentElement.classList.remove('dark')
        document.documentElement.removeAttribute('data-theme')

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.setAttribute('data-theme', config.themes.dark)
        } else if (newTheme === 'light') {
            document.documentElement.setAttribute('data-theme', config.themes.light)
        } else if (newTheme === 'verdance') {
            document.documentElement.classList.add('dark')
            document.documentElement.setAttribute('data-theme', 'verdance')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches
        const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light')

        setTheme(initialTheme)
        applyTheme(initialTheme)
    }, [])

    const handleToggleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const themes = ['light', 'dark', 'verdance']
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        const newTheme = themes[nextIndex]

        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }

    const getNextThemeName = () => {
        const themes = ['light', 'dark', 'verdance']
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        return themes[nextIndex]
    }

    return (
        <div className="relative group">
            <button
                type="button"
                onClick={handleToggleClick}
                aria-label={`Switch to ${getNextThemeName()} mode`}
                aria-describedby="theme-switcher-tooltip"
                className="flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main"
            >
                {/* Light Icon (Moon-like icon from original) */}
                {theme === 'light' && (
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            className="fill-text"
                            d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                        />
                        <path
                            className="fill-text"
                            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                        />
                    </svg>
                )}
                {/* Dark Icon (Sun-like icon from original) */}
                {theme === 'dark' && (
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            className="fill-text"
                            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                        />
                        <path
                            className="fill-text"
                            d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                        />
                    </svg>
                )}
                {/* Verdance Icon (Plant/Leaf inspired) */}
                {theme === 'verdance' && (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                        <path
                            d="M12 2V22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                        <path
                            d="M12 12C12 12 15 9 18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                        <path
                            d="M12 17C12 17 15 14 18 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                        <path
                            d="M12 12C12 12 9 9 6 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                        <path
                            d="M12 17C12 17 9 14 6 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-text"
                        />
                    </svg>
                )}
            </button>
            <span
                id="theme-switcher-tooltip"
                className="absolute top-8 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 group-focus-within:scale-100"
            >
                Switch to {getNextThemeName()} mode
            </span>
        </div>
    )
}
