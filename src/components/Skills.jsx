import { useFadeIn } from '../hooks/useFadeIn'
import SectionHeader from './SectionHeader'

const skills = [
  'PHP',
  'Laravel',
  'MySQL',
  // 'Redis',
  'JavaScript',
  'Tailwind CSS',
  'Blade',
  'Git',
  'Docker',
  'Postman',
  'Composer',
  'Linux',
  'PHPUnit',
  'VS Code',
  'MySQL Workbench',
  // 'Redis CLI',
]

export default function Skills() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-white py-20 transition-colors duration-300 dark:bg-slate-900"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <SectionHeader
          id="skills-heading"
          label="Skills"
          title="Tools & Technologies"
          subtitle="The stack I use daily to build, test, and ship reliable backend systems."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-dark shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
