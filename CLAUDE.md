# ChallengesON — CLAUDE.md

## Skills
Antes de criar qualquer componente visual ou página, leia e siga 
as instruções em SKILL-ui-ux.md para garantir qualidade de design.

## O que é este projeto
Plataforma web da FIAP onde empresas parceiras publicam desafios 
práticos e alunos os resolvem para aprender com problemas reais.

## Stack
- Monorepo: Turborepo + pnpm workspaces
- Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Componentes: shadcn/ui customizado com tema FIAP
- Dados: JSON estático em packages/data (sem banco na v1)
- Ícones: Lucide React
- Testes: Vitest

## Identidade Visual — NUNCA desviar disso
- Background: #0A0A0A
- Accent/CTA: #ED1C24 (vermelho FIAP)
- Surface cards: #1A1A1A
- Texto primário: #FFFFFF
- Texto secundário: #A0A0A0
- Dificuldade Fácil: #22C55E | Médio: #EAB308 | Difícil: #ED1C24

## Estrutura de packages
- apps/web → app Next.js principal
- packages/ui → componentes reutilizáveis (CompanyCard, ChallengeCard, Navbar...)
- packages/types → interfaces: Company, Challenge, Difficulty
- packages/data → companies.ts e challenges.ts com dados mock

## Regras de código
- Sempre TypeScript, nunca JavaScript puro
- Componentes em packages/ui são server components por padrão
- Use "use client" apenas quando necessário (interatividade)
- Tailwind para estilo, sem CSS modules ou styled-components
- Nomes de arquivos: kebab-case para pastas, PascalCase para componentes
- Sempre tipar com as interfaces de packages/types

## Páginas existentes (App Router)
- / → Home (hero + empresas + challenges em destaque)
- /challenges → listagem com filtros
- /challenges/[id] → detalhe do challenge
- /companies → grid de empresas
- /companies/[id] → perfil da empresa + seus challenges

## O que NÃO fazer na v1
- Não criar autenticação/login
- Não criar banco de dados
- Não criar painel admin
- Não criar sistema de submissão de projetos
- Não usar CSS modules ou styled-components

## Empresas parceiras (mock)
iFood, O Boticário, Itaú, Magalu, Raízen

## Como rodar
pnpm install
pnpm dev