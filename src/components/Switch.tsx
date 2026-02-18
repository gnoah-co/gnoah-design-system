import { useState } from 'react'

type SwitchProps = {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  helperText?: string
}

function Switch({ label, checked = false, onChange, disabled, helperText }: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleToggle = () => {
    if (disabled) return
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input
          type="checkbox"
          className="switch__input"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
        />
        <span className="switch__slider"></span>
      </label>
      {label && <span className="switch__label">{label}</span>}
      {helperText && <span className="input__helper">{helperText}</span>}
    </div>
  )
}

export default Switch
