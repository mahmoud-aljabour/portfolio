import { ArrowUpRight, Code2 } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const projects = [
  {
    title: 'Multi-Tenant Inventory System',
    category: 'SaaS / Backend',
    description:
      'A multi-tenant inventory management system with tenant isolation, role-based access, and real-time stock tracking.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Redis'],
    url: 'https://github.com/mahmoud-aljabour/Multi-Tenant-Task',
    color: 'from-purple-100 to-purple-200',
    emoji: '📦',
  },
  {
    title: 'Library Management System',
    category: 'Web Application',
    description:
      'Full-featured library system with book cataloging, member management, borrowing workflows, and reporting.',
    tags: ['Laravel', 'Blade', 'MySQL'],
    url: 'https://github.com/mahmoud-aljabour/Library-Management-System',
    color: 'from-blue-100 to-blue-200',
    emoji: '📚',
  },
  {
    title: 'Online Store Platform',
    category: 'E-Commerce',
    description:
      'Complete e-commerce platform with product catalog, shopping cart, order management, and admin dashboard.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    url: 'https://github.com/mahmoud-aljabour/Online_Store',
    color: 'from-green-100 to-green-200',
    emoji: '🛒',
  },
  {
    title: 'Task Management API',
    category: 'REST API',
    description:
      'RESTful API for task management with authentication, CRUD operations, filtering, and API documentation.',
    tags: ['Laravel', 'PHP', 'Sanctum'],
    url: 'https://github.com/mahmoud-aljabour/Task_Manage_Api',
    color: 'from-orange-100 to-orange-200',
    emoji: '✅',
  },
]

export default function Projects() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="portfolio" className="bg-white py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-label mb-3 inline-block">Recent Projects</span>
            <h2 className="section-title">My Portfolio</h2>
          </div>
          <a
            href="https://github.com/mahmoud-aljabour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-card bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5a52e0] hover:shadow-lg"
          >
            <Code2 size={16} />
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover overflow-hidden rounded-card border border-border bg-white shadow-card"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.color} text-5xl`}
              >
                {project.emoji}
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-dark">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary-light px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-[#5a52e0]"
                >
                  View on GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
