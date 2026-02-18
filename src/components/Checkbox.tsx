import type { InputHTMLAttributes } from 'react'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  helperText?: string
  error?: string
}

function Checkbox({ label, helperText, error, ...props }: CheckboxProps) {
  return (
    <div className="checkbox">
      <label className="checkbox__wrapper">
        <input type="checkbox" className="checkbox__input" {...props} />
        <span className="checkbox__checkmark"></span>
        <span className="checkbox__label">{label}</span>
      </label>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default Checkbox
