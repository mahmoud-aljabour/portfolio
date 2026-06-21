export default function SectionHeader({
  label,
  title,
  subtitle,
  id,
  align = 'center',
  action,
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <header
      className={`section-header ${isCenter ? 'text-center' : 'text-left'} ${
        action ? 'section-header--with-action' : ''
      } ${className}`}
    >
      <div className={action ? 'section-header__content' : ''}>
        {label && <span className="section-label">{label}</span>}
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {subtitle && (
          <p className={`section-subtitle ${isCenter ? 'mx-auto' : ''}`}>{subtitle}</p>
        )}
      </div>
      {action && <div className="section-header__action">{action}</div>}
    </header>
  )
}
