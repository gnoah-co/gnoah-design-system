import * as React from 'react'
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Modal, Table } from '@noah/ui'

type Lead = { id: string; nome: string; status: string }

export function App() {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const leads: Lead[] = [
    { id: '1', nome: 'Lead Noah 001', status: 'Novo' },
    { id: '2', nome: 'Lead Noah 002', status: 'Qualificado' },
  ]

  return (
    <div className="min-h-screen">
      <header className="bg-dark text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-lg font-semibold">Noah UI Template</div>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Abrir Modal
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Formulário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@noah.com"
                hint="Exemplo de input com hint."
              />
              <div className="flex gap-2">
                <Button>Salvar</Button>
                <Button variant="secondary">Cancelar</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabela</CardTitle>
          </CardHeader>
          <CardContent>
            <Table<Lead>
              columns={[
                { key: 'nome', header: 'Nome' },
                { key: 'status', header: 'Status' },
              ]}
              rows={leads}
              rowKey={(r) => r.id}
            />
          </CardContent>
        </Card>
      </main>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Exemplo de Modal"
        description="Modal padrão do Design System Noah."
        primaryAction={{ label: 'Confirmar', onClick: () => setOpen(false) }}
        secondaryAction={{ label: 'Fechar', onClick: () => setOpen(false) }}
      >
        <p className="text-sm text-secondary">Conteúdo do modal. Fecha com ESC ou clique fora.</p>
      </Modal>
    </div>
  )
}
