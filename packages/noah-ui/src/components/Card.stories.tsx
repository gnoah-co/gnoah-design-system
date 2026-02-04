import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card'

const meta: Meta<typeof Card> = { title: 'Noah/Card', component: Card }
export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Noah Educa</CardTitle>
        <CardDescription>Educação imobiliária com IA</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-secondary">Conteúdo curto dentro de um card padrão.</p>
      </CardContent>
    </Card>
  ),
}
