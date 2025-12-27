import { useState, useEffect } from 'react'

const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <title>Open menu</title>
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
    >
        <title>Close menu</title>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
)

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

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

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 text-text dark:text-main"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <div
                className={`absolute right-4 top-[90px] z-40 w-48 rounded-base border-2 border-border bg-bg text-text transition-all duration-300 ease-in-out dark:border-main dark:bg-darkBg dark:text-main ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col items-start gap-4 p-4">
                    <a href="/blog" className="hover:underline">
                        Blog
                    </a>
                    <a href="/project" className="hover:underline">
                        Project
                    </a>
                    <a href="/cv" className="hover:underline">
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}
