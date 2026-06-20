import { useState, useEffect, useRef } from 'react'

const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
)

const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
)

export default function MobileNav({
    currentPath = '',
}: { currentPath?: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    // ⚡ Bolt: Replaced expensive unthrottled resize listener with matchMedia change listener.
    // This reduces main thread blocking during window resize by firing only when the breakpoint is crossed, not continuously.
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        const handleMediaChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                // md breakpoint in Tailwind
                setIsOpen(false)
            }
        }

        // Check initial state
        if (mediaQuery.matches) {
            setIsOpen(false)
        }

        mediaQuery.addEventListener('change', handleMediaChange)
        return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen])

    return (
        <div className="md:hidden" ref={navRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 text-text dark:text-main rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <div
                id="mobile-menu"
                className={`absolute right-4 top-[90px] z-40 w-48 rounded-base border-2 border-border bg-bg text-text transition-all duration-300 ease-in-out dark:border-main dark:bg-darkBg dark:text-main ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col items-start gap-4 p-4">
                    <a
                        href="/blog"
                        className={`hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/blog') ? 'text-main font-bold' : ''}`}
                        aria-current={
                            currentPath.startsWith('/blog') ? 'page' : undefined
                        }
                    >
                        Blog
                    </a>
                    <a
                        href="/project"
                        className={`hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/project') ? 'text-main font-bold' : ''}`}
                        aria-current={
                            currentPath.startsWith('/project')
                                ? 'page'
                                : undefined
                        }
                    >
                        Project
                    </a>
                    <a
                        href="/cv"
                        className={`hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/cv') ? 'text-main font-bold' : ''}`}
                        aria-current={
                            currentPath.startsWith('/cv') ? 'page' : undefined
                        }
                    >
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}
