import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import CaseCard from "@/components/CaseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";

const cases = [
  {
    local: "São Miguel do Oeste, SC",
    cliente: "ACISMO — Associação Empresarial",
    titulo: "Observatório Econômico",
    descricao:
      "Criação do Observatório Econômico para a Associação Empresarial, estruturando um sistema permanente de monitoramento da economia local.",
  },
  {
    local: "Contagem, MG",
    cliente: "Prefeitura Municipal",
    titulo: "Mapa da Estrutura Produtiva",
    descricao:
      "Levantamento das potencialidades econômicas por regional administrativa, subsidiando o planejamento de desenvolvimento econômico do município.",
  },
  {
    local: "Contagem, MG",
    cliente: "Prefeitura Municipal",
    titulo: "Mapa do Emprego",
    descricao:
      "Análise detalhada da dinâmica de emprego e renda, com identificação de setores geradores e tendências do mercado de trabalho local.",
  },
  {
    local: "Estudo Temático",
    cliente: "Políticas Públicas",
    titulo: "Desigualdades de Gênero e Violência contra a Mulher",
    descricao:
      "Estudo setorial para subsidiar políticas públicas e intervenções, com análise de indicadores e identificação de lacunas de atuação.",
  },
];

const checkItems = [
  "Compreender a realidade econômica e social com clareza",
  "Identificar oportunidades de desenvolvimento e mercado",
  "Antecipar tendências e mitigar riscos antes de agir",
  "Planejar políticas públicas com base técnica sólida",
  "Orientar investimentos com maior segurança e eficiência",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy to-blue min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-sky mb-6">
              Inteligência Estratégica para Negócios
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              Dados que orientam.
              <br />
              Decisões que transformam.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              Consultoria econômica especializada para gestores públicos,
              empresas e investidores que precisam de análises confiáveis para
              decidir com segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/servicos"
                className="bg-sky text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-sky/90 transition-colors text-center"
              >
                Conheça nossos serviços
              </Link>
              <Link
                href="/contato"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Fale com a gente
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="bg-mist py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Análise econômica"
                description="Interpretação de indicadores socioeconômicos e setoriais com rigor técnico e clareza."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                }
                title="Curadoria de dados"
                description="Organização e sistematização de informações dispersas em diagnósticos aplicáveis."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <FeatureCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
                title="Visão estratégica"
                description="Dados transformados em conhecimento útil para decisões concretas e investimentos seguros."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Realizações preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="O que já entregamos"
              title="Resultados concretos para municípios e organizações"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {cases.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <CaseCard {...c} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/realizacoes"
              className="text-blue font-semibold text-sm hover:underline"
            >
              Ver todas as realizações →
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-mist py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="O que dizem nossos clientes"
              title="Quem confia na A&B recomenda"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal>
              <TestimonialCard
                quote="Trabalho excelente e de alta qualidade. As novas oportunidades identificadas foram cruciais para a expansão da empresa."
                author="Granvia Engenharia"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                quote="Agradeço o atendimento diferenciado e o maravilhoso trabalho! Não imaginava que um pequeno empreendedor como eu tinha tanto espaço para crescer. Vocês fizeram a diferença no meu negócio!"
                author="MeM Açaí e Sorveteria"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TestimonialCard
                quote="Equipe eficiente e comprometida, entregou tudo dentro do prazo e superou as expectativas."
                author="Associação Empresarial de São Miguel do Oeste — ACISMO"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <TestimonialCard
                quote="Apresentamos desafios e vocês entregaram soluções. Muito obrigado!!!"
                author="GAIA — Engenharia e Treinamentos"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Por que A&B */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy text-center">
                Decisões mais seguras começam com informação qualificada
              </h2>
              <p className="mt-6 text-lg text-sub text-center leading-relaxed">
                Gestores que utilizam dados organizados e interpretados de forma
                estratégica conseguem:
              </p>
              <ul className="mt-8 space-y-4">
                {checkItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <CtaBand
        title="Pronto para transformar dados em vantagem estratégica?"
        subtitle="Conte-nos sobre sua necessidade e descubra como podemos ajudar."
        ctaLabel="Fale com a gente"
        ctaHref="/contato"
        bg="bg-navy"
      />
    </>
  );
}
