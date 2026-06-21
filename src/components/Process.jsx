import { useFadeIn } from '../hooks/useFadeIn'
import SectionHeader from './SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We sit down with your idea, your users, and your goals. No code yet. Just clarity.',
  },
  {
    number: '02',
    title: 'Validate',
    description:
      'We test the riskiest assumptions cheaply, before a dollar goes into development.',
  },
  {
    number: '03',
    title: 'Architect',
    description:
      'We pick the stack and scope that fit your budget, timeline, and growth plan.',
  },
  {
    number: '04',
    title: 'Build & Ship',
    description:
      'We build the core MVP and get it in front of real users fast, then iterate.',
  },
]

export default function Process() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-background py-20 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <SectionHeader
          id="process-heading"
          label="Process"
          title="How We Work Together"
          subtitle="A clear, low-risk path where you always know what's next."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`card-hover group relative overflow-hidden rounded-card border border-border border-b-4 bg-white p-6 shadow-card dark:border-slate-700 dark:bg-slate-900 dark:shadow-card-dark ${
                index === 0 ? 'border-b-primary' : 'border-b-transparent hover:border-b-primary'
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-3 select-none text-6xl font-extrabold leading-none text-primary/[0.06] dark:text-primary/[0.08]"
              >
                {step.number}
              </span>

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-dark dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
