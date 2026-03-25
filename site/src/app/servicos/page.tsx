import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SegmentTabs from "@/components/SegmentTabs";
import ServiceCard from "@/components/ServiceCard";
import IcpTags from "@/components/IcpTags";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços · A&B Consultoria",
  description:
    "Diagnóstico socioeconômico municipal, observatório econômico, mapa de oportunidades e muito mais.",
};

function GovernosContent() {
  return (
    <div>
      <p className="text-sm font-semibold text-navy mb-3">Recomendado para:</p>
      <IcpTags
        tags={[
          "Prefeituras",
          "Secretarias municipais",
          "Câmaras municipais",
          "Agentes políticos",
          "Consórcios intermunicipais",
          "Associações Comerciais",
          "Organizações da Sociedade Civil",
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <ServiceCard
          title="Diagnóstico Socioeconômico Municipal"
          description="Relatório estratégico com panorama completo da realidade econômica e social do município: população, renda, emprego, atividade econômica, educação, infraestrutura e dinâmica territorial."
          bullets={[
            "Identificação dos principais desafios e oportunidades locais",
            "Dados interpretados para gestores e lideranças",
            "Entrega em relatório estratégico estruturado",
          ]}
        />
        <ServiceCard
          title="Relatório de Inteligência Econômica Municipal"
          description="Análise aprofundada da estrutura econômica local para orientar políticas de desenvolvimento, atração de investimentos e fortalecimento do empreendedorismo."
          bullets={[
            "Setores que mais geram emprego",
            "Atividades com maior potencial de crescimento",
            "Vocações econômicas do município",
            "Tendências do ambiente de negócios",
          ]}
        />
        <ServiceCard
          title="Painel de Indicadores Estratégicos"
          description="Sistema de indicadores socioeconômicos para acompanhar a evolução do município ao longo do tempo."
          bullets={[
            "Economia, emprego e renda",
            "Educação e população",
            "Atividade empresarial e desenvolvimento local",
          ]}
        />
        <ServiceCard
          title="Observatório Socioeconômico Municipal"
          description="Sistema permanente e organizado de informações para subsidiar políticas públicas, monitorar a economia local e apoiar decisões estratégicas."
          bullets={[
            "Expansão e difusão de informações socioeconômicas",
            "Indicadores para políticas públicas e ações empresariais",
            "Análises de tendências e estruturas produtivas",
            "Suporte para atração de investimentos e redução de desigualdades",
          ]}
        />
      </div>
      <CtaInline />
    </div>
  );
}

function NegociosContent() {
  return (
    <div>
      <p className="text-sm font-semibold text-navy mb-3">Recomendado para:</p>
      <IcpTags
        tags={[
          "Empresas",
          "Empreendedores",
          "Associações Comerciais",
          "Organizações em geral",
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <ServiceCard
          title="Mapa de Oportunidades de Negócios"
          description="Estudo estratégico para identificar setores com maior potencial de crescimento, revelando oportunidades reais para novos negócios e investimentos."
          bullets={[
            "Perfil de renda e consumo da população",
            "Crescimento econômico e densidade empresarial",
            "Lacunas de mercado e setores subutilizados",
          ]}
        />
        <ServiceCard
          title="Estudo de Ambiente Econômico para Investimentos"
          description="Relatório para empresas e investidores que precisam compreender o potencial econômico de uma região antes de decidir onde e como investir."
          bullets={[
            "Perfil econômico local e infraestrutura",
            "Mercado consumidor e dinâmica empresarial",
            "Oportunidades e riscos de investimento",
          ]}
        />
        <ServiceCard
          title="Planejamento Estratégico"
          description="Compreensão profunda do ambiente organizacional para alcançar resultados tangíveis, aprimorar processos e crescer com sustentabilidade."
          bullets={[
            "Diagnóstico organizacional e de mercado",
            "Definição de objetivos e indicadores de resultado",
            "Plano de ação estruturado e monitorável",
          ]}
        />
        <ServiceCard
          title="Análise de Viabilidade Econômica"
          description="Avaliação técnica para orientar decisões de investimento, expansão ou lançamento, reduzindo riscos e otimizando recursos."
        />
        <ServiceCard
          title="Estudos de Impacto Econômico de Projetos"
          description="Análise dos efeitos diretos e indiretos da implementação de projetos no ambiente econômico local."
        />
        <ServiceCard
          title="Apoio Técnico para Captação de Recursos"
          description="Elaboração de projetos técnicos, mapeamento de editais e estratégias para captação — inclusive fontes internacionais."
        />
        <ServiceCard
          title="Elaboração de Estudos Setoriais e Temáticos"
          description="Análise de cenários e transformação de dados em diagnósticos precisos para orientar intervenções necessárias."
        />
      </div>
      <CtaInline />
    </div>
  );
}

function CtaInline() {
  return (
    <div className="mt-12 bg-mist rounded-2xl p-8 text-center">
      <p className="text-text mb-4">
        Não encontrou o que precisa? Oferecemos serviços personalizados conforme
        a especificidade de cada cliente.
      </p>
      <Link
        href="/contato"
        className="inline-block bg-sky text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue transition-colors"
      >
        Fale com a gente
      </Link>
    </div>
  );
}

export default function Servicos() {
  return (
    <>
      {/* Introdução */}
      <section className="pt-32 pb-10 bg-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Serviços
            </h1>
            <p className="text-lg text-sub leading-relaxed">
              Não entregamos apenas relatórios — estruturamos o caminho para o
              crescimento do seu município, empresa ou instituição.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SegmentTabs
            tabs={[
              {
                label: "🏛 Inteligência para Governos",
                content: <GovernosContent />,
              },
              {
                label: "🏢 Inteligência para Negócios",
                content: <NegociosContent />,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
