import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'info' | 'warn' | 'warning'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  icon?: ReactNode
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn',
  danger: 'btn btn-danger',
  info: 'btn btn-info',
  warn: 'btn btn-warn',
  warning: 'btn btn-warn',
}

function Button({ variant = 'primary', icon, children, ...props }: ButtonProps) {
  return (
    <button className={variantClass[variant]} {...props}>
      {icon}
      {children}
    </button>
  )
}

export default Button
