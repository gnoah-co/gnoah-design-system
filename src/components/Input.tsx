import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: string
  rightIcon?: string
}

function Input({ label, helperText, error, leftIcon, rightIcon, ...props }: InputProps) {
  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className="input__wrapper">
        {leftIcon && <span className="input__icon input__icon--left">{leftIcon}</span>}
        <input className={leftIcon || rightIcon ? 'input__field' : ''} {...props} />
        {rightIcon && <span className="input__icon input__icon--right">{rightIcon}</span>}
      </div>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default Input
