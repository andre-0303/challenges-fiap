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
  {
    id: "boticario-precificacao-dinamica",
    title: "Precificação Dinâmica de Produtos",
    slug: "boticario-precificacao-dinamica",
    companyId: "boticario",
    description:
      "Crie um motor de precificação que ajuste preços automaticamente com base em demanda e estoque.",
    longDescription:
      "O Boticário possui centenas de produtos com variação de demanda ao longo do ano, especialmente em datas comemorativas. Desenvolva um sistema que analise histórico de vendas, nível de estoque e sazonalidade para sugerir ajustes de preço automaticamente, maximizando receita sem prejudicar a percepção de marca.",
    difficulty: "dificil",
    skills: ["Algoritmos", "Análise de Dados", "Negócios"],
    technologies: ["Python", "TypeScript"],
  },
  {
    id: "itau-onboarding-digital",
    title: "Fluxo de Onboarding Digital",
    slug: "itau-onboarding-digital",
    companyId: "itau",
    description:
      "Projete um fluxo de abertura de conta 100% digital com validação de identidade.",
    longDescription:
      "O Itaú busca reduzir o tempo de abertura de conta para menos de 5 minutos. Desenvolva o fluxo completo de onboarding digital, incluindo validação de documentos via OCR, verificação facial e análise de risco automatizada. O desafio envolve UX fluida aliada à segurança regulatória do setor financeiro.",
    difficulty: "medio",
    skills: ["UX", "Segurança", "API Design"],
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "magalu-busca-inteligente",
    title: "Motor de Busca com Relevância Semântica",
    slug: "magalu-busca-inteligente",
    companyId: "magalu",
    description:
      "Implemente um sistema de busca que entenda intenção do usuário além de palavras-chave.",
    longDescription:
      "A busca atual do Magalu retorna resultados por correspondência exata de palavras. Seu desafio é criar um motor de busca semântico que entenda sinônimos, erros de digitação e intenção de compra. Por exemplo, buscar 'presente para mãe' deve retornar produtos relevantes mesmo sem essa frase no título.",
    difficulty: "dificil",
    skills: ["NLP", "Machine Learning", "Performance"],
    technologies: ["Python", "TypeScript", "PostgreSQL"],
  },
  {
    id: "raizen-previsao-demanda",
    title: "Previsão de Demanda Energética",
    slug: "raizen-previsao-demanda",
    companyId: "raizen",
    description:
      "Construa um modelo preditivo para antecipar picos de consumo energético por região.",
    longDescription:
      "A Raízen distribui energia para múltiplas regiões do Brasil e precisa antecipar picos de consumo para evitar sobrecarga na rede. Desenvolva um modelo que utilize dados históricos de consumo, temperatura, dia da semana e feriados para prever a demanda das próximas 24 horas com margem de erro abaixo de 5%.",
    difficulty: "dificil",
    skills: ["Machine Learning", "Séries Temporais", "Análise de Dados"],
    technologies: ["Python", "TypeScript"],
  },
  {
    id: "ifood-avaliacao-restaurantes",
    title: "Sistema de Avaliação Anti-Fraude",
    slug: "ifood-avaliacao-restaurantes",
    companyId: "ifood",
    description:
      "Detecte avaliações falsas em restaurantes usando análise de padrões e comportamento.",
    longDescription:
      "O iFood recebe milhares de avaliações diariamente e algumas são fraudulentas — seja para prejudicar concorrentes ou inflar a nota de um restaurante. Crie um sistema que analise padrões como frequência de avaliações, similaridade de textos, localização do usuário e histórico de pedidos para identificar e sinalizar avaliações suspeitas.",
    difficulty: "medio",
    skills: ["Análise de Dados", "Segurança", "Algoritmos"],
    technologies: ["Python", "Node.js"],
  },
  {
    id: "magalu-checkout-acessivel",
    title: "Checkout Acessível e Inclusivo",
    slug: "magalu-checkout-acessivel",
    companyId: "magalu",
    description:
      "Redesenhe o fluxo de checkout seguindo WCAG 2.1 AA para usuários com deficiência.",
    longDescription:
      "O Magalu tem compromisso com inclusão digital. Seu desafio é redesenhar o fluxo de checkout para ser totalmente acessível: navegação por teclado, compatibilidade com leitores de tela, contraste adequado e linguagem simples. O resultado deve passar nos critérios WCAG 2.1 nível AA sem sacrificar a experiência de outros usuários.",
    difficulty: "facil",
    skills: ["Acessibilidade", "Frontend", "UX"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "raizen-app-campo",
    title: "App Offline para Técnicos de Campo",
    slug: "raizen-app-campo",
    companyId: "raizen",
    description:
      "Desenvolva um app mobile que funcione sem internet para coleta de dados em campo.",
    longDescription:
      "Técnicos da Raízen trabalham em áreas rurais com conectividade instável. Crie um aplicativo que permita registrar inspeções de equipamentos, capturar fotos e assinar digitalmente relatórios — tudo offline. Os dados devem sincronizar automaticamente quando a conexão for restabelecida, sem perda de informação.",
    difficulty: "medio",
    skills: ["Mobile", "Offline First", "Sincronização"],
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "itau-chatbot-suporte",
    title: "Chatbot de Suporte Financeiro",
    slug: "itau-chatbot-suporte",
    companyId: "itau",
    description:
      "Crie um assistente conversacional que resolva dúvidas sobre produtos bancários.",
    longDescription:
      "O Itaú atende milhões de clientes com dúvidas sobre extrato, investimentos, cartões e empréstimos. Desenvolva um chatbot que entenda perguntas em linguagem natural, consulte uma base de conhecimento de produtos bancários e escale para um atendente humano quando necessário, mantendo o contexto da conversa.",
    difficulty: "facil",
    skills: ["NLP", "API Design", "UX Conversacional"],
    technologies: ["TypeScript", "Node.js"],
  },
  {
    id: "boticario-pipeline-dados",
    title: "Pipeline de Dados de Clientes",
    slug: "boticario-pipeline-dados",
    companyId: "boticario",
    description:
      "Construa um pipeline ETL para consolidar dados de clientes de múltiplos canais.",
    longDescription:
      "O Boticário vende por lojas físicas, e-commerce e revendedoras. Cada canal gera dados em formatos diferentes. Desenvolva um pipeline ETL que colete, normalize e consolide esses dados em um único perfil de cliente, respeitando a LGPD e garantindo qualidade dos dados para uso em campanhas de marketing.",
    difficulty: "medio",
    skills: ["Engenharia de Dados", "ETL", "LGPD"],
    technologies: ["Python", "PostgreSQL", "TypeScript"],
  },
  {
    id: "ifood-split-pedidos",
    title: "Split de Pedidos entre Restaurantes",
    slug: "ifood-split-pedidos",
    companyId: "ifood",
    description:
      "Implemente a lógica de divisão de um pedido entre múltiplos restaurantes parceiros.",
    longDescription:
      "O iFood quer permitir que um cliente faça um único pedido com itens de restaurantes diferentes na mesma entrega. Desenvolva a lógica de backend que divide o pedido, calcula o custo de entrega proporcional, gerencia o pagamento unificado e coordena os status de preparo de cada restaurante de forma independente.",
    difficulty: "dificil",
    skills: ["Arquitetura", "Backend", "Pagamentos"],
    technologies: ["TypeScript", "Node.js", "Redis"],
  },
  {
    id: "ifood-calculadora-frete",
    title: "Calculadora de Frete por Distância",
    slug: "ifood-calculadora-frete",
    companyId: "ifood",
    description:
      "Crie uma função que calcule o valor do frete com base na distância entre restaurante e cliente.",
    longDescription:
      "O iFood cobra frete de forma dinâmica dependendo da distância da entrega. Sua tarefa é criar um programa em Python que receba a distância em km e retorne o valor do frete seguindo a regra: até 2km = R$3,00, de 2km a 5km = R$6,00, acima de 5km = R$10,00. Exiba também uma mensagem amigável ao usuário com o valor calculado. Este é um ótimo exercício para praticar condicionais, funções e entrada de dados em Python.",
    difficulty: "facil",
    skills: ["Lógica de Programação", "Python Básico", "Condicionais"],
    technologies: ["Python"],
  },
  {
    id: "boticario-conversor-medidas",
    title: "Conversor de Medidas para Receitas",
    slug: "boticario-conversor-medidas",
    companyId: "boticario",
    description:
      "Desenvolva um conversor de unidades de medida usado na formulação de cosméticos.",
    longDescription:
      "Na criação de produtos cosméticos, os formuladores do Boticário precisam converter constantemente entre gramas, mililitros, onças e colheres de chá. Crie um programa em Python com um menu interativo no terminal que permita ao usuário escolher a conversão desejada e inserir o valor. Pratique loops, funções e organização de código com este desafio do mundo real.",
    difficulty: "facil",
    skills: ["Python Básico", "Funções", "Loops"],
    technologies: ["Python"],
  },
  {
    id: "itau-simulador-juros",
    title: "Simulador de Juros Simples e Compostos",
    slug: "itau-simulador-juros",
    companyId: "itau",
    description:
      "Implemente um simulador que calcule e compare rendimento com juros simples e compostos.",
    longDescription:
      "Entender a diferença entre juros simples e compostos é essencial no mundo financeiro. Crie um programa em Python que receba o valor inicial, a taxa de juros mensal e o período em meses, e exiba mês a mês quanto o valor cresce em cada modalidade. Ao final, mostre uma comparação clara entre os dois resultados. Ótimo para praticar laços de repetição, formatação de números e listas em Python.",
    difficulty: "facil",
    skills: ["Python Básico", "Loops", "Formatação de Dados"],
    technologies: ["Python"],
  },
  {
    id: "magalu-lista-compras",
    title: "Gerenciador de Lista de Compras",
    slug: "magalu-lista-compras",
    companyId: "magalu",
    description:
      "Construa um CRUD simples de lista de compras no terminal usando Python.",
    longDescription:
      "O Magazine Luiza quer incentivar seus clientes a planejar compras. Sua tarefa é criar um programa de terminal em Python onde o usuário possa adicionar produtos com nome e preço, listar todos os itens, remover um produto e ver o total da compra. Este desafio é perfeito para praticar listas, dicionários, laços e funções — os pilares do Python para qualquer desenvolvedor iniciante.",
    difficulty: "facil",
    skills: ["Python Básico", "Estruturas de Dados", "CRUD"],
    technologies: ["Python"],
  },
  {
    id: "raizen-landing-page",
    title: "Landing Page de Energia Sustentável",
    slug: "raizen-landing-page",
    companyId: "raizen",
    description:
      "Crie uma landing page responsiva apresentando os benefícios da energia renovável.",
    longDescription:
      "A Raízen quer comunicar sua missão de energia limpa para o público jovem. Desenvolva uma landing page com HTML e CSS puro (sem frameworks) que contenha: um header com logo e navegação, uma seção hero com headline impactante, três cards de benefícios da energia renovável, e um footer com links. O layout deve ser responsivo e funcionar bem em celular e desktop. Ideal para praticar os fundamentos de UI/UX e design responsivo.",
    difficulty: "facil",
    skills: ["HTML", "CSS", "Design Responsivo", "UI/UX"],
    technologies: ["HTML", "CSS"],
  },
  {
    id: "ifood-tela-cardapio",
    title: "Tela de Cardápio para Restaurante",
    slug: "ifood-tela-cardapio",
    companyId: "ifood",
    description:
      "Desenhe e implemente uma tela de cardápio digital seguindo boas práticas de UI/UX.",
    longDescription:
      "O iFood parceiro quer digitalizar seu cardápio. Seu desafio é criar uma página web com HTML e CSS que exiba categorias de produtos (Entradas, Pratos Principais, Sobremesas), cards de cada item com imagem placeholder, nome, descrição curta e preço. Aplique princípios de UI/UX como hierarquia visual, espaçamento consistente, tipografia legível e paleta de cores harmoniosa. Um ótimo primeiro projeto para o seu portfólio!",
    difficulty: "facil",
    skills: ["HTML", "CSS", "UI/UX", "Design"],
    technologies: ["HTML", "CSS"],
  },
];
