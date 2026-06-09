import { Code2, UserRound, Share2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Me', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Testimonials', href: '#testimonials' },
]

const socialLinks = [
  { icon: Code2, href: 'https://github.com/mahmoud-aljabour', label: 'GitHub' },
  { icon: UserRound, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Share2, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              MA
            </div>
            <span className="text-lg font-bold text-dark">Mahmoud</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-6">
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

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted">
            Made with ❤️ by{' '}
            <span className="font-semibold text-dark">Mahmoud M. Al-Jabour</span>
            {' '}· © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
