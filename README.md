# Noah UI Kit

Biblioteca de componentes React reutilizáveis para todos os projetos do Grupo Noah.

## 🎨 Design System

Baseado no Noah Design System com:
- **Primary**: #F28928 (Laranja Noah)
- **Secondary**: #1B2733 (Azul escuro)
- **Tertiary**: #A4A5A2 (Cinza)
- **Tipografia**: Inter (Google Fonts)
- **Mobile-first**: Responsivo por padrão

## 📦 Instalação

```bash
npm install
```

## 🚀 Executar

```bash
npm run dev
```

O projeto será aberto em `http://localhost:3000` com exemplos de todos os componentes.

## 🧩 Componentes Disponíveis

### Básicos
- **Button** - Botões com variantes (primary, secondary, ghost)
- **Badge** - Etiquetas e tags
- **Card** - Containers com título e ação
- **Input** - Campos de texto com label, helper e erro
- **Select** - Dropdown com opções

### Feedback
- **Toast** - Notificações temporárias (success, danger, default)
- **Modal** - Diálogos modais
- **EmptyState** - Estado vazio com ícone e ação
- **Skeleton** - Loading placeholders

### Navegação
- **Tabs** - Abas para organizar conteúdo
- **Pagination** - Paginação numérica
- **Accordion** - Painéis expansíveis

### Dados
- **Table** - Tabelas com tipagem genérica
- **Autocomplete** - Input com sugestões

## 📚 Uso

```tsx
import { Button, Card, Input, Toast } from '@noah/ui-kit'

function App() {
  return (
    <Card title="Exemplo">
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Enviar</Button>
    </Card>
  )
}
```

## 🎯 Exportações

Todos os componentes e tipos são exportados via `src/index.ts`:

```tsx
import {
  // Componentes
  Accordion,
  Autocomplete,
  Badge,
  Button,
  Card,
  EmptyState,
  Input,
  Modal,
  Pagination,
  Select,
  Skeleton,
  Table,
  Tabs,
  ToastStack,
  
  // Tipos
  AccordionItem,
  AutocompleteOption,
  TableColumn,
  TabItem,
  ToastItem,
} from '@noah/ui-kit'
```

## 🎨 Estilos

Os estilos CSS estão em `src/styles/index.css` e devem ser importados:

```tsx
import '@noah/ui-kit/styles'
```

## 📖 Documentação Completa

Acesse `http://localhost:3000` após executar `npm run dev` para ver:
- Todos os componentes renderizados
- Exemplos de uso
- Variantes e props
- Estados interativos

## 🔧 Estrutura

```
ui-kit/
├── src/
│   ├── components/     # Componentes React
│   ├── styles/         # CSS global
│   ├── examples/       # App de demonstração
│   ├── index.ts        # Exportações principais
│   └── main.tsx        # Entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🤝 Contribuindo

1. Adicione componentes em `src/components/`
2. Exporte via `src/index.ts`
3. Adicione exemplo em `src/examples/App.tsx`
4. Documente props e variantes

## 📄 Licença

MIT © Grupo Noah
