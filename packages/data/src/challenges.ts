import type { Challenge } from "@repo/types";

export const challenges: Challenge[] = [
  {
    id: "ifood-otimizacao-entregas",
    title: "Otimização de Rotas de Entrega",
    slug: "ifood-otimizacao-entregas",
    companyId: "ifood",
    description:
      "Desenvolva um algoritmo que calcule a rota mais eficiente para múltiplos entregadores.",
    longDescription:
      "O iFood lida com milhares de entregas simultâneas diariamente. Seu desafio é criar uma solução algorítmica que otimize a distribuição de rotas para entregadores em uma mesma região geográfica, minimizando tempo de entrega e custo operacional. Considere variáveis como distância, trânsito e capacidade dos entregadores.",
    difficulty: "dificil",
    skills: ["Algoritmos", "Geolocalização", "Performance"],
    technologies: ["TypeScript", "Node.js"],
  },
  {
    id: "boticario-recomendacao-produtos",
    title: "Sistema de Recomendação de Produtos",
    slug: "boticario-recomendacao-produtos",
    companyId: "boticario",
    description:
      "Crie um modelo de recomendação baseada no perfil de compra e preferências do cliente.",
    longDescription:
      "O Boticário deseja oferecer uma experiência de compra personalizada. Desenvolva um sistema que sugira produtos considerando o histórico de compras, faixa etária, e preferências de fragrância do cliente.",
    difficulty: "medio",
    skills: ["Machine Learning", "Análise de Dados", "UX"],
    technologies: ["Python", "TypeScript"],
  },
  {
    id: "itau-detector-fraudes",
    title: "Detecção de Transações Suspeitas",
    slug: "itau-detector-fraudes",
    companyId: "itau",
    description:
      "Identifique padrões incomuns em transações financeiras em tempo real.",
    longDescription:
      "Com o aumento de fraudes digitais, o Itaú busca soluções para detectar transações anômalas em tempo real. Crie um sistema que analise padrões de comportamento do usuário e sinalize operações fora do comum para revisão.",
    difficulty: "dificil",
    skills: ["Segurança", "Análise de Dados", "Tempo Real"],
    technologies: ["TypeScript", "Node.js", "Redis"],
  },
  {
    id: "magalu-catálogo-produtos",
    title: "Catálogo de Produtos Escalável",
    slug: "magalu-catálogo-produtos",
    companyId: "magalu",
    description:
      "Construa uma API de catálogo capaz de lidar com milhões de SKUs com alta disponibilidade.",
    longDescription:
      "O Magazine Luiza precisa de uma estrutura para gerenciar um catálogo com milhões de produtos, oferecendo busca rápida, filtros eficientes e alta disponibilidade. O desafio é projetar a arquitetura e os endpoints da API.",
    difficulty: "medio",
    skills: ["API Design", "Arquitetura", "Performance"],
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "raizen-dashboard-energia",
    title: "Dashboard de Dados Energéticos",
    slug: "raizen-dashboard-energia",
    companyId: "raizen",
    description:
      "Desenvolva um dashboard visual para monitoramento de métricas de produção energética.",
    longDescription:
      "A Raízen precisa de um painel interativo que exiba dados de produção de energia, consumo e previsão de demanda. O desafio envolve visualização de dados eficiente e atualização em tempo real.",
    difficulty: "facil",
    skills: ["Frontend", "Visualização de Dados", "UI/UX"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ifood-fila-clientes",
    title: "Simulação de Fila em Restaurante Virtual",
    slug: "ifood-fila-clientes",
    companyId: "ifood",
    description:
      "Crie um sistema de filas virtual para restaurantes com estimativa de tempo de preparo.",
    longDescription:
      "Simule o comportamento de filas em restaurantes virtuais do iFood, considerando tempo de preparo, number de cozinheiros e ordem dos pedidos. O objetivo é minimizar o tempo médio de espera.",
    difficulty: "facil",
    skills: ["Estruturas de Dados", "Simulação", "Lógica"],
    technologies: ["TypeScript"],
  },
];
