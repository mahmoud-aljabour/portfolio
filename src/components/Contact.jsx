import { Mail } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const GMAIL_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud.aljabour@gmail.com'

export default function Contact() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="contact" className="bg-white py-20 transition-colors duration-300 dark:bg-slate-900">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <h2 className="section-title mb-6">Contact me</h2>
        <p className="mx-auto mb-8 max-w-lg text-sm text-muted dark:text-slate-400">
          Have a project in mind or want to discuss an opportunity? Send me an email
          and I&apos;ll get back to you as soon as possible.
        </p>

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
    </section>
  )
}
