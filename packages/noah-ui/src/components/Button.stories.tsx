import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = { title: 'Noah/Button', component: Button }
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Continuar', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Voltar', variant: 'secondary' } }
export const Loading: Story = { args: { children: 'Salvar', isLoading: true } }
