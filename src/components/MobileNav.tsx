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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                // md breakpoint in Tailwind
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
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
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative text-text dark:text-main rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <MenuIcon />
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <div
                id="mobile-menu"
                ref={navRef}
                className={`fixed right-0 top-0 bottom-0 z-[70] w-64 border-l-2 border-border bg-bg text-text shadow-[-4px_0_0_0_#000] transition-transform duration-300 ease-in-out dark:border-darkBorder dark:bg-darkBg dark:text-main dark:shadow-[0_0_0_0_#000] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack h-[70px]">
                        <span className="font-heading text-xl">Menu</span>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-text dark:text-darkText rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main"
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 p-6 gap-6 overflow-y-auto">
                        <a
                            href="/blog"
                            className={`text-xl hover:underline hover:text-main rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/blog') ? 'text-main font-bold' : ''}`}
                            aria-current={
                                currentPath.startsWith('/blog')
                                    ? 'page'
                                    : undefined
                            }
                        >
                            Blog
                        </a>
                        <a
                            href="/project"
                            className={`text-xl hover:underline hover:text-main rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/project') ? 'text-main font-bold' : ''}`}
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
                            className={`text-xl hover:underline hover:text-main rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main ${currentPath.startsWith('/cv') ? 'text-main font-bold' : ''}`}
                            aria-current={
                                currentPath.startsWith('/cv')
                                    ? 'page'
                                    : undefined
                            }
                        >
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
