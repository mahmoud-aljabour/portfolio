import profilePhoto from '../assets/profile.jpg'

export default function ProfileImage({ className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] sm:max-w-[360px] ${className}`}>
      <div
        className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-card bg-primary/10"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-card border border-border/60 shadow-card dark:border-slate-700 dark:shadow-card-dark">
        <div className="aspect-[3/4] overflow-hidden bg-[#152238]">
          <img
            src={profilePhoto}
            alt="Mahmoud M. Al-Jabour"
            loading="eager"
            decoding="async"
            className="h-full w-full scale-[1.12] object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </div>
  )
}
