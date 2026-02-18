export type ToastItem = {
  id: string
  title: string
  message: string
  tone?: 'default' | 'success' | 'danger' | 'warning' | 'info'
}

type ToastStackProps = {
  items: ToastItem[]
  onDismiss: (id: string) => void
}

const getToastIcon = (tone?: string) => {
  switch (tone) {
    case 'success':
      return '✓'
    case 'danger':
      return '✕'
    case 'warning':
      return '⚠'
    case 'info':
      return 'ⓘ'
    default:
      return '●'
  }
}

function ToastStack({ items, onDismiss }: ToastStackProps) {
  return (
    <div className="toast-stack">
      {items.map((item) => (
        <div
          key={item.id}
          className={`toast toast--${item.tone || 'default'}`}
          role="alert"
          aria-live="polite"
        >
          <div className="toast__icon">
            {getToastIcon(item.tone)}
          </div>
          <div className="toast__content">
            <p className="toast__title">{item.title}</p>
            <p className="toast__message">{item.message}</p>
          </div>
          <button
            className="toast__close"
            onClick={() => onDismiss(item.id)}
            aria-label="Fechar notificação"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToastStack
