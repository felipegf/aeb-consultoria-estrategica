// Conteúdo das soluções por perfil (Gestor Público, Agente Político, Empreendedor).
// Extraído fielmente dos one-pagers (Docs/Case_*.pdf).
//
// IMPORTANTE: as classes de cor em `accent` precisam ser strings literais
// completas (ex.: "text-purple", "bg-sky/10") para o JIT do Tailwind reconhecê-las.
// Nunca interpolar (ex.: `text-${cor}`), senão a classe não é gerada.

export type Stat = { value: string; label: string };
export type Insight = { title: string; text: string };
export type Product = { title: string; description: string; badge: string };

export type Accent = {
  /** cor do texto de destaque (palavra do título, números, badge) */
  text: string;
  /** cor sólida (pílula da persona) */
  bg: string;
  /** fundo suave (callout, badge) */
  softBg: string;
  /** borda de destaque (topo dos cards de produto) */
  border: string;
};

export type Segment = {
  slug: string;
  emoji: string;
  label: string;
  /** chave usada no formulário/lead (mesmo padrão do /api/contato) */
  value: string;
  eyebrow: string;
  /** título do hero, com a última parte destacada na cor da persona */
  titlePre: string;
  titleHighlight: string;
  intro: string;
  /** descrição curta usada no card do índice /solucoes */
  cardDescription: string;
  stats: Stat[];
  insightsTitle: string;
  insights: Insight[];
  callout: { title: string; text: string };
  productsTitle: string;
  products: Product[];
  cta: { title: string; subtitle: string };
  pdf: string;
  accent: Accent;
  /** descrição para metadata/SEO */
  metaDescription: string;
};

