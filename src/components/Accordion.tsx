import { useState, type ReactNode } from 'react'

export type AccordionItem = {
  id: string
  title: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <div key={item.id} className="accordion__item">
            <button
              className="accordion__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="accordion__icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="accordion__content">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
