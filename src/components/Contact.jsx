import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const topics = [
  'Web Development',
  'API Development',
  'Freelance Project',
  'Full-Time Opportunity',
  'Other',
]

export default function Contact() {
  const { ref, isVisible } = useFadeIn()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    agreed: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      agreed: false,
    })
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 text-center">
          <span className="section-label mb-3 inline-block">Get In Touch</span>
          <h2 className="section-title mb-4">Contact me</h2>
          <p className="mx-auto max-w-lg text-sm text-muted">
            Have a project in mind or want to discuss an opportunity? Fill out the form below
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-dark">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-dark">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Doe"
                value={form.lastName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-dark">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+970 XXX XXX XXX"
                value={form.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-dark">
              Subject
            </label>
            <select
              id="topic"
              name="topic"
              required
              value={form.topic}
              onChange={handleChange}
              className="input-field"
            >
              <option value="" disabled>
                Choose a topic
              </option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              className="input-field resize-none"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreed"
              required
              checked={form.agreed}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted">
              I agree to the privacy policy and consent to having my data processed.
            </span>
          </label>

          <div className="pt-2 text-center">
            <button type="submit" className="btn-primary w-full sm:w-auto sm:px-12">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
