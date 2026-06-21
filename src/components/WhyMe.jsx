import { MessageSquare, ShieldCheck, Rocket, Zap } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'
import SectionHeader from './SectionHeader'

const reasons = [
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'You always know what is happening and what comes next. No guessing, no surprises along the way.',
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Low-Risk Approach',
    description:
      'We validate assumptions before heavy investment. Your budget goes where it actually matters.',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
  },
  {
    icon: Rocket,
    title: 'Production-Ready Code',
    description:
      'Systems built to handle real traffic, not just demos. Reliable, secure, and built to scale.',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'MVPs shipped in weeks, not months. Get in front of real users quickly, then iterate with confidence.',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-500',
    borderColor: 'border-red-500',
  },
]

export default function WhyMe() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="why-me"
      aria-labelledby="why-me-heading"
      className="bg-white py-20 transition-colors duration-300 dark:bg-slate-900"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <SectionHeader
          id="why-me-heading"
          label="Why Me"
          title="Why Founders Work With Me"
          subtitle="More than code. A partner who understands your product, your timeline, and your budget."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <article
              key={item.title}
              className={`card-hover group rounded-card border border-border border-b-4 bg-white p-6 shadow-card dark:border-slate-700 dark:bg-slate-900 dark:shadow-card-dark ${item.borderColor} ${index === 0 ? 'border-b-primary' : 'border-b-transparent hover:border-b-primary'}`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <item.icon size={24} className={item.iconColor} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-dark dark:text-slate-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted dark:text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
