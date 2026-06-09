import { useFadeIn } from '../hooks/useFadeIn'
import ProfileImage from './ProfileImage'
import { GitHubIcon } from './SocialIcons'

export default function Hero() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="home" className="bg-background py-16 md:py-24">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="order-2 lg:order-1">
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
              className="btn-outline gap-2"
            >
              <GitHubIcon size={18} />
              View GitHub
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}
