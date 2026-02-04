import * as React from 'react'
import { cn } from '../utils/cn'

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn('rounded-md bg-white shadow-card ring-1 ring-black/5', className)} {...props} />
  )
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('px-6 pt-6', className)} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold text-secondary', className)} {...props} />
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-tertiary', className)} {...props} />
}
