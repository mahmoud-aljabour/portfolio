import { useFadeIn } from '../hooks/useFadeIn'

const skillBars = [
  { name: 'PHP', percent: 95 },
  { name: 'Laravel', percent: 92 },
  { name: 'MySQL', percent: 88 },
  { name: 'Redis', percent: 80 },
  { name: 'JavaScript', percent: 85 },
  { name: 'Vue.js', percent: 78 },
  { name: 'Tailwind CSS', percent: 90 },
  { name: 'Blade', percent: 88 },
]

const tools = [
  'Git', 'Docker', 'Postman', 'Composer', 'NPM', 'Linux',
  'PHPUnit', 'Vite', 'Figma', 'VS Code', 'MySQL Workbench', 'Redis CLI',
]

export default function Skills() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="bg-background py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 text-center">
          <span className="section-label mb-3 inline-block">Proficiency</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="mx-auto mb-12 max-w-3xl space-y-5">
          {skillBars.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-dark">{skill.name}</span>
                <span className="text-sm font-medium text-primary">{skill.percent}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.percent}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 text-sm font-semibold text-muted">Tools &amp; Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-dark shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
