import { Check } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'
import profilePhoto from '../assets/profile.jpg'

const skills = [
  'Laravel & PHP Development',
  'RESTful API Design',
  'MySQL & Database Optimization',
  'Multi-Tenant Architecture',
  'Vue.js Frontend Integration',
  'Redis Caching & Queues',
]

export default function About() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="about" className="bg-white py-20">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -bottom-6 -left-6 -right-6 top-8 rounded-[2rem] bg-primary/30"
            style={{
              clipPath: 'polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)',
            }}
          />
          <div className="relative z-10 overflow-hidden rounded-card">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={profilePhoto}
                alt="Mahmoud M. Al-Jabour"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div>
          <span className="section-label mb-3 inline-block">About</span>
          <h2 className="section-title mb-6">About Me</h2>
          <p className="mb-8 text-base leading-relaxed text-muted">
            I&apos;m a Backend Developer with a B.Sc. in Web Technology and Information Security
            from Palestine Technical College. I specialize in building complex backend systems
            using PHP and Laravel, from multi-tenant SaaS platforms to secure payment integrations.
            With a track record of handling 5,000+ daily API requests at 98% uptime and optimizing
            response times by 86%, I combine technical precision with a security-focused mindset to
            deliver fast, reliable, and scalable digital products.
          </p>

          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-sm text-dark">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check size={12} className="text-primary" />
                </span>
                {skill}
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/mahmoud-aljabour"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
