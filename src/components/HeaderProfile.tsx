import { useEffect, useRef, useState } from 'react'

type HeaderProfileProps = {
  initials?: string
  name?: string
  email?: string
}

function HeaderProfile({ initials = 'NX', name = 'Nome Usuário', email }: HeaderProfileProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div className="header-profile-wrap" ref={ref}>
      <button
        type="button"
        className="header-profile"
        aria-label="Perfil"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((p) => !p)}
      >
        <span className="header-profile__avatar">{initials}</span>
      </button>
      {open && (
        <div className="header-profile__preview" role="menu" aria-label="Preview do perfil">
          <div className="header-profile__preview-head">
            <span className="header-profile__avatar header-profile__avatar--lg">{initials}</span>
            <div className="header-profile__preview-info">
              <span className="header-profile__preview-name">{name}</span>
              {email != null && (
                <span className="header-profile__preview-email">{email}</span>
              )}
            </div>
          </div>
          <a href="#" className="header-profile__preview-link">
            Ver perfil
          </a>
        </div>
      )}
    </div>
  )
}

export default HeaderProfile
