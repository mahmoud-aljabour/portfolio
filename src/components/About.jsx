import { Check } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'
import ProfileImage from './ProfileImage'
import SectionHeader from './SectionHeader'

const skills = [
  'Laravel & PHP Development',
  'RESTful API Design',
  'MySQL & Database Optimization',
  'Multi-Tenant Architecture',
  'Vue.js Frontend Integration',
  // 'Redis Caching & Queues',
]

export default function About() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="about" className="bg-background py-20 transition-colors duration-300 dark:bg-slate-950">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <SectionHeader
          id="about-heading"
          label="About"
          title="About Me"
          subtitle="Backend developer focused on scalable systems, secure APIs, and production-ready architecture."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <ProfileImage />
          </div>

          <div>
            <p className="mb-8 text-base leading-relaxed text-muted dark:text-slate-400">
              I&apos;m a Backend Developer with a B.Sc. in Web Technology and Information Security
              from Palestine Technical College. I specialize in building complex backend systems
              using PHP and Laravel, from multi-tenant SaaS platforms to secure payment integrations.
              With a track record of handling 5,000+ daily API requests at 98% uptime and optimizing
              response times by 86%, I combine technical precision with a security-focused mindset to
              deliver fast, reliable, and scalable digital products.
            </p>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-dark dark:text-slate-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check size={12} className="text-primary" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href={`${import.meta.env.BASE_URL}Mahmoud_Al-Jabour_CV.docx`}
              download="Mahmoud_Al-Jabour_CV.docx"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
