import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { value: '5K+', label: 'Daily API Requests' },
  { value: '98%', label: 'Uptime' },
  { value: '86%', label: 'Faster Response' },
  { value: '5+', label: 'Projects' },
]

export default function Stats() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="border-y border-border bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-muted dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
