import { GitHubIcon, LinkedInIcon, XIcon } from './SocialIcons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { Icon: GitHubIcon, href: 'https://github.com/mahmoud-aljabour', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mahmoud-al-jabour/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              M
            </div>
            <span className="text-lg font-bold text-dark dark:text-slate-100">Mahmoud Al-Jabour</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-6">
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

          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary hover:bg-primary-light hover:text-primary dark:border-slate-700 dark:text-slate-400 dark:hover:bg-primary/15"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center dark:border-slate-800">
          <p className="text-sm text-muted dark:text-slate-400">
            &copy; {new Date().getFullYear()} Mahmoud M. Al-Jabour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
