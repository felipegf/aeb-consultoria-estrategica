import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ProfileCard from "@/components/ProfileCard";
import StatCard from "@/components/StatCard";

export const metadata: Metadata = {
  title: "Quem Somos · A&B Consultoria",
  description:
    "Conheça as consultoras da A&B: mais de 30 anos de experiência em análise econômica e gestão da informação.",
};

export default function QuemSomos() {
  return (
    <>
      {/* Abertura */}
      <section className="pt-32 pb-20 bg-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Quem Somos
            </h1>
            <p className="text-lg text-sub leading-relaxed mb-4">
              Somos duas consultoras com trajetórias complementares e um objetivo
              em comum: transformar dados em decisões mais inteligentes para
              governos, empresas e instituições.
            </p>
            <p className="text-lg text-sub leading-relaxed">
              Nossa parceria reúne Economia e Gestão da Informação — combinação
              que nos permite enxergar tanto os números quanto o contexto em que
              eles existem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cards das consultoras */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <ProfileCard
                nome="[Nome da Consultora A]"
                credencial="Economista · CRE-XX 000000"
                bio="Mais de [X] anos de experiência em análise econômica, estudos de viabilidade e elaboração de diagnósticos para o setor público e privado."
                especialidade="Especialidade — Inteligência Territorial"
                borderColor="border-sky"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ProfileCard
                nome="[Nome da Consultora B]"
                credencial="Gestora da Informação · [Registro]"
                bio="Mais de [X] anos dedicados à curadoria e sistematização de dados estratégicos, com atuação junto a associações, observatórios e gestão pública."
                especialidade="Especialidade — Curadoria de Dados Estratégicos"
                borderColor="border-teal"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="bg-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-6">
              Nossa história
            </h2>
            <p className="text-lg text-sub leading-relaxed">
              A A&B nasceu da convergência entre duas visões complementares:
              a análise econômica e a gestão estratégica da informação. Unidas
              pela convicção de que dados bem organizados e interpretados podem
              transformar realidades, nossas fundadoras criaram uma consultoria
              que entrega mais do que relatórios — entrega clareza para quem
              precisa decidir. O nome A&B representa exatamente isso: duas
              perspectivas, uma entrega.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Números */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ScrollReveal>
              <StatCard value="+30 anos" label="de experiência combinada" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCard value="2 estados" label="SC e MG" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCard value="5+ projetos" label="entregues com impacto real" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
