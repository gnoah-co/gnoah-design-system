import { useEffect, useRef, useState } from 'react'

type NotificationBellProps = {
  ariaLabel?: string
}

const NOTIFICATIONS = [
  { id: 'n1', title: 'Novo lead', message: 'Lead LD-210 disponível', read: false, time: 'Agora' },
  { id: 'n2', title: 'Checkout concluído', message: 'Pagamento aprovado.', read: false, time: '5 min' },
  { id: 'n3', title: 'Filtro aplicado', message: '3 proprietários encontrados.', read: true, time: '1 h' },
]

function NotificationBell({ ariaLabel }: NotificationBellProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length

  useEffect(() => {
    if (!open) return
    const close = (e: Event) => {
      const target = e.target as Node
      if (ref.current && !ref.current.contains(target)) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  return (
    <div className="header-icon-btn-wrap" ref={ref}>
      <button
        type="button"
        className="header-icon-btn"
        aria-label={ariaLabel ?? `Notificações (${unreadCount})`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((p) => !p)}
      >
        <span aria-hidden>🔔</span>
        {unreadCount > 0 && (
          <span className="header-icon-btn__count" aria-hidden>
            {unreadCount}
          </span>
        )}
      </button>
      {open && (
        <div className="header-notifications-preview" role="menu" aria-label="Notificações">
          <div className="header-notifications-preview__title">Notificações</div>
          <ul className="header-notifications-preview__list">
            {NOTIFICATIONS.map((n) => (
              <li
                key={n.id}
                className={`header-notifications-preview__item ${!n.read ? 'header-notifications-preview__item--unread' : ''}`}
              >
                <div className="header-notifications-preview__item-title">{n.title}</div>
                <div className="header-notifications-preview__item-message">{n.message}</div>
                <div className="header-notifications-preview__item-time">{n.time}</div>
              </li>
            ))}
          </ul>
          <a href="#" className="header-notifications-preview__link">
            Ver todas
          </a>
        </div>
      )}
    </div>
  )
}

export default NotificationBell
