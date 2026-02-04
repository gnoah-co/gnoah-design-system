import * as React from 'react'
import { cn } from '../utils/cn'

export type Column<T> = {
  key: keyof T | string
  header: string
  render?: (row: T) => React.ReactNode
  className?: string
}

export type TableProps<T> = {
  columns: Column<T>[]
  rows: T[]
  rowKey?: (row: T, idx: number) => string
  emptyState?: { title: string; description?: string }
}

export function Table<T extends Record<string, any>>({
  columns,
  rows,
  rowKey,
  emptyState = { title: 'Sem dados', description: 'Nada para mostrar aqui.' },
}: TableProps<T>) {
  if (!rows.length) {
    return (
      <div className="rounded-md border border-black/10 bg-white p-6 text-center">
        <p className="text-sm font-semibold text-secondary">{emptyState.title}</p>
        {emptyState.description ? <p className="mt-1 text-sm text-tertiary">{emptyState.description}</p> : null}
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-md border border-black/10 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-light/60">
            <tr>
              {columns.map((c) => (
                <th key={String(c.key)} className="px-4 py-3 font-semibold text-secondary">
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={rowKey ? rowKey(row, idx) : String(idx)}
                className="border-t border-black/10 hover:bg-black/5"
              >
                {columns.map((c) => (
                  <td key={String(c.key)} className={cn('px-4 py-3 text-secondary', c.className)}>
                    {c.render ? c.render(row) : String(row[c.key as keyof typeof row] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
