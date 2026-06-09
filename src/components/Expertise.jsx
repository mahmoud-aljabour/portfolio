import { Server, Code2, Layers, ShoppingCart } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const expertise = [
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Building robust server-side applications with Laravel, PHP, and clean architecture patterns for scalable solutions.',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    icon: Code2,
    title: 'API Design',
    description:
      'Designing RESTful APIs with proper authentication, validation, and documentation for seamless integrations.',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
  },
  {
    icon: Layers,
    title: 'SaaS Architecture',
    description:
      'Architecting multi-tenant SaaS platforms with subscription billing, role-based access, and tenant isolation.',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Developing full-featured online stores with inventory management, payment processing, and order workflows.',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    borderColor: 'border-red-500',
  },
]

export default function Expertise() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="bg-background py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 text-center">
          <span className="section-label mb-3 inline-block">My Skills</span>
          <h2 className="section-title">My Expertise</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`card-hover group rounded-card border border-border border-b-4 bg-white p-6 shadow-card ${item.borderColor} ${index === 0 ? 'border-b-primary' : 'border-b-transparent hover:border-b-primary'}`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <item.icon size={24} className={item.iconColor} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
