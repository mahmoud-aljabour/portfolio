import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { useFadeIn } from '../hooks/useFadeIn'
import ProjectLightbox from './ProjectLightbox'
import smartSmileDashboard from '../assets/projects/smart-smile-dashboard.png'
import smartSmileLogin from '../assets/projects/smart-smile-login.png'
import smartSmilePatients from '../assets/projects/smart-smile-patients.png'
import smartSmileServices from '../assets/projects/smart-smile-services.png'
import smartSmileInvoices from '../assets/projects/smart-smile-invoices.png'
import smartSmileUsers from '../assets/projects/smart-smile-users.png'
import onlineStoreHomepage from '../assets/projects/online-store-homepage.png'
import onlineStoreDeals from '../assets/projects/online-store-deals.png'
import onlineStoreProduct from '../assets/projects/online-store-product.png'
import onlineStoreCart from '../assets/projects/online-store-cart.png'
import onlineStoreWishlist from '../assets/projects/online-store-wishlist.png'
import onlineStoreCustomerLogin from '../assets/projects/online-store-customer-login.png'
import onlineStoreAdminDashboard from '../assets/projects/online-store-admin-dashboard.png'
import onlineStoreAdminLogin from '../assets/projects/online-store-admin-login.png'
import libraryDashboard from '../assets/projects/library-dashboard.png'
import libraryBooks from '../assets/projects/library-books.png'
import libraryMembers from '../assets/projects/library-members.png'
import libraryBorrowings from '../assets/projects/library-borrowings.png'
import libraryAuthors from '../assets/projects/library-authors.png'
import libraryLogin from '../assets/projects/library-login.png'
import multiTenantArchitecture from '../assets/projects/multi-tenant-architecture.png'
import multiTenantArchitectureDetail from '../assets/projects/multi-tenant-architecture-detail.png'

const projects = [
  {
    title: 'Smart Smile Clinic',
    category: 'Healthcare / Clinic Management',
    description:
      'A web-based dental clinic management system for patient records, appointments, invoicing, prescriptions, and admin reporting.',
    tags: ['PHP', 'MySQL', 'Bootstrap 5', 'jQuery'],
    url: 'https://github.com/mahmoud-aljabour/Smart-Smile-Clinic',
    images: [
      { src: smartSmileDashboard, alt: 'Smart Smile Clinic dashboard', label: 'Dashboard' },
      { src: smartSmilePatients, alt: 'Smart Smile Clinic patients list', label: 'Patients' },
      { src: smartSmileServices, alt: 'Smart Smile Clinic services management', label: 'Services' },
      { src: smartSmileInvoices, alt: 'Smart Smile Clinic invoices', label: 'Invoices' },
      { src: smartSmileUsers, alt: 'Smart Smile Clinic user management', label: 'Users' },
      { src: smartSmileLogin, alt: 'Smart Smile Clinic login page', label: 'Login' },
    ],
  },
  {
    title: 'Multi-Tenant Inventory System',
    category: 'SaaS / Backend',
    description:
      'A multi-tenant inventory management system with tenant isolation, role-based access, and real-time stock tracking.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    url: 'https://github.com/mahmoud-aljabour/Multi-Tenant-Task',
    images: [
      {
        src: multiTenantArchitecture,
        alt: 'Multi-Tenant Inventory System architecture diagram',
        label: 'Architecture',
      },
      {
        src: multiTenantArchitectureDetail,
        alt: 'Multi-Tenant Inventory System backend architecture flow',
        label: 'System Flow',
      },
    ],
  },
  {
    title: 'Library Management System',
    category: 'Web Application',
    description:
      'Full-featured library system with book cataloging, member management, borrowing workflows, and reporting.',
    tags: ['Laravel', 'Blade', 'MySQL'],
    url: 'https://github.com/mahmoud-aljabour/Library-Management-System',
    images: [
      { src: libraryDashboard, alt: 'Library Management System dashboard', label: 'Dashboard' },
      { src: libraryBooks, alt: 'Library Management System books list', label: 'Books' },
      { src: libraryMembers, alt: 'Library Management System members list', label: 'Members' },
      { src: libraryBorrowings, alt: 'Library Management System borrowings', label: 'Borrowings' },
      { src: libraryAuthors, alt: 'Library Management System authors management', label: 'Authors' },
      { src: libraryLogin, alt: 'Library Management System login page', label: 'Login' },
    ],
  },
  {
    title: 'Online Store Platform',
    category: 'E-Commerce',
    description:
      'A full-stack Laravel e-commerce MVP with session cart, guest and authenticated checkout, stock-safe order placement, role-based admin panel, and bilingual storefront (EN/AR).',
    tags: ['Laravel', 'Breeze', 'Spatie Permission', 'MySQL', 'Pest'],
    url: 'https://github.com/mahmoud-aljabour/Online_Store',
    images: [
      { src: onlineStoreHomepage, alt: 'Online Store homepage', label: 'Homepage' },
      { src: onlineStoreDeals, alt: 'Online Store deals and featured products', label: 'Deals' },
      { src: onlineStoreProduct, alt: 'Online Store product detail page', label: 'Product' },
      { src: onlineStoreCart, alt: 'Online Store shopping cart in Arabic', label: 'Cart (AR)' },
      { src: onlineStoreWishlist, alt: 'Online Store customer wishlist', label: 'Wishlist' },
      { src: onlineStoreCustomerLogin, alt: 'Online Store customer login', label: 'Login' },
      { src: onlineStoreAdminDashboard, alt: 'Online Store admin dashboard', label: 'Admin' },
      { src: onlineStoreAdminLogin, alt: 'Online Store admin login page', label: 'Admin Login' },
    ],
  },
  // {
  //   title: 'Task Management API',
  //   category: 'REST API',
  //   description:
  //     'RESTful API for task management with authentication, CRUD operations, filtering, and API documentation.',
  //   tags: ['Laravel', 'PHP', 'Sanctum'],
  //   url: 'https://github.com/mahmoud-aljabour/Task_Manage_Api',
  //   color: 'from-orange-100 to-orange-200',
  //   emoji: '✅',
  // },
]

