import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  subtitle?: string
  action?: ReactNode
  children: ReactNode
}

function Card({ title, subtitle, action, children }: CardProps) {
  return (
    <article className="card">
      {(title || action) && (
        <div className="card__header">
          <div>
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </article>
  )
}

export default Card
