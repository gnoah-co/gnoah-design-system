import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

type Row = { id: string; nome: string; status: string }

const meta: Meta<typeof Table<Row>> = { title: 'Noah/Table', component: Table }
export default meta
type Story = StoryObj<typeof Table<Row>>

export const Basic: Story = {
  render: () => (
    <Table<Row>
      columns={[
        { key: 'nome', header: 'Nome' },
        { key: 'status', header: 'Status' },
      ]}
      rows={[
        { id: '1', nome: 'Lead 001', status: 'Novo' },
        { id: '2', nome: 'Lead 002', status: 'Em contato' },
      ]}
      rowKey={(r) => r.id}
    />
  ),
}