function ProjectGallery({ project, onImageClick }) {
  const images = project.images ?? []
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = images[index]

  useEffect(() => {
    setIndex(0)
  }, [project.title])

  useEffect(() => {
    if (images.length <= 1 || paused) return undefined

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [images.length, paused])

  const goTo = (nextIndex, event) => {
    event?.stopPropagation()
    setIndex((nextIndex + images.length) % images.length)
  }

  if (current) {
    return (
      <div
        className="group relative h-44 overflow-hidden bg-slate-50 dark:bg-slate-800"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={() => onImageClick(project, index)}
          className="relative h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
          aria-label={`View ${current.label || current.alt}`}
        >
          <img
            key={current.alt}
            src={current.src}
            alt={current.alt}
            className="h-full w-full object-cover object-top transition-opacity duration-500"
            loading="lazy"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-dark/0 transition-colors group-hover:bg-dark/25">
            <span className="flex scale-90 items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-dark opacity-0 shadow-sm transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-900/90 dark:text-slate-100">
              <ZoomIn size={14} />
              {current.label || 'View'}
            </span>
          </span>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => goTo(index - 1, event)}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 text-dark opacity-0 shadow-sm transition-all hover:bg-white group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={(event) => goTo(index + 1, event)}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 text-dark opacity-0 shadow-sm transition-all hover:bg-white group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
              aria-label="Next screenshot"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
              {images.map((image, dotIndex) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={(event) => goTo(dotIndex, event)}
                  className={`h-1.5 rounded-full transition-all ${dotIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                  aria-label={`Show ${image.label || image.alt}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div
      className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.color} text-5xl`}
    >
      {project.emoji}
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useFadeIn()
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (project, index) => {
    setLightbox({ title: project.title, images: project.images, index })
  }

  const closeLightbox = () => setLightbox(null)

  return (
    <section id="portfolio" className="bg-white py-20 transition-colors duration-300 dark:bg-slate-900">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title">Projects</h2>
          </div>
          <a
            href="https://github.com/mahmoud-aljabour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-card bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5a52e0] hover:shadow-lg"
          >
            <GitHubIcon size={16} />
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover overflow-hidden rounded-card border border-border bg-white shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-card-dark"
            >
              <ProjectGallery project={project} onImageClick={openLightbox} />
              <div className="p-5">
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-dark dark:text-slate-100">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted dark:text-slate-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary-light px-2 py-0.5 text-xs font-medium text-primary dark:bg-primary/20"
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
                  <GitHubIcon size={14} />
                  View on GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <ProjectLightbox
          images={lightbox.images}
          index={lightbox.index}
          title={lightbox.title}
          onClose={closeLightbox}
          onNavigate={(index) => setLightbox((prev) => ({ ...prev, index }))}
        />
      )}
    </section>
  )
}
