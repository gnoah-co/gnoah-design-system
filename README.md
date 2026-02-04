# Noah Design System Monorepo

Este repositório contém:

- **@noah/ui**: UI Kit React + Tailwind (Button, Card, Input, Modal, Table + tokens)
- **noah-web-template**: template Vite + React já integrado ao Design System
- **docs/ux-flows**: fluxos UX padronizados (Educa, Capta, Imob)

## Começar
Pré-requisitos: Node 18+ e pnpm.

```bash
pnpm install
pnpm dev
```

## Storybook
```bash
pnpm storybook
```

## Versionamento (SemVer)
Usamos **Changesets** para SemVer e releases.

Criar changeset:
```bash
pnpm changeset
```

Gerar versions (bump):
```bash
pnpm version-packages
```

Publicar:
```bash
pnpm release
```

> Versão inicial do design system: **0.1.0**
