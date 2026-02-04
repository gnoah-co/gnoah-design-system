import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from './Button'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = { title: 'Noah/Modal', component: Modal }
export default meta
type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Confirmar"
          description="Deseja continuar com esta ação?"
          primaryAction={{ label: 'Confirmar', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancelar', onClick: () => setOpen(false) }}
        >
          <p className="text-sm text-secondary">Conteúdo do modal.</p>
        </Modal>
      </div>
    )
  },
}
