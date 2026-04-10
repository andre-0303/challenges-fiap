import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Header } from "@repo/ui/Header";
import { companies, challenges } from "@repo/data";
import type { Challenge } from "@repo/types";
import { AcceptChallengeButton } from "./AcceptChallengeButton";

const difficultyMeta: Record<
  Challenge["difficulty"],
  { label: string; xp: string; className: string }
> = {
  facil: { label: "Fácil", xp: "120 XP", className: "bg-easy-bg text-easy" },
  medio: {
    label: "Médio",
    xp: "300 XP",
    className: "bg-medium-bg text-medium",
  },
  dificil: {
    label: "Difícil",
    xp: "500 XP",
    className: "bg-hard-bg text-hard",
  },
};

const companyBackdrop: Record<string, string> = {
  ifood: "from-[#2B0B0D] via-[#181010] to-[#121212]",
  boticario: "from-[#271b28] via-[#181518] to-[#121212]",
  itau: "from-[#302012] via-[#191512] to-[#121212]",
  magalu: "from-[#131d27] via-[#121416] to-[#121212]",
  raizen: "from-[#162416] via-[#141615] to-[#121212]",
};

function buildInstructions(challenge: Challenge) {
  const guides: Record<
    string,
    Array<{ index: string; title: string; body: string }>
  > = {
    "ifood-otimizacao-entregas": [
      {
        index: "01",
        title: "Modele pedidos, entregadores e restrições",
        body: "Defina entradas como localização, janela de entrega, prioridade e capacidade de cada entregador. Deixe claro quais variáveis entram no cálculo e quais métricas indicam uma rota eficiente.",
      },
      {
        index: "02",
        title: "Crie a lógica de distribuição",
        body: "Implemente uma estratégia para dividir pedidos entre vários entregadores e ordenar as paradas de cada rota. Considere tempo estimado, distância, equilíbrio de carga e situações de pico.",
      },
      {
        index: "03",
        title: "Compare desempenho da solução",
        body: "Mostre resultados como tempo médio de entrega, distância total e aproveitamento dos entregadores. Explique também onde sua abordagem ainda pode melhorar ou escalar.",
      },
    ],
    "boticario-recomendacao-produtos": [
      {
        index: "01",
        title: "Estruture o perfil do cliente",
        body: "Use histórico de compras, categorias favoritas, faixa de preço e preferências para montar um perfil útil de recomendação. Explique como esses sinais serão tratados no sistema.",
      },
      {
        index: "02",
        title: "Monte o ranking de sugestões",
        body: "Defina como o sistema escolhe e ordena os produtos recomendados. Pode ser por similaridade, regras de negócio ou score de afinidade, desde que o critério seja claro.",
      },
      {
        index: "03",
        title: "Valide relevância das recomendações",
        body: "Apresente exemplos de saída e critérios para dizer se a recomendação foi boa. Considere repetição excessiva, falta de contexto e diversidade da vitrine sugerida.",
      },
    ],
    "itau-detector-fraudes": [
      {
        index: "01",
        title: "Defina sinais de risco",
        body: "Mapeie comportamentos suspeitos como valor fora do perfil, localização incomum, horário estranho e dispositivo novo. Organize esses sinais para gerar um score por transação.",
      },
      {
        index: "02",
        title: "Implemente a detecção em tempo real",
        body: "Construa a lógica que recebe a transação, avalia os sinais e classifica a operação como normal, suspeita ou crítica. Mostre como reduzir falsos positivos sem perder cobertura.",
      },
      {
        index: "03",
        title: "Descreva resposta e auditoria",
        body: "Explique o que acontece quando uma transação é sinalizada: alerta, revisão, bloqueio ou autenticação extra. Inclua também quais dados ficam registrados para auditoria.",
      },
    ],
    "magalu-catalogo-produtos": [
      {
        index: "01",
        title: "Modele produtos, SKUs e filtros",
        body: "Estruture produto, SKU, categoria, estoque, preço e atributos de busca. A modelagem precisa suportar consulta rápida, filtros combinados e crescimento grande do catálogo.",
      },
      {
        index: "02",
        title: "Desenhe a API escalável",
        body: "Projete endpoints para listagem, busca e detalhe com foco em alta leitura. Explique como cache, indexação e particionamento ajudam a manter desempenho com milhões de itens.",
      },
      {
        index: "03",
        title: "Mostre resiliência da arquitetura",
        body: "Descreva como a solução lida com picos de tráfego, falhas parciais e consistência entre catálogo, preço e estoque. O importante é evitar indisponibilidade em leitura.",
      },
    ],
    "raizen-dashboard-energia": [
      {
        index: "01",
        title: "Escolha as métricas principais",
        body: "Defina quais indicadores o painel precisa exibir, como produção, consumo, previsão, variação por região e alertas. Justifique por que cada métrica é útil para operação.",
      },
      {
        index: "02",
        title: "Estruture a experiência visual",
        body: "Decida quais componentes vão exibir os dados: cards resumo, gráficos, tabelas e filtros. Organize a hierarquia para permitir leitura rápida e comparação entre períodos ou regiões.",
      },
      {
        index: "03",
        title: "Planeje atualização dos dados",
        body: "Explique como o dashboard recebe informações novas, como trata dados faltantes e como reage a falhas de integração. O objetivo é manter clareza sem comprometer performance.",
      },
    ],
    "ifood-fila-clientes": [
      {
        index: "01",
        title: "Modele a fila de pedidos",
        body: "Defina como pedidos entram na fila, como o tempo de preparo é calculado e como a capacidade da cozinha afeta a ordem de atendimento. Especifique variáveis e regras da simulação.",
      },
      {
        index: "02",
        title: "Implemente a simulação temporal",
        body: "Crie a lógica que avança no tempo, processa pedidos e estima espera para novos clientes. Considere múltiplos cozinheiros, prioridades e variações no fluxo de demanda.",
      },
      {
        index: "03",
        title: "Extraia indicadores operacionais",
        body: "Mostre resultados como tempo médio de espera, ocupação da cozinha e impacto do aumento de pedidos. Esses dados devem ajudar a entender gargalos e testar melhorias.",
      },
    ],
    "boticario-precificacao-dinamica": [
      {
        index: "01",
        title: "Mapeie fatores que impactam preço",
        body: "Liste variáveis como estoque, histórico de vendas, sazonalidade, margem mínima e campanhas. Explique como cada fator influencia a decisão de aumentar ou reduzir preço.",
      },
      {
        index: "02",
        title: "Implemente o motor de sugestão",
        body: "Construa uma lógica que gere preço recomendado com base nos sinais mapeados. A saída precisa ser coerente e evitar alterações bruscas que prejudiquem a percepção da marca.",
      },
      {
        index: "03",
        title: "Teste cenários de negócio",
        body: "Simule casos de alta demanda, sobra de estoque e datas especiais. Mostre como sua regra reage em cada situação e quais métricas seriam acompanhadas para validar resultado.",
      },
    ],
    "itau-onboarding-digital": [
      {
        index: "01",
        title: "Descreva toda a jornada",
        body: "Organize o fluxo desde cadastro inicial até aprovação final, incluindo captura de dados, envio de documentos, validação de identidade e análise de risco.",
      },
      {
        index: "02",
        title: "Projete segurança e integrações",
        body: "Explique como OCR, biometria facial e serviços externos entram no processo. Mostre também como os dados sensíveis são protegidos e auditados.",
      },
      {
        index: "03",
        title: "Defina aprovação e fallback",
        body: "Mostre quando a conta pode ser aprovada automaticamente, quando precisa de revisão humana e como o usuário é orientado em caso de erro ou pendência.",
      },
    ],
    "magalu-busca-inteligente": [
      {
        index: "01",
        title: "Entenda a intenção da consulta",
        body: "Considere sinônimos, erros de digitação, contexto de compra e termos ambíguos. Explique como transformar a busca do usuário em sinais úteis para ranking.",
      },
      {
        index: "02",
        title: "Monte a estratégia de relevância",
        body: "Combine correspondência textual, afinidade semântica, popularidade e disponibilidade do produto. Descreva como evitar resultados irrelevantes por coincidência de palavras.",
      },
      {
        index: "03",
        title: "Valide com exemplos reais",
        body: "Teste buscas genéricas, consultas com erro e pesquisas por intenção, como presente ou categoria ampla. Mostre por que os resultados retornados fazem sentido.",
      },
    ],
    "raizen-previsao-demanda": [
      {
        index: "01",
        title: "Prepare os dados de entrada",
        body: "Estruture histórico de consumo, temperatura, calendário, feriados e variações regionais. Explique como tratar outliers, sazonalidade e dados faltantes.",
      },
      {
        index: "02",
        title: "Projete o modelo de previsão",
        body: "Escolha uma abordagem para estimar demanda das próximas 24 horas e mostre como ela usa comportamento histórico e variáveis externas para melhorar a previsão.",
      },
      {
        index: "03",
        title: "Mostre como avaliar o erro",
        body: "Explique quais métricas serão usadas para medir precisão e como a operação utilizaria a previsão para prevenir sobrecarga e planejar distribuição de energia.",
      },
    ],
    "ifood-avaliacao-restaurantes": [
      {
        index: "01",
        title: "Identifique padrões de fraude",
        body: "Mapeie volume anormal de avaliações, similaridade de textos, contas recém-criadas e comportamento suspeito de usuários. Defina como cada sinal entra na análise.",
      },
      {
        index: "02",
        title: "Implemente uma classificação",
        body: "Crie uma lógica para separar avaliações legítimas, suspeitas e críticas. Pode usar score, regras ou combinação dos dois, desde que o critério fique claro.",
      },
      {
        index: "03",
        title: "Defina ação após detecção",
        body: "Explique se a avaliação será ocultada, enviada para revisão ou mantida com alerta. O desafio pede equilíbrio entre confiança da plataforma e experiência do usuário.",
      },
    ],
    "magalu-checkout-acessivel": [
      {
        index: "01",
        title: "Audite barreiras do fluxo atual",
        body: "Mapeie problemas de navegação por teclado, contraste, leitores de tela, ordem de foco e mensagens de erro. Mostre quais pontos mais atrapalham a conclusão da compra.",
      },
      {
        index: "02",
        title: "Redesenhe a experiência",
        body: "Proponha um checkout acessível e eficiente, descrevendo componentes, labels, mensagens, estados de erro e hierarquia visual alinhados ao padrão WCAG 2.1 AA.",
      },
      {
        index: "03",
        title: "Planeje validação de acessibilidade",
        body: "Explique como testar navegação sem mouse, leitura por tecnologias assistivas, contraste e clareza das instruções. Inclua exemplos de testes manuais e automáticos.",
      },
    ],
    "raizen-app-campo": [
      {
        index: "01",
        title: "Desenhe o fluxo offline",
        body: "Defina como o técnico registra visitas, anexa fotos, coleta assinaturas e consulta tarefas mesmo sem conexão. O fluxo precisa ser simples e resistente à perda de dados.",
      },
      {
        index: "02",
        title: "Modele persistência e sincronização",
        body: "Explique onde os dados ficam armazenados localmente, como conflitos serão resolvidos e quando a sincronização ocorre. A solução precisa funcionar bem offline e online.",
      },
      {
        index: "03",
        title: "Garanta confiabilidade de campo",
        body: "Inclua filas de envio, feedback de status e confirmações para o usuário saber o que já foi sincronizado. Mostre como evitar duplicidade e perda de informação.",
      },
    ],
    "itau-chatbot-suporte": [
      {
        index: "01",
        title: "Organize a base de conhecimento",
        body: "Defina quais informações sobre produtos bancários, tarifas e serviços o bot poderá consultar. Estruture esse conteúdo para respostas claras e consistentes.",
      },
      {
        index: "02",
        title: "Projete a conversa",
        body: "Implemente um fluxo que entenda intenção, mantenha contexto entre mensagens e saiba quando encaminhar para atendimento humano sem perder histórico.",
      },
      {
        index: "03",
        title: "Avalie qualidade do atendimento",
        body: "Descreva como medir taxa de resolução, tempo médio de resposta, satisfação e erros de entendimento. O bot precisa ser útil, seguro e objetivo.",
      },
    ],
    "boticario-pipeline-dados": [
      {
        index: "01",
        title: "Mapeie canais e esquemas",
        body: "Identifique as fontes de dados e como cada canal representa cliente, compra, campanha e consentimento. Mostre quais transformações serão necessárias para unificar tudo.",
      },
      {
        index: "02",
        title: "Projete o ETL",
        body: "Estruture extração, limpeza, normalização e carga dos dados com foco em rastreabilidade, padronização e qualidade. Inclua deduplicação e tratamento de registros incompletos.",
      },
      {
        index: "03",
        title: "Inclua governança e LGPD",
        body: "Explique como consentimento, anonimização, auditoria e controle de acesso entram no pipeline. O resultado precisa ser útil para marketing e seguro do ponto de vista regulatório.",
      },
    ],
    "ifood-split-pedidos": [
      {
        index: "01",
        title: "Modele o pedido unificado",
        body: "Defina como um pedido único será separado por restaurante, mantendo relação entre itens, taxas, pagamento e status. Deixe claro o que é global e o que é específico de cada parceiro.",
      },
      {
        index: "02",
        title: "Implemente orquestração do fluxo",
        body: "Projete a lógica de divisão, cálculo proporcional de frete, conciliação de pagamento e atualização independente do preparo. Explique como manter consistência no processo.",
      },
      {
        index: "03",
        title: "Trate falhas e exceções",
        body: "Descreva como a solução lida com cancelamento parcial, indisponibilidade de item, atraso de restaurante ou falha de pagamento. O cliente precisa continuar entendendo o estado do pedido.",
      },
    ],
    "ifood-calculadora-frete": [
      {
        index: "01",
        title: "Implemente a regra de faixas",
        body: "Crie uma função que receba a distância e aplique exatamente as faixas do enunciado. Garanta que os limites de 2 km e 5 km estejam corretos e sem ambiguidade.",
      },
      {
        index: "02",
        title: "Monte a interação no terminal",
        body: "Permita que a pessoa informe a distância e receba uma mensagem clara com o valor do frete. Se quiser, trate entradas inválidas para tornar o programa mais robusto.",
      },
      {
        index: "03",
        title: "Teste casos de borda",
        body: "Valide distâncias exatamente nos limites, valores decimais e entradas incorretas. O objetivo é mostrar domínio de condicionais e confiabilidade do cálculo.",
      },
    ],
    "boticario-conversor-medidas": [
      {
        index: "01",
        title: "Estruture o menu do conversor",
        body: "Defina quais unidades serão suportadas e como o usuário escolhe a conversão. Organize o fluxo para ser fácil de seguir e de expandir com novas opções depois.",
      },
      {
        index: "02",
        title: "Implemente funções separadas",
        body: "Crie funções independentes para cada tipo de conversão, mantendo o código organizado e reutilizável. O importante é mostrar clareza de lógica e boa separação de responsabilidades.",
      },
      {
        index: "03",
        title: "Cuide da usabilidade",
        body: "Adicione validação de entrada, mensagens claras e repetição de operações sem reiniciar o programa. Isso mostra atenção não só ao cálculo, mas também à experiência de uso.",
      },
    ],
    "itau-simulador-juros": [
      {
        index: "01",
        title: "Modele os parâmetros da simulação",
        body: "Receba valor inicial, taxa mensal e período em meses, deixando claro como esses dados serão usados em juros simples e compostos. Trate a entrada do usuário corretamente.",
      },
      {
        index: "02",
        title: "Calcule evolução mês a mês",
        body: "Implemente a lógica das duas modalidades e mostre a progressão ao longo do tempo, não apenas o total final. Isso ajuda a visualizar a diferença entre crescimento linear e acumulado.",
      },
      {
        index: "03",
        title: "Compare resultados de forma clara",
        body: "Apresente uma comparação final entre juros simples e compostos, destacando valor acumulado e diferença absoluta. O usuário deve entender rapidamente o impacto financeiro.",
      },
    ],
    "magalu-lista-compras": [
      {
        index: "01",
        title: "Modele os itens da lista",
        body: "Defina como cada produto será armazenado, incluindo nome e preço. Sua estrutura precisa permitir adicionar, listar, remover e calcular total de forma simples.",
      },
      {
        index: "02",
        title: "Implemente o CRUD no terminal",
        body: "Monte um menu para inserir itens, exibir a lista, remover produtos e consultar o valor total. O foco é praticar estruturas de dados, funções e controle de fluxo.",
      },
      {
        index: "03",
        title: "Melhore clareza e robustez",
        body: "Trate lista vazia, índice inválido e valores não numéricos. Mesmo sendo um desafio introdutório, vale mostrar organização, mensagens claras e comportamento previsível.",
      },
    ],
    "raizen-landing-page": [
      {
        index: "01",
        title: "Planeje a estrutura da página",
        body: "Organize a landing page em header, hero, benefícios e footer conforme o enunciado. Defina a hierarquia visual de cada seção para comunicar a proposta logo no início.",
      },
      {
        index: "02",
        title: "Implemente o layout responsivo",
        body: "Construa a página usando HTML e CSS puro com boa leitura em celular e desktop. Preste atenção em espaços, alinhamento, tamanho de fonte e comportamento dos blocos.",
      },
      {
        index: "03",
        title: "Refine a comunicação visual",
        body: "Aplique uma identidade coerente com energia sustentável, usando cores, contraste e tipografia apropriados. O objetivo é entregar uma página convincente e bem acabada.",
      },
    ],
    "ifood-tela-cardapio": [
      {
        index: "01",
        title: "Organize categorias e itens",
        body: "Defina categorias, nome dos pratos, preços e descrições curtas. Estruture o conteúdo para facilitar leitura rápida e entendimento do cardápio.",
      },
      {
        index: "02",
        title: "Desenhe a página e os cards",
        body: "Implemente uma interface com seções bem delimitadas, cards consistentes e boa hierarquia visual. Pense em como destacar nome, preço e categoria sem poluir a tela.",
      },
      {
        index: "03",
        title: "Aplique boas práticas de UI/UX",
        body: "Refine espaçamento, tipografia, paleta e contraste para que a página pareça pronta para uso real. O desafio é mostrar sensibilidade visual, não apenas uma listagem funcional.",
      },
    ],
  };

  return (
    guides[challenge.slug] ?? [
      {
        index: "01",
        title: "Entenda o contexto",
        body: "Leia o problema com atenção, destaque requisitos, restrições e critérios de sucesso antes de começar a implementação.",
      },
      {
        index: "02",
        title: "Construa a solução",
        body: "Projete uma abordagem coerente com as tecnologias sugeridas, explicando fluxo principal, arquitetura e decisões técnicas importantes.",
      },
      {
        index: "03",
        title: "Valide o resultado",
        body: "Documente cenários de teste, exemplos de uso e indicadores práticos que provem que a solução atende o desafio.",
      },
    ]
  );
}

