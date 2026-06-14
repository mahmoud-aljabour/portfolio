import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ProjectLightbox({ images, index, title, onClose, onNavigate }) {
  const current = images[index]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && index > 0) onNavigate(index - 1)
      if (event.key === 'ArrowRight' && index < images.length - 1) onNavigate(index + 1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, index, onClose, onNavigate])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm dark:bg-black/85"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X size={22} />
      </button>

      {images.length > 1 && index > 0 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNavigate(index - 1)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {images.length > 1 && index < images.length - 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onNavigate(index + 1)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          loading="eager"
          decoding="async"
          className="max-h-[82vh] w-full rounded-card object-contain shadow-2xl"
        />
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-white">{title}</p>
          {current.label && <p className="mt-1 text-xs text-white/70">{current.label}</p>}
          {images.length > 1 && (
            <p className="mt-1 text-xs text-white/50">
              {index + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
