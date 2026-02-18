import type { ReactNode } from 'react'
import Button from './Button'

type ModalProps = {
  isOpen: boolean
  title: string
  children: ReactNode
  onClose: () => void
  confirmLabel?: string
  onConfirm?: () => void
}

function Modal({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmLabel = 'Confirmar',
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal__backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h3 className="modal__title">{title}</h3>
        <div>{children}</div>
        <div className="modal__actions">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          {onConfirm && (
            <Button variant="primary" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
