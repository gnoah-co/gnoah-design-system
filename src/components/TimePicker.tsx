import { useState, type InputHTMLAttributes } from 'react'

type TimePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
  helperText?: string
  error?: string
  minTime?: string
  maxTime?: string
}

function TimePicker({ label, helperText, error, minTime, maxTime, ...props }: TimePickerProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className="input__wrapper">
        <span className="input__icon input__icon--left">🕐</span>
        <input
          type={focused ? 'time' : 'text'}
          className="input__field time-picker"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) setFocused(false)
            props.onBlur?.(e)
          }}
          placeholder={props.placeholder || 'hh:mm'}
          min={minTime}
          max={maxTime}
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

export default TimePicker
