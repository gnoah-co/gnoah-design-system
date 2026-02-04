import * as React from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'

export type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
  primaryAction?: { label: string; onClick: () => void; loading?: boolean }
  secondaryAction?: { label: string; onClick: () => void }
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onOpenChange])

  if (!open) return null

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onMouseDown={(e) => {
          if (e.target === overlayRef.current) onOpenChange(false)
        }}
      />
      <div className="relative w-full max-w-lg rounded-lg bg-white shadow-card ring-1 ring-black/10">
        {(title || description) && (
          <div className="border-b border-black/10 px-6 py-5">
            {title ? <h3 className="text-lg font-semibold text-secondary">{title}</h3> : null}
            {description ? <p className="mt-1 text-sm text-tertiary">{description}</p> : null}
          </div>
        )}
        <div className="px-6 py-5">{children}</div>
        {(primaryAction || secondaryAction) && (
          <div className="flex items-center justify-end gap-2 border-t border-black/10 px-6 py-4">
            {secondaryAction ? (
              <Button variant="secondary" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            ) : null}
            {primaryAction ? (
              <Button variant="primary" onClick={primaryAction.onClick} isLoading={primaryAction.loading}>
                {primaryAction.label}
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
