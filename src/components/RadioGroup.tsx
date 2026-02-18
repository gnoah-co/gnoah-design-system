import type { InputHTMLAttributes } from 'react'

type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

type RadioGroupProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
  name: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  helperText?: string
  error?: string
}

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  helperText,
  error,
  ...props
}: RadioGroupProps) {
  return (
    <div className="radio-group">
      {label && <label className="radio-group__label">{label}</label>}
      <div className="radio-group__options">
        {options.map((option) => (
          <label key={option.value} className="radio">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={option.disabled}
              className="radio__input"
              {...props}
            />
            <span className="radio__checkmark"></span>
            <span className="radio__label">{option.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default RadioGroup
export type { RadioOption }
