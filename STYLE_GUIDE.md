
# Noah Design System – Front-End Style Guide (React)

## Visão Geral
Este guia define padrões visuais e técnicos para aplicações web em React do Grupo Noah.
Foco em consistência, acessibilidade, escalabilidade e impacto humano.

---

## 📦 Noah UI Kit

**Biblioteca completa de componentes React reutilizáveis para todos os projetos Noah.**

### Acesso Rápido
- 📁 **Código**: `ui-kit/` (nesta pasta)
- 📚 **Documentação**: `ui-kit/README.md`
- 🚀 **Quick Start**: `ui-kit/MIGRATION.md`
- 📋 **Referência**: `ui-kit/INDEX.md`

### Executar Projeto de Exemplo
```bash
cd ui-kit
npm install
npm run dev
```

Abre em `http://localhost:3000` com todos os 14 componentes demonstrados.

### Componentes Disponíveis (14)
✅ Accordion, Autocomplete, Badge, Button, Card, EmptyState, Input, Modal, Pagination, Select, Skeleton, Table, Tabs, ToastStack

---

## Paleta de Cores (Design Tokens)
```css
--noah-primary: #F28928        /* Laranja Noah - CTAs */
--noah-secondary: #1B2733      /* Azul escuro - Headers */
--noah-tertiary: #A4A5A2       /* Cinza - Elementos secundários */
--noah-bg-dark: #171D23        /* Fundo escuro */
--noah-bg-light: #C7DBE2       /* Fundo claro */
--noah-text: #0F172A           /* Texto principal */
--noah-text-light: #F8FAFC     /* Texto em fundos escuros */
--noah-border: #E2E8F0         /* Bordas */
--noah-card: #FFFFFF           /* Fundo de cards */
--noah-shadow: 0 10px 20px rgba(15, 23, 42, 0.08)
```

---

## Tipografia
**Fonte padrão**: Inter (Google Fonts), system-ui, sans-serif

**Hierarquia de pesos**:
- H1: 700 (Bold)
- H2/H3: 600 (Semibold)
- Body: 400 (Regular)
- Labels: 500 (Medium)

---

## Componentes Base

### Botões
```tsx
import { Button } from '@noah/ui-kit'

<Button variant="primary">CTA Principal</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="ghost">Terciário</Button>
```

### Cards
```tsx
import { Card } from '@noah/ui-kit'

<Card title="Título" subtitle="Subtítulo">
  <p>Conteúdo com sombra leve</p>
</Card>
```

### Inputs
```tsx
import { Input } from '@noah/ui-kit'

<Input
  label="Nome"
  placeholder="Digite..."
  helperText="Texto de ajuda"
  error="Mensagem de erro"
/>
```

---

## Acessibilidade
- ✅ WCAG AA compliance
- ✅ Navegação por teclado
- ✅ Feedback claro de erro
- ✅ Labels visíveis
- ✅ Contraste adequado
- ✅ ARIA attributes

---

## Mobile-First
- Design responsivo por padrão
- Breakpoint principal: 720px
- Touch-friendly (min 44x44px)
- Grid system adaptativo

---

## Dark Mode (Roadmap)
- Fundo escuro via CSS variables
- CTA sempre laranja (Primary)
- Contraste mantido

---

## Uso em Novos Projetos

### 1. Copiar UI Kit
```bash
cp -r docs/design-system/ui-kit /caminho/novo-projeto/
```

### 2. Instalar
```bash
cd /caminho/novo-projeto/ui-kit
npm install
```

### 3. Importar
```tsx
import { Button, Card, Input } from '@noah/ui-kit'
import '@noah/ui-kit/styles'
```

**Documentação completa**: Consulte `ui-kit/MIGRATION.md`

---

## Arquivos Relacionados
- `ui-kit/` - Biblioteca de componentes
- `tailwind.config.js` - Configuração Tailwind (opcional)
- `tokens.json` - Design tokens exportáveis