export const segments: Segment[] = [
  {
    slug: "gestor-publico",
    emoji: "🏛",
    label: "Gestor Público",
    value: "gestor-publico",
    eyebrow: "Diagnóstico estratégico para gestão pública municipal",
    titlePre:
      "Você tem os dados nem sempre organizados. Nós transformamos informação em ",
    titleHighlight: "conhecimento.",
    intro:
      "A A&B Consultoria transforma dados públicos dispersos em diagnósticos prontos para subsidiar decisões, justificar investimentos e orientar políticas com base técnica sólida.",
    cardDescription:
      "Diagnósticos socioeconômicos com leitura crítica para subsidiar decisões, justificar investimentos e orientar políticas públicas.",
    stats: [
      {
        value: "12.000+",
        label: "casos de violência doméstica registrados em Contagem (2018–20)",
      },
      {
        value: "38,5%",
        label: "das famílias chefiadas por mulheres — acima da média de MG",
      },
      {
        value: "1º lugar",
        label: "em saldo de empregos em MG em 2020 — com ressalvas críticas",
      },
      {
        value: "4 bases",
        label: "cruzadas para produzir um diagnóstico completo",
      },
    ],
    insightsTitle: "O que nossos diagnósticos revelam",
    insights: [
      {
        title: "Mercado de trabalho exige leitura crítica.",
        text: "O saldo positivo de empregos em Contagem em 2020 foi real — mas mascarado por subnotificações de demissões, efeito BEm e limitações do CAGED. A RAIS conta a outra metade da história.",
      },
      {
        title: "Desigualdade de gênero é mensurável e localizável.",
        text: "Mulheres com diploma ganham ~60% menos que homens equivalentes no município. Dado que fundamenta política salarial e programas de qualificação.",
      },
      {
        title: "O setor de serviços concentra risco oculto.",
        text: "45% dos empregos formais dependem da Administração Pública. Fragilidade estrutural que exige diversificação econômica ativa.",
      },
      {
        title: "Maternidade adolescente permanece acima de 10%.",
        text: "Sem tendência clara de queda — com risco de agravamento pós-pandemia. Dado acionável para política de saúde e educação.",
      },
    ],
    callout: {
      title: "⚠ Diferencial A&B",
      text: "Não entregamos apenas relatórios descritivos. Cada diagnóstico inclui leitura crítica dos dados, alertas metodológicos e implicações concretas para a decisão do gestor.",
    },
    productsTitle: "O que entregamos para você",
    products: [
      {
        title: "Diagnóstico do Mercado de Trabalho",
        description:
          "Análise CAGED + RAIS com leitura crítica, recortes setoriais, perfil da força de trabalho e ranking municipal. Relatório técnico + apresentação executiva.",
        badge: "Case disponível para demonstração",
      },
      {
        title: "Diagnóstico de Indicadores Sociais",
        description:
          "Análise de gênero, violência, saúde e família com SEJUSP, DATASUS e IBGE. Base técnica para programas municipais de proteção social.",
        badge: "Case disponível para demonstração",
      },
      {
        title: "Análise Setorial Estratégica",
        description:
          "Mapeamento de setores econômicos com concentração de risco, oportunidades subexploradas e recomendações para desenvolvimento local.",
        badge: "Case disponível para demonstração",
      },
      {
        title: "Observatório Econômico Municipal",
        description:
          "Monitoramento contínuo de indicadores com atualização periódica. Produto recorrente: assinatura mensal.",
        badge: "Sob demanda",
      },
    ],
    cta: {
      title: "Quer ver o diagnóstico completo?",
      subtitle: "Solicite uma apresentação gratuita.",
    },
    pdf: "/materiais/gestor-publico.pdf",
    accent: {
      text: "text-sky",
      bg: "bg-sky",
      softBg: "bg-sky/10",
      border: "border-sky",
    },
    metaDescription:
      "Diagnóstico estratégico para gestão pública municipal: mercado de trabalho, indicadores sociais e análise setorial com leitura crítica dos dados.",
  },
  {
    slug: "agente-politico",
    emoji: "🗳",
    label: "Agente Político",
    value: "agente-politico",
    eyebrow: "Inteligência eleitoral e estratégia legislativa baseada em dados",
    titlePre: "Eleição é disputa de narrativa. Narrativa precisa de ",
    titleHighlight: "dados reais.",
    intro:
      "A A&B Consultoria transforma dados territoriais, sociais e eleitorais em estratégia aplicada — para candidatos, vereadores e assessorias que querem vantagem real sobre quem opera só por intuição.",
    cardDescription:
      "Dados territoriais, sociais e eleitorais transformados em estratégia aplicada para campanha, mandato e pauta legislativa.",
    stats: [
      { value: "459 mil", label: "eleitores aptos" },
      { value: "53%", label: "do eleitorado obrigatório é feminino" },
      { value: "25–49", label: "é a faixa etária prevalente" },
      {
        value: "4 bases",
        label: "cruzadas para produzir um diagnóstico completo",
      },
    ],
    insightsTitle: "O que a inteligência de dados faz pela sua estratégia",
    insights: [
      {
        title: "Dado territorial define mensagem, não intuição.",
        text: "Zonas com alta concentração de mulheres chefes de família respondem de forma diferente a pautas de segurança, renda e creche. Saber onde e quem muda o discurso — e o resultado.",
      },
      {
        title: "Pauta legislativa com base técnica tem mais tração.",
        text: "Projetos fundamentados em dados reais do município são mais difíceis de questionar e geram mais credibilidade junto à imprensa, à base e aos eleitores indecisos.",
      },
      {
        title: "O eleitor mudou — e os dados mostram como.",
        text: "Comportamento, prioridades e canais de informação do eleitorado se transformaram. Ler esses sinais nos dados é o que separa quem antecipa a disputa de quem apenas reage.",
      },
      {
        title: "Prestação de contas também é estratégia.",
        text: "Monitorar indicadores do município durante o mandato gera material concreto para comunicação com o eleitor e diferenciação na próxima disputa.",
      },
    ],
    callout: {
      title: "🔒 Confidencialidade garantida",
      text: "Todos os diagnósticos eleitorais são desenvolvidos com exclusividade para o cliente. Dados estratégicos não são compartilhados com outros candidatos ou partidos.",
    },
    productsTitle: "Produtos para agentes políticos",
    products: [
      {
        title: "Painel Eleitoral Estratégico",
        description:
          "Dossiê completo: perfil do eleitorado por zona, personas eleitorais, mapa de territórios prioritários, plano de mensagem e roadmap de campanha.",
        badge: "Produto exclusivo A&B",
      },
      {
        title: "Diagnóstico Socioeconômico do Território",
        description:
          "Emprego, renda, violência e estrutura familiar por região. Dados que sustentam propostas legislativas e de campanha com evidência técnica irrefutável.",
        badge: "Case disponível para demonstração",
      },
      {
        title: "Monitoramento de Indicadores de Mandato",
        description:
          "Acompanhamento periódico dos principais indicadores municipais para subsidiar discursos, projetos e comunicação com o eleitor ao longo do mandato.",
        badge: "Assinatura trimestral",
      },
      {
        title: "Análise de Perfil do Eleitorado",
        description:
          "Cruzamento de dados demográficos, socioeconômicos e eleitorais por seção e zona. Mapa de oportunidades e riscos territoriais para planejamento de campanha.",
        badge: "Sob demanda",
      },
    ],
    cta: {
      title: "Quer ver um exemplo de dossiê eleitoral?",
      subtitle: "Solicite uma apresentação reservada.",
    },
    pdf: "/materiais/agente-politico.pdf",
    accent: {
      text: "text-purple",
      bg: "bg-purple",
      softBg: "bg-purple/10",
      border: "border-purple",
    },
    metaDescription:
      "Inteligência eleitoral e estratégia legislativa baseada em dados: perfil do eleitorado, território e monitoramento de mandato com confidencialidade.",
  },
  {
    slug: "empreendedor",
    emoji: "🏢",
    label: "Empreendedor",
    value: "empreendedor",
    eyebrow: "Análise de mercado e inteligência econômica para negócios locais",
    titlePre: "Abrir ou expandir sem dados é apostar no ",
    titleHighlight: "escuro.",
    intro:
      "A A&B Consultoria organiza e interpreta dados públicos do seu mercado local — emprego, concorrência, demanda e tendências setoriais — para que você invista com mais segurança e menos risco.",
    cardDescription:
      "Dados públicos do seu mercado local — concorrência, demanda e tendências setoriais — interpretados para investir com mais segurança.",
    stats: [
      { value: "78.187", label: "empresas ativas em Contagem (2020)" },
      { value: "14.742", label: "novas empresas abertas em 2020" },
      { value: "5.210", label: "empresas extintas no mesmo período" },
      {
        value: "13",
        label: "ramos do setor de serviços mapeados com dados da RAIS",
      },
    ],
    insightsTitle: "O que os dados do mercado local revelam",
    insights: [
      {
        title: "28% das empresas extintas fecham no primeiro ano.",
        text: "A maioria não tinha estudo de mercado antes de abrir. O risco de entrar em setor saturado ou com demanda insuficiente é mensurável antes da decisão.",
      },
      {
        title: "TI emprega menos de 2% da força de trabalho formal em Contagem.",
        text: "Para uma das maiores cidades industriais do estado, isso sinaliza lacuna real de mercado — dado acionável para quem está avaliando entrar no setor.",
      },
      {
        title:
          "Serviços concentra 45% do emprego formal, mas depende da Administração Pública.",
        text: "Fragilidade estrutural que define quais nichos dentro do setor têm crescimento sustentável e quais têm risco sistêmico.",
      },
      {
        title: "Renda e escolaridade da população local definem a demanda real.",
        text: "Não a percepção — os dados. Onde seu cliente está, quanto ele ganha e como ele consome são informações públicas que poucas empresas consultam antes de investir.",
      },
    ],
    callout: {
      title: "✓ Dados públicos, análise exclusiva",
      text: "Usamos bases públicas oficiais — mas o valor está na curadoria, cruzamento e interpretação estratégica que transformamos em diagnóstico aplicável ao seu negócio.",
    },
    productsTitle: "O que entregamos para você",
    products: [
      {
        title: "Análise Setorial Estratégica",
        description:
          "Diagnóstico completo do seu setor de atuação: concentração de empresas, empregos formais, crescimento histórico e lacunas de mercado. Base para decidir onde e como competir.",
        badge: "Case disponível para demonstração",
      },
      {
        title: "Estudo de Viabilidade Local",
        description:
          "Análise do potencial de mercado para abertura ou expansão, com dados de renda, perfil demográfico, atividade econômica e concorrência na região de interesse.",
        badge: "Sob demanda",
      },
      {
        title: "Mapa da Concorrência",
        description:
          "Levantamento e análise dos concorrentes na área de atuação. Identifica saturação, oportunidades e posicionamento estratégico ideal.",
        badge: "Sob demanda",
      },
    ],
    cta: {
      title: "Quer ver uma análise do seu setor?",
      subtitle: "Primeira conversa sem compromisso.",
    },
    pdf: "/materiais/empreendedor.pdf",
    accent: {
      text: "text-teal",
      bg: "bg-teal",
      softBg: "bg-teal/10",
      border: "border-teal",
    },
    metaDescription:
      "Análise de mercado e inteligência econômica para negócios locais: análise setorial, viabilidade e mapa da concorrência com dados públicos oficiais.",
  },
];

export function getSegment(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}
