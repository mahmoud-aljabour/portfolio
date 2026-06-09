import { Star } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const testimonials = [
  {
    quote:
      'Mahmoud delivered an exceptional Laravel application that exceeded our expectations. His attention to detail and clean code architecture made the project a success.',
    name: 'Ahmed Hassan',
    role: 'Project Manager, Tech Solutions',
    initial: 'A',
    color: 'bg-blue-500',
  },
  {
    quote:
      'Working with Mahmoud on our e-commerce platform was seamless. He understood our requirements quickly and built a robust, scalable solution on time.',
    name: 'Sara Khalil',
    role: 'Founder, Digital Commerce Co.',
    initial: 'S',
    color: 'bg-green-500',
  },
  {
    quote:
      'His API design skills are outstanding. The RESTful endpoints he built are well-documented, secure, and easy to integrate with our frontend team.',
    name: 'Omar Nasser',
    role: 'Lead Developer, StartupHub',
    initial: 'O',
    color: 'bg-purple-500',
  },
]

function StarRating() {
  return (
    <div className="mb-4 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} className="fill-star text-star" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="testimonials" className="bg-primary-light/40 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 text-center">
          <span className="section-label mb-3 inline-block">Clients Feedback</span>
          <h2 className="section-title">Customer testimonials</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="card-hover rounded-card border border-border bg-white p-6 shadow-card"
            >
              <StarRating />
              <p className="mb-6 text-sm leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${item.color}`}
                >
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
