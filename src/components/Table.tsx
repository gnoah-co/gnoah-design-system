import type { ReactNode } from 'react'

export type TableColumn<T> = {
  key: keyof T
  label: string
  render?: (row: T) => ReactNode
}

type TableProps<T> = {
  columns: TableColumn<T>[]
  data: T[]
}

function Table<T extends Record<string, ReactNode>>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <>
      <div className="table-desktop">
        <table className="table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-mobile" aria-label="Dados em lista">
        {data.map((row, index) => (
          <div key={index} className="table-card">
            {columns.map((column) => (
              <div key={String(column.key)} className="table-card__row">
                <span className="table-card__label">{column.label}</span>
                <span className="table-card__value">
                  {column.render ? column.render(row) : row[column.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Table
