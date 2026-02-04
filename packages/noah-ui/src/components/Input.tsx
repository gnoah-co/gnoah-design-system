import * as React from 'react'
import { cn } from '../utils/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const inputId = id ?? React.useId()
    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-secondary">
            {label}
          </label>
        ) : null}

        <input
          id={inputId}
          ref={ref}
          className={cn(
            'h-11 w-full rounded-md border bg-white px-3 text-sm text-secondary outline-none transition',
            'border-black/15 focus:border-primary focus:ring-2 focus:ring-primary/30',
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '',
            className
          )}
          {...props}
        />

        {error ? (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : hint ? (
          <p className="mt-1 text-sm text-tertiary">{hint}</p>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'
