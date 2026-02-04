# Noah Design System Monorepo

Este repositório contém:

- **@noah/ui**: UI Kit React + Tailwind (Button, Card, Input, Modal, Table + tokens)
- **noah-web-template**: template Vite + React já integrado ao Design System
- **docs/ux-flows**: fluxos UX padronizados (Educa, Capta, Imob)

## Começar
Pré-requisitos: Node 18+ e npm.

```bash
npm install
npm run dev
```

## Storybook
```bash
npm run storybook
```

## Versionamento (SemVer)
Usamos **Changesets** para SemVer e releases.

Criar changeset:
```bash
npm run changeset
```

Gerar versions (bump):
```bash
npm run version-packages
```

Publicar:
```bash
npm run release
```

> Versão inicial do design system: **0.1.0**
