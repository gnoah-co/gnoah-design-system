import { useState } from 'react'
import {
  Accordion,
  Autocomplete,
  Badge,
  Button,
  Card,
  Checkbox,
  DatePicker,
  EmptyState,
  Input,
  MaskedInput,
  Modal,
  HeaderProfile,
  NavMenu,
  NotificationBell,
  Pagination,
  RadioGroup,
  Select,
  Skeleton,
  Switch,
  Table,
  Tabs,
  Textarea,
  ThemeToggle,
  TimePicker,
  ToastStack,
  type AccordionItem,
  type AutocompleteOption,
  type RadioOption,
  type TableColumn,
  type TabItem,
  type ToastItem,
} from '../index'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCity, setSelectedCity] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [notifications, setNotifications] = useState(true)

  const addToast = (toast: Omit<ToastItem, 'id'>) => {
    const id = Date.now().toString()
    setToasts((prev) => [...prev, { ...toast, id }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  const accordionItems: AccordionItem[] = [
    {
      id: '1',
      title: 'O que é o Noah UI Kit?',
      content: 'Uma biblioteca de componentes React reutilizáveis para todos os projetos Noah.',
    },
    {
      id: '2',
      title: 'Como instalar?',
      content: 'Execute npm install @noah/ui-kit no seu projeto React.',
    },
    {
      id: '3',
      title: 'Quais tecnologias usa?',
      content: 'React 19, TypeScript, Vite e CSS puro seguindo o Noah Design System.',
    },
  ]

  const cities: AutocompleteOption[] = [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'bh', label: 'Belo Horizonte' },
    { value: 'curitiba', label: 'Curitiba' },
    { value: 'porto-alegre', label: 'Porto Alegre' },
  ]

  const paymentOptions: RadioOption[] = [
    { label: 'Cartão de Crédito', value: 'credit' },
    { label: 'Boleto Bancário', value: 'boleto' },
    { label: 'PIX', value: 'pix' },
    { label: 'Transferência (indisponível)', value: 'transfer', disabled: true },
  ]

  const tabItems: TabItem[] = [
    {
      id: 'overview',
      label: 'Visão Geral',
      content: (
        <div>
          <h3>Bem-vindo ao Noah UI Kit</h3>
          <p>
            Esta é uma biblioteca completa de componentes React com 14 componentes prontos para
            uso.
          </p>
        </div>
      ),
    },
    {
      id: 'components',
      label: 'Componentes',
      content: (
        <div>
          <h3>Componentes Disponíveis</h3>
          <p>
            Accordion, Autocomplete, Badge, Button, Card, EmptyState, Input, Modal, Pagination,
            Select, Skeleton, Table, Tabs, Toast.
          </p>
        </div>
      ),
    },
    {
      id: 'tokens',
      label: 'Design Tokens',
      content: (
        <div>
          <h3>Tokens de Design</h3>
          <div className="stack-row">
            <div style={{ background: '#F28928', padding: '16px', borderRadius: '8px' }}>
              Primary
            </div>
            <div style={{ background: '#1B2733', padding: '16px', borderRadius: '8px', color: '#fff' }}>
              Secondary
            </div>
            <div style={{ background: '#A4A5A2', padding: '16px', borderRadius: '8px' }}>
              Tertiary
            </div>
          </div>
        </div>
      ),
    },
  ]

  type Lead = {
    id: string
    nome: string
    cidade: string
    imoveis: number
    status: string
  }

  const tableData: Lead[] = [
    { id: '1', nome: 'João Silva', cidade: 'São Paulo', imoveis: 3, status: 'Novo' },
    { id: '2', nome: 'Maria Santos', cidade: 'Rio de Janeiro', imoveis: 5, status: 'Comprado' },
    { id: '3', nome: 'Pedro Costa', cidade: 'Belo Horizonte', imoveis: 2, status: 'Novo' },
  ]

  const tableColumns: TableColumn<Lead>[] = [
    { key: 'nome', label: 'Nome' },
    { key: 'cidade', label: 'Cidade' },
    { key: 'imoveis', label: 'Imóveis' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge label={row.status} tone={row.status === 'Novo' ? 'primary' : 'default'} />
      ),
    },
  ]

  return (
    <div className="app-shell">
      <NavMenu
        variant="header"
        badge="v1.0.0"
        actions={
          <>
            <ThemeToggle />
            <NotificationBell />
            <HeaderProfile initials="NX" name="Nome Usuário" />
          </>
        }
      />

      <main className="app-main">
        <section className="stack">
          <div>
            <h1 className="page-title">Noah Design System</h1>
            <p className="page-subtitle">
              Biblioteca de componentes React reutilizáveis para todos os projetos Noah
            </p>
          </div>

          {/* Color Palette */}
          <section id="palette" className="component-group">
          <Card title="Paleta de Cores Noah" subtitle="Design tokens do sistema">
            <div className="grid grid-2">
              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#F28928' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Primary</span>
                    <span className="color-palette__hex">#F28928</span>
                  </div>
                </div>
                <p className="color-palette__usage">CTAs, botões principais, destaques</p>
              </div>

              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#1B2733', color: '#fff' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Secondary</span>
                    <span className="color-palette__hex">#1B2733</span>
                  </div>
                </div>
                <p className="color-palette__usage">Headers, textos escuros, botões secundários</p>
              </div>

              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#A4A5A2' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Tertiary</span>
                    <span className="color-palette__hex">#A4A5A2</span>
                  </div>
                </div>
                <p className="color-palette__usage">Elementos secundários, borders</p>
              </div>

              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#171D23', color: '#fff' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Background Dark</span>
                    <span className="color-palette__hex">#171D23</span>
                  </div>
                </div>
                <p className="color-palette__usage">Fundo escuro, dark mode</p>
              </div>

              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#C7DBE2' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Background Light</span>
                    <span className="color-palette__hex">#C7DBE2</span>
                  </div>
                </div>
                <p className="color-palette__usage">Fundo claro, body background</p>
              </div>

              <div className="color-palette">
                <div className="color-palette__item" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                  <div className="color-palette__info">
                    <span className="color-palette__name">Card</span>
                    <span className="color-palette__hex">#FFFFFF</span>
                  </div>
                </div>
                <p className="color-palette__usage">Cards, modais, surfaces</p>
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', background: '#F8FAFC', borderRadius: '12px' }}>
              <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Cores Funcionais</h4>
              <div className="stack-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#22c55e' }}></div>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Success #22c55e</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#ef4444' }}></div>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Danger #ef4444</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#fbbf24' }}></div>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Warning #fbbf24</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#3b82f6' }}></div>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Info #3b82f6</span>
                </div>
              </div>
            </div>
          </Card>
          </section>

          {/* Theme Toggle */}
          <section id="theme" className="component-group">
          <Card title="Tema Claro/Escuro" subtitle="Alterne entre temas com animação suave">
            <div className="stack">
              <p className="muted">
                O sistema suporta tema claro e escuro. Use o botão no header ou abaixo para alternar.
              </p>
              <div className="stack-row">
                <ThemeToggle />
                <Badge label="Auto-save no localStorage" tone="primary" />
              </div>
              <div style={{ marginTop: '16px', padding: '16px', background: 'var(--noah-hover-bg)', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600 }}>Recursos do Tema</h4>
                <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '13px', color: 'var(--noah-text-muted)' }}>
                  <li>Detecta preferência do sistema automaticamente</li>
                  <li>Salva escolha no localStorage</li>
                  <li>Animação de rotação no ícone</li>
                  <li>Todas as cores adaptam automaticamente</li>
                  <li>Suporte completo em todos os componentes</li>
                </ul>
              </div>
            </div>
          </Card>
          </section>

          {/* Buttons */}
          <section id="buttons" className="component-group">
          <Card title="Buttons" subtitle="Botões com variantes primary, secondary, ghost, danger, warn e info">
            <div className="stack-row">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="warn">Warn Button</Button>
              <Button variant="info">Info Button</Button>
              <Button
                variant="primary"
                onClick={() =>
                  addToast({
                    title: 'Sucesso!',
                    message: 'Botão clicado com sucesso',
                    tone: 'success',
                  })
                }
              >
                Mostrar Toast
              </Button>
            </div>
          </Card>
          </section>

          {/* Inputs */}
          <section id="forms" className="component-group">
          <Card title="Inputs & Forms" subtitle="Campos de texto, select e autocomplete">
            <div className="grid grid-2">
              <Input
                label="Nome completo"
                placeholder="Digite seu nome"
                helperText="Como você gostaria de ser chamado?"
              />
              <Input label="Email" type="email" placeholder="seu@email.com" leftIcon="📧" />
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
                leftIcon="🔒"
                helperText="Mínimo 8 caracteres"
              />
              <Input
                label="Telefone"
                type="tel"
                placeholder="(11) 98765-4321"
                leftIcon="📱"
              />
              <Input
                label="Buscar"
                type="search"
                placeholder="Pesquisar imóveis..."
                leftIcon="🔍"
              />
              <DatePicker
                label="Data de disponibilidade"
                helperText="Quando o imóvel estará disponível"
              />
              <TimePicker
                label="Horário de visita"
                helperText="Horário preferencial para visitas"
              />
              <Select
                label="Tipo de imóvel"
                options={[
                  { label: 'Selecione...', value: '' },
                  { label: 'Apartamento', value: 'apt' },
                  { label: 'Casa', value: 'house' },
                  { label: 'Terreno', value: 'land' },
                ]}
              />
              <Autocomplete
                label="Cidade"
                placeholder="Digite para buscar..."
                options={cities}
                onSelect={(value) => {
                  if (typeof value === 'string') {
                    setSelectedCity(value)
                  }
                }}
                helperText={selectedCity ? `Selecionado: ${selectedCity}` : 'Comece a digitar'}
              />
            </div>

            <div className="divider"></div>

            <h3>Máscaras de Entrada</h3>
            <div className="grid grid-2">
              <MaskedInput
                label="CPF"
                mask="cpf"
                helperText="Somente números"
              />
              <MaskedInput
                label="CNPJ"
                mask="cnpj"
                helperText="Para pessoas jurídicas"
              />
              <MaskedInput
                label="Telefone"
                mask="phone"
                leftIcon="📱"
                helperText="Celular com DDD"
              />
              <MaskedInput
                label="CEP"
                mask="cep"
                helperText="Código postal"
              />
              <MaskedInput
                label="Valor do imóvel"
                mask="currency"
                helperText="Preço de venda ou aluguel"
              />
            </div>

            <div className="divider"></div>

            <Textarea
              label="Descrição do imóvel"
              placeholder="Descreva as características do imóvel..."
              rows={4}
              helperText="Máximo 500 caracteres"
            />

            <div className="divider"></div>

            <h3>Checkboxes & Radio</h3>
            <div className="grid grid-2">
              <div>
                <Checkbox
                  label="Aceito os termos e condições"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <Checkbox
                  label="Desejo receber newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  helperText="Enviaremos atualizações semanais"
                />
                <Checkbox
                  label="Opção desabilitada"
                  disabled
                  helperText="Este campo não pode ser modificado"
                />
              </div>

              <RadioGroup
                label="Forma de pagamento"
                name="payment"
                options={paymentOptions}
                value={paymentMethod}
                onChange={(value) => {
                  if (typeof value === 'string') {
                    setPaymentMethod(value)
                  }
                }}
                helperText="Escolha como deseja pagar"
              />
            </div>

            <div className="divider"></div>

            <h3>Switch</h3>
            <div className="stack-row">
              <Switch
                label="Notificações ativadas"
                checked={notifications}
                onChange={setNotifications}
                helperText="Receba alertas em tempo real"
              />
              <Switch label="Modo escuro" disabled helperText="Use o botão no menu" />
            </div>
          </Card>
          </section>

          {/* Badges */}
          <section id="badges" className="component-group">
          <Card title="Badges" subtitle="Tags e etiquetas">
            <div className="stack-row">
              <Badge label="Novo" tone="primary" />
              <Badge label="Comprado" tone="default" />
              <Badge label="Disponível" tone="primary" />
              <Badge label="Indisponível" tone="default" />
            </div>
          </Card>
          </section>

          {/* Table */}
          <section id="table" className="component-group">
          <Card title="Table" subtitle="Tabela com tipagem genérica">
            <Table columns={tableColumns} data={tableData} />
          </Card>
          </section>

          {/* Tabs */}
          <section id="tabs" className="component-group">
          <Card title="Tabs" subtitle="Abas para organizar conteúdo">
            <Tabs items={tabItems} defaultTab="overview" />
          </Card>
          </section>

          {/* Accordion */}
          <section id="accordion" className="component-group">
          <Card title="Accordion" subtitle="Painéis expansíveis">
            <Accordion items={accordionItems} />
          </Card>
          </section>

          {/* Pagination */}
          <section id="pagination" className="component-group">
          <Card title="Pagination" subtitle="Paginação numérica">
            <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
            <p className="muted" style={{ marginTop: '12px', textAlign: 'center' }}>
              Página {currentPage} de 5
            </p>
          </Card>
          </section>

          {/* Skeleton */}
          <section id="skeleton" className="component-group">
          <Card title="Skeleton" subtitle="Loading placeholders">
            <div className="stack">
              <Skeleton variant="title" />
              <Skeleton variant="text" />
              <Skeleton variant="text" width="80%" />
              <div className="stack-row">
                <Skeleton variant="circle" />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
              <Skeleton variant="rect" height={200} />
            </div>
          </Card>
          </section>

          {/* Modal */}
          <section id="modal" className="component-group">
          <Card title="Modal" subtitle="Diálogos modais">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Abrir Modal
            </Button>
            <Modal
              isOpen={modalOpen}
              title="Confirmar ação"
              onClose={() => setModalOpen(false)}
              onConfirm={() => {
                setModalOpen(false)
                addToast({
                  title: 'Confirmado!',
                  message: 'Ação executada com sucesso',
                  tone: 'success',
                })
              }}
              confirmLabel="Confirmar"
            >
              <p>Tem certeza que deseja executar esta ação? Esta operação não pode ser desfeita.</p>
            </Modal>
          </Card>
          </section>

          {/* Empty State */}
          <section id="empty-state" className="component-group">
          <Card title="Empty State" subtitle="Estado vazio com ação">
            <EmptyState
              icon="📭"
              title="Nenhum lead encontrado"
              message="Quando você comprar leads, eles aparecerão aqui."
              action={
                <Button
                  variant="primary"
                  onClick={() =>
                    addToast({
                      title: 'Navegando...',
                      message: 'Redirecionando para busca de leads',
                      tone: 'default',
                    })
                  }
                >
                  Buscar Leads
                </Button>
              }
            />
          </Card>
          </section>

          {/* Toast Examples */}
          <section id="toasts" className="component-group">
          <Card title="Toasts" subtitle="Notificações temporárias melhoradas">
            <div className="stack-row">
              <Button
                variant="primary"
                onClick={() =>
                  addToast({
                    title: 'Sucesso!',
                    message: 'Operação concluída com sucesso',
                    tone: 'success',
                  })
                }
              >
                Success
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  addToast({
                    title: 'Erro!',
                    message: 'Algo deu errado. Tente novamente.',
                    tone: 'danger',
                  })
                }
              >
                Danger
              </Button>
              <Button
                variant="warn"
                onClick={() =>
                  addToast({
                    title: 'Atenção',
                    message: 'Esta ação requer confirmação',
                    tone: 'warning',
                  })
                }
              >
                Warning
              </Button>
              <Button
                variant="info"
                onClick={() =>
                  addToast({
                    title: 'Informação',
                    message: 'Você tem uma nova mensagem',
                    tone: 'info',
                  })
                }
              >
                Info
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  addToast({
                    title: 'Notificação',
                    message: 'Mensagem padrão do sistema',
                    tone: 'default',
                  })
                }
              >
                Default
              </Button>
            </div>
            <p className="muted" style={{ marginTop: '16px', fontSize: '13px' }}>
              ✨ Clique para ver as notificações com ícones, animações e botão fechar
            </p>
          </Card>
          </section>
        </section>
      </main>

      <ToastStack items={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />
    </div>
  )
}

export default App
