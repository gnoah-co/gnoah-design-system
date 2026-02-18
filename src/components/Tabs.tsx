import { useState, type ReactNode } from 'react'

export type TabItem = {
  id: string
  label: string
  content: ReactNode
}

type TabsProps = {
  items: TabItem[]
  defaultTab?: string
}

function Tabs({ items, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id)

  return (
    <div className="tabs">
      <div className="tabs__nav">
        {items.map((item) => (
          <button
            key={item.id}
            className={`tabs__tab ${activeTab === item.id ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  )
}

export default Tabs
