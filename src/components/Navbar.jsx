import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Me', href: '#about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            MA
          </div>
          <span className="text-lg font-bold text-dark">Mahmoud Al-Jabour</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-outline hidden text-sm md:inline-flex">
          Contact Me
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-dark md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-sm font-medium text-muted transition-colors hover:text-primary"
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
