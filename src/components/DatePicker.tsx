import { useState, type InputHTMLAttributes } from 'react'

type DatePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
  helperText?: string
  error?: string
  minDate?: string
  maxDate?: string
}

function DatePicker({ label, helperText, error, minDate, maxDate, ...props }: DatePickerProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className="input__wrapper">
        <span className="input__icon input__icon--left">📅</span>
        <input
          type={focused ? 'date' : 'text'}
          className="input__field date-picker"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) setFocused(false)
            props.onBlur?.(e)
          }}
          placeholder={props.placeholder || 'dd/mm/aaaa'}
          min={minDate}
          max={maxDate}
          {...props}
        />
      </div>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default DatePicker
