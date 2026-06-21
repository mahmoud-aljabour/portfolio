import { Mail } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'
import SectionHeader from './SectionHeader'

const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud.aljabour@gmail.com'

export default function Contact() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white py-20 transition-colors duration-300 dark:bg-slate-900"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <SectionHeader
          id="contact-heading"
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss an opportunity? Send me an email and I'll get back to you as soon as possible."
        />

        <div className="text-center">
          <a
            href={GMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
