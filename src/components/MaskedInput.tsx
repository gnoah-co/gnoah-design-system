import { useState, type InputHTMLAttributes } from 'react'

type MaskedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
  helperText?: string
  error?: string
  mask: 'cpf' | 'cnpj' | 'phone' | 'cep' | 'currency'
  leftIcon?: string
}

function MaskedInput({ label, helperText, error, mask, leftIcon, onChange, ...props }: MaskedInputProps) {
  const [value, setValue] = useState('')

  const applyMask = (rawValue: string): string => {
    const numbers = rawValue.replace(/\D/g, '')

    switch (mask) {
      case 'cpf':
        return numbers
          .slice(0, 11)
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')

      case 'cnpj':
        return numbers
          .slice(0, 14)
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d{1,2})/, '$1-$2')

      case 'phone':
        if (numbers.length <= 10) {
          return numbers
            .slice(0, 10)
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
        }
        return numbers
          .slice(0, 11)
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2')

      case 'cep':
        return numbers
          .slice(0, 8)
          .replace(/(\d{5})(\d)/, '$1-$2')

      case 'currency':
        const intValue = parseInt(numbers) || 0
        return new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(intValue / 100)

      default:
        return rawValue
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyMask(e.target.value)
    setValue(maskedValue)
    
    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: maskedValue },
    }
    onChange?.(syntheticEvent as any)
  }

  const getPlaceholder = () => {
    if (props.placeholder) return props.placeholder
    
    switch (mask) {
      case 'cpf': return '000.000.000-00'
      case 'cnpj': return '00.000.000/0000-00'
      case 'phone': return '(00) 00000-0000'
      case 'cep': return '00000-000'
      case 'currency': return '0,00'
      default: return ''
    }
  }

  const icon = leftIcon || (mask === 'currency' ? '💰' : undefined)

  return (
    <div className="input">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className="input__wrapper">
        {icon && <span className="input__icon input__icon--left">{icon}</span>}
        <input
          {...props}
          type="text"
          inputMode={mask === 'currency' ? 'numeric' : 'text'}
          className={icon ? 'input__field' : ''}
          value={value}
          onChange={handleChange}
          placeholder={getPlaceholder()}
        />
        {mask === 'currency' && <span className="input__icon input__icon--right">R$</span>}
      </div>
      {error ? (
        <span className="input__error">{error}</span>
      ) : (
        helperText && <span className="input__helper">{helperText}</span>
      )}
    </div>
  )
}

export default MaskedInput
