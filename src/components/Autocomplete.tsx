import { useState, useRef, useEffect, type InputHTMLAttributes } from 'react'

export type AutocompleteOption = {
  value: string
  label: string
}

type AutocompleteProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string
  options: AutocompleteOption[]
  onSelect: (value: string) => void
  helperText?: string
  error?: string
}

function Autocomplete({
  label,
  options,
  onSelect,
  helperText,
  error,
  ...props
}: AutocompleteProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: AutocompleteOption) => {
    setQuery(option.label)
    onSelect(option.value)
    setIsOpen(false)
  }

  return (
    <div className="input" ref={wrapperRef}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        {...props}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && filtered.length > 0 && (
        <ul className="autocomplete__dropdown">
          {filtered.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className="autocomplete__option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default Autocomplete
