import { useFadeIn } from '../hooks/useFadeIn'

const skills = [
  'PHP',
  'Laravel',
  'MySQL',
  // 'Redis',
  'JavaScript',
  'Vue.js',
  'Tailwind CSS',
  'Blade',
  'Git',
  'Docker',
  'Postman',
  'Composer',
  'NPM',
  'Linux',
  'PHPUnit',
  'Vite',
  'Figma',
  'VS Code',
  'MySQL Workbench',
  // 'Redis CLI',
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
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-dark shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
