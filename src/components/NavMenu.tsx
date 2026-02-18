import { useEffect, useRef, useState, type ReactNode } from 'react'

type MenuItem = { id: string; label: string }
type MenuGroup = { id: string; label: string; items: MenuItem[] }

const SHELL_STANDALONE: MenuItem[] = [
  { id: 'inputs', label: 'Inputs' },
  { id: 'autocomplete', label: 'Autocomplete' },
]

const SHELL_GROUPS: MenuGroup[] = [
  { id: 'overview', label: 'Visão geral', items: [{ id: 'buttons-badges', label: 'Botões e badges' }] },
  { id: 'data', label: 'Dados', items: [{ id: 'table', label: 'Tabela' }] },
  {
    id: 'nav',
    label: 'Navegação',
    items: [
      { id: 'tabs', label: 'Tabs' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'pagination', label: 'Paginação' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    items: [
      { id: 'skeleton', label: 'Skeleton' },
      { id: 'empty-state', label: 'Empty State' },
      { id: 'modal', label: 'Modal' },
      { id: 'toast', label: 'Toast' },
    ],
  },
]

const HEADER_STANDALONE: MenuItem[] = [{ id: 'forms', label: 'Formulários' }]

const HEADER_GROUPS: MenuGroup[] = [
  {
    id: 'overview',
    label: 'Visão geral',
    items: [
      { id: 'palette', label: 'Paleta' },
      { id: 'theme', label: 'Tema' },
      { id: 'buttons', label: 'Botões' },
      { id: 'badges', label: 'Badges' },
    ],
  },
  { id: 'data', label: 'Dados', items: [{ id: 'table', label: 'Tabela' }] },
  {
    id: 'nav',
    label: 'Navegação',
    items: [
      { id: 'tabs', label: 'Tabs' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'pagination', label: 'Paginação' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    items: [
      { id: 'skeleton', label: 'Skeleton' },
      { id: 'modal', label: 'Modal' },
      { id: 'empty-state', label: 'Empty State' },
      { id: 'toasts', label: 'Toasts' },
    ],
  },
]

const BRAND_BY_VARIANT = { shell: 'Noah UI', header: 'Noah UI Kit' } as const

function getAllItemIds(groups: MenuGroup[], standalone: MenuItem[]): string[] {
  return [...standalone.map((i) => i.id), ...groups.flatMap((g) => g.items.map((i) => i.id))]
}

type NavMenuProps = {
  variant: 'shell' | 'header'
  actions?: ReactNode
  badge?: ReactNode
}

export default function NavMenu({ variant, actions, badge }: NavMenuProps) {
  const groups = variant === 'shell' ? SHELL_GROUPS : HEADER_GROUPS
  const standalone = variant === 'shell' ? SHELL_STANDALONE : HEADER_STANDALONE
  const allIds = getAllItemIds(groups, standalone)
  const brand = BRAND_BY_VARIANT[variant]
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(allIds[0] ?? '')
  const [openGroupDesktop, setOpenGroupDesktop] = useState<string | null>(null)
  const [openDisclosures, setOpenDisclosures] = useState<Set<string>>(new Set())
  const barRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && allIds.includes(hash)) setActiveId(hash)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [variant, allIds])

  useEffect(() => {
    if (!open) return
    const close = (e: Event) => {
      const target = e.target as Node
      if (barRef.current && target && !barRef.current.contains(target)) setOpen(false)
    }
    const opts: AddEventListenerOptions = { passive: true }
    document.addEventListener('click', close)
    document.addEventListener('touchend', close, opts)
    return () => {
      document.removeEventListener('click', close)
      document.removeEventListener('touchend', close, opts)
    }
  }, [open])

  const go = (id: string) => {
    setActiveId(id)
    setOpen(false)
  }

  const toggleDisclosure = (groupId: string) => {
    setOpenDisclosures((prev) => {
      const next = new Set(prev)
      if (next.has(groupId)) next.delete(groupId)
      else next.add(groupId)
      return next
    })
  }

  const isShell = variant === 'shell'
  const Wrapper = isShell ? 'div' : 'header'

  return (
    <>
      {open && (
        <div
          className="flyout-nav__overlay"
          role="button"
          tabIndex={-1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          onTouchEnd={() => setOpen(false)}
        />
      )}

      <Wrapper
        ref={barRef as React.RefObject<HTMLDivElement>}
        className={`flyout-nav__bar flyout-nav__bar--${variant}`}
      >
        <div className="flyout-nav__brand">
          <span className="flyout-nav__brand-text">{brand}</span>
          {badge != null && <span className="flyout-nav__badge">{badge}</span>}
        </div>

        <nav className="flyout-nav__desktop" aria-label="Navegação principal">
          {standalone.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flyout-nav__link ${activeId === item.id ? 'flyout-nav__link--active' : ''}`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </a>
          ))}
          {groups.map((group) => (
            <div
              key={group.id}
              className="flyout-nav__group"
              onMouseEnter={() => setOpenGroupDesktop(group.id)}
              onMouseLeave={() => setOpenGroupDesktop(null)}
            >
              <button
                type="button"
                className={`flyout-nav__link flyout-nav__group-trigger ${
                  group.items.some((i) => i.id === activeId) ? 'flyout-nav__link--active' : ''
                }`}
                aria-expanded={openGroupDesktop === group.id}
                aria-haspopup="true"
                aria-controls={`flyout-desktop-${group.id}`}
                id={`flyout-trigger-${group.id}`}
              >
                {group.label}
              </button>
              <div
                id={`flyout-desktop-${group.id}`}
                role="menu"
                className={`flyout-nav__dropdown ${openGroupDesktop === group.id ? 'flyout-nav__dropdown--open' : ''}`}
                aria-labelledby={`flyout-trigger-${group.id}`}
              >
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    role="menuitem"
                    className={`flyout-nav__dropdown-link ${activeId === item.id ? 'flyout-nav__dropdown-link--active' : ''}`}
                    onClick={() => go(item.id)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {actions != null && <div className="flyout-nav__actions">{actions}</div>}

        <button
          type="button"
          className="flyout-nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
        >
          <span className="flyout-nav__toggle-line" />
          <span className="flyout-nav__toggle-line" />
          <span className="flyout-nav__toggle-line" />
        </button>
      </Wrapper>

      <div
        className={`flyout-nav__panel ${open ? 'flyout-nav__panel--open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <div className="flyout-nav__panel-inner">
          {standalone.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flyout-nav__panel-link ${activeId === item.id ? 'flyout-nav__panel-link--active' : ''}`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </a>
          ))}
          {groups.map((group) => {
            const isDisclosureOpen = openDisclosures.has(group.id)
            return (
              <div key={group.id} className="flyout-nav__disclosure">
                <button
                  type="button"
                  className="flyout-nav__disclosure-trigger"
                  aria-expanded={isDisclosureOpen}
                  aria-controls={`flyout-disclosure-${group.id}`}
                  id={`flyout-disclosure-trigger-${group.id}`}
                  onClick={() => toggleDisclosure(group.id)}
                >
                  {group.label}
                </button>
                <div
                  id={`flyout-disclosure-${group.id}`}
                  className={`flyout-nav__disclosure-panel ${isDisclosureOpen ? 'flyout-nav__disclosure-panel--open' : ''}`}
                  role="region"
                  aria-labelledby={`flyout-disclosure-trigger-${group.id}`}
                  hidden={!isDisclosureOpen}
                >
                  {group.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flyout-nav__panel-link ${activeId === item.id ? 'flyout-nav__panel-link--active' : ''}`}
                      onClick={() => go(item.id)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