export function generateStaticParams() {
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }));
}

export default async function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const challenge = challenges.find((item) => item.slug === slug);

  if (!challenge) {
    notFound();
  }

  const company = companies.find((item) => item.id === challenge.companyId);

  if (!company) {
    notFound();
  }

  const challengeMeta = difficultyMeta[challenge.difficulty];
  const instructions = buildInstructions(challenge);
  const companyChallengeCount = challenges.filter(
    (item) => item.companyId === company.id,
  ).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-[1800px] px-6 pt-28 pb-20 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/24">
          <Link href="/" className="transition-colors hover:text-white/70">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/challenges"
            className="transition-colors hover:text-white/70"
          >
            Challenges
          </Link>
          <ChevronRight size={12} />
          <span className="text-fiap-red/75">{challenge.title}</span>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] p-2">
                <img
                  src={company.logo}
                  alt={`Logo da ${company.name}`}
                  className="max-h-6 w-auto max-w-full object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                  {company.name}
                </div>
                <div className="text-xs text-white/28">{company.industry}</div>
              </div>
            </div>

            <h1 className="max-w-[14ch] font-headline text-[clamp(3rem,7vw,5rem)] font-black leading-[0.92] tracking-tight text-white">
              {challenge.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${challengeMeta.className}`}
              >
                {challengeMeta.label}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white/48">
                {challengeMeta.xp}
              </span>
            </div>

            <section className="mt-12 border-l-2 border-fiap-red/80 pl-5">
              <h2 className="text-[2rem] font-black tracking-tight text-white">
                O Problema
              </h2>
              <p className="mt-4 max-w-[70ch] text-base leading-8 text-white/58">
                {challenge.longDescription}
              </p>
            </section>

            <section className="mt-12 rounded-[1.75rem] border border-white/6 bg-surface/90 p-7 md:p-9">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-fiap-red/20 bg-fiap-red/10 text-fiap-red">
                  <Blocks size={15} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-white">
                  Instruções
                </h3>
              </div>

              <div className="space-y-8">
                {instructions.map((instruction) => (
                  <div
                    key={instruction.index}
                    className="grid gap-3 md:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <div className="text-4xl font-black leading-none tracking-tight text-white/8">
                      {instruction.index}
                    </div>
                    <div>
                      <h4 className="text-lg font-black tracking-tight text-white">
                        {instruction.title}
                      </h4>
                      <p className="mt-2 max-w-[62ch] text-sm leading-7 text-white/46">
                        {instruction.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h3 className="text-xl font-black tracking-tight text-white">
                Stack Sugerida
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {challenge.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/54"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-12">
              <Link
                href="/challenges"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/48 transition-colors hover:text-white"
              >
                <ArrowLeft size={16} />
                Voltar para Challenges
              </Link>
            </div>
          </section>

          <aside className="space-y-5">
            <div
              className={`overflow-hidden rounded-[1.75rem] border border-white/8 bg-linear-to-br ${companyBackdrop[company.id] ?? "from-[#1E1E1E] to-[#131313]"} shadow-[0_20px_60px_rgba(0,0,0,0.18)]`}
            >
              <div className="h-36 border-b border-white/6 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />

              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-black/20 p-2">
                  <img
                    src={company.logo}
                    alt={`Logo da ${company.name}`}
                    className="max-h-7 w-auto max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                  {company.name}
                </h3>

                <div className="mt-2 text-[11px] font-black uppercase tracking-[0.24em] text-fiap-red/65">
                  {company.industry}
                </div>

                <p className="mt-5 text-sm leading-7 text-white/46">
                  {company.description}
                </p>

                <div className="mt-6 grid gap-4 border-t border-white/6 pt-5">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-white/26">Website</span>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white/68 transition-colors hover:text-white"
                    >
                      Visitar
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-white/26">Desafios</span>
                    <span className="text-white/68">
                      {companyChallengeCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-white/26">Skills-chave</span>
                    <span className="text-right text-white/68">
                      {challenge.skills.slice(0, 2).join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <AcceptChallengeButton />

            <div className="rounded-[1.5rem] border border-white/6 bg-surface/80 p-5">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/28">
                <Building2 size={14} />
                Visão Rápida
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/26">Tecnologias</span>
                  <span className="font-semibold text-white/72">
                    {challenge.technologies.length}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/26">Competências</span>
                  <span className="font-semibold text-white/72">
                    {challenge.skills.length}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/26">Dificuldade</span>
                  <span className="font-semibold text-white/72">
                    {challengeMeta.label}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
