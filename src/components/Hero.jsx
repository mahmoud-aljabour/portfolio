import { useFadeIn } from '../hooks/useFadeIn'
import profilePhoto from '../assets/profile.jpg'

function DecorativeDots({ className }) {
  return (
    <div className={`grid grid-cols-3 gap-1.5 ${className}`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/40" />
      ))}
    </div>
  )
}

export default function Hero() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="home" className="bg-background py-16 md:py-24">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div>
          <span className="section-label mb-4 inline-block">Backend Developer</span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-dark md:text-5xl lg:text-[3.25rem]">
            I build scalable{' '}
            <span className="highlight">backend systems</span>
            {' '}and robust APIs
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">
            Backend Developer specializing in PHP and Laravel, designing multi-tenant SaaS
            architectures, secure payment flows, and high-performance REST APIs. Handling
            5,000+ daily requests with 98% uptime from Khan Yunis, Palestine 🇵🇸
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a
              href="https://github.com/mahmoud-aljabour"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <DecorativeDots className="absolute -left-4 top-4 z-10" />
          <DecorativeDots className="absolute -bottom-2 -right-2 z-10" />

          <div className="absolute -right-4 top-8 text-2xl font-light text-primary">+</div>
          <div className="absolute bottom-16 -left-2 text-xl font-light text-teal-400">+</div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-primary/20"
              style={{
                clipPath: 'polygon(10% 0%, 100% 5%, 95% 100%, 0% 90%)',
              }}
            />
            <div className="relative overflow-hidden rounded-card bg-primary-light p-4">
              <div className="aspect-[4/5] overflow-hidden rounded-card">
                <img
                  src={profilePhoto}
                  alt="Mahmoud M. Al-Jabour"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
