import type { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  helperText?: string
  error?: string
}

function Textarea({ label, helperText, error, ...props }: TextareaProps) {
  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <textarea {...props} />
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default Textarea
