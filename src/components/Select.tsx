import type { SelectHTMLAttributes } from 'react'

type SelectOption = { label: string; value: string }

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  helperText?: string
  error?: string
  options: SelectOption[]
}

function Select({ label, helperText, error, options, ...props }: SelectProps) {
  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <select {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default Select
export type { SelectOption }
