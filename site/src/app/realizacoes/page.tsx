import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CaseCard from "@/components/CaseCard";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Realizações · A&B Consultoria",
  description:
    "Cases reais: Observatório da ACISMO, Mapa do Emprego de Contagem, Painel de Indicadores e mais.",
};

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
  {
    local: "Contagem, MG e São Miguel do Oeste, SC",
    cliente: "Dois municípios",
    titulo: "Painel Estratégico de Indicadores",
    descricao:
      "Estruturação de painéis de indicadores socioeconômicos para dois municípios, permitindo monitoramento contínuo e embasamento de decisões.",
  },
];

export default function Realizacoes() {
  return (
    <>
      <section className="pt-32 pb-10 bg-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Realizações
            </h1>
            <p className="text-lg text-sub leading-relaxed">
              Cada projeto é único. Veja como transformamos dados em impacto real
              para nossos clientes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <CaseCard {...c} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tem um desafio semelhante?"
        subtitle="Conte-nos sobre sua necessidade e descubra como podemos ajudar."
        ctaLabel="Fale com a gente"
        ctaHref="/contato"
        bg="bg-navy"
      />
    </>
  );
}
