# ChallengesON

Plataforma web da FIAP onde empresas parceiras publicam desafios práticos e alunos os resolvem para aprender com problemas reais do mercado.

## 🎯 Sobre o Projeto

O ChallengesON conecta empresas parceiras a estudantes da FIAP através de desafios práticos. As empresas publicam problemas reais do seu dia a dia, e os alunos trabalham nessas soluções como parte do seu aprendizado — criando um ambiente de educação online-action com problemas autênticos de negócio.

## 🚀 Stack Tecnológica

### Core
- **Monorepo**: Turborepo + pnpm workspaces
- **Frontend**: Next.js 14 (App Router) com TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui customizados com tema FIAP
- **Dados**: JSON estático (packages/data) — sem banco de dados na v1
- **Ícones**: Lucide React
- **Testes**: Vitest

### Estrutura de Packages
```
apps/web/           → App Next.js principal
packages/ui/        → Componentes reutilizáveis (CompanyCard, ChallengeCard, Navbar...)
packages/types/     → Interfaces TypeScript (Company, Challenge, Difficulty)
packages/data/      → Dados mock (companies.ts, challenges.ts)
```

## 🎨 Identidade Visual

| Elemento | Cor |
|---|---|
| Background | `#0A0A0A` |
| Accent/CTA | `#ED1C24` (vermelho FIAP) |
| Surface cards | `#1A1A1A` |
| Texto primário | `#FFFFFF` |
| Texto secundário | `#A0A0A0` |
| Dificuldade Fácil | `#22C55E` |
| Dificuldade Médio | `#EAB308` |
| Dificuldade Difícil | `#ED1C24` |

## 📁 Páginas e Rotas

- `/` — Home (hero + empresas + challenges em destaque)
- `/challenges` — Listagem com filtros de dificuldade
- `/challenges/[id]` — Detalhe do challenge
- `/companies` — Grid de todas as empresas parceiras
- `/companies/[id]` — Perfil da empresa e seus challenges

## 🏢 Empresas Parceiras

- iFood
- O Boticário
- Itaú
- Magalu
- Raízen

## 🛠️ Como Rodar

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em [`http://localhost:3000`](http://localhost:3000).

## 📝 Convenções de Código

- Sempre TypeScript — nada de JavaScript puro
- Componentes em `packages/ui` são Server Components por padrão
- `"use client"` apenas quando necessário (interatividade)
- Tailwind para estilo — sem CSS modules ou styled-components
- Nomes: kebab-case para pastas, PascalCase para componentes
- Sempre usar as interfaces de `packages/types`

## 🚫 O Que NÃO Fazer na v1

- ❌ Não criar autenticação/login
- ❌ Não criar banco de dados
- ❌ Não criar painel admin
- ❌ Não criar sistema de submissão de projetos
- ❌ Não usar CSS modules ou styled-components

## 📦 Scripts Disponíveis

```bash
pnpm dev       # Inicia ambiente de desenvolvimento
pnpm build     # Build de produção
pnpm lint      # Linter ESLint
pnpm test      # Testes com Vitest
```

## 📄 Licença

Este projeto é parte dos desafios práticos da FIAP.
