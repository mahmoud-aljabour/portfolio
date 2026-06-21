import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-transparent bg-white shadow-nav transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-nav-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            M
          </div>
          <span className="text-lg font-bold text-dark dark:text-slate-100">Mahmoud Al-Jabour</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary dark:text-slate-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-outline text-sm">
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-dark dark:text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-sm font-medium text-muted transition-colors hover:text-primary dark:text-slate-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={handleNavClick} className="btn-outline w-full text-sm">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
