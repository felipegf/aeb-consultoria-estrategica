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
                nome="Alessandra Angelini Gerhardt"
                credencial="Economista · Pós-graduada em Administração Pública"
                bio="Mais de 30 anos de experiência nas áreas de planejamento, desenvolvimento econômico e social, elaboração de estudos e projetos de viabilidade econômica e diagnósticos estratégicos para o setor público e privado."
                especialidade="Especialidade — Inteligência Territorial"
                initials="AG"
                avatar="/alessandra.png"
                gradientFrom="from-sky"
                gradientTo="to-blue"
                borderColor="border-sky"
                icon={
                  <svg className="w-5 h-5 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                }
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ProfileCard
                nome="Andréa Barbosa"
                credencial="Gestora da Informação"
                bio="Mais de 18 anos de atuação na gestão da informação, com experiência na transformação de bases complexas em inteligência aplicada para tomada de decisão. Possui trajetória na estruturação e qualificação de dados estratégicos, com foco na geração de insights e no suporte a políticas públicas e decisões de negócios."
                especialidade="Especialidade — Curadoria de Dados Estratégicos"
                initials="AB"
                avatar="/andrea.png"
                gradientFrom="from-teal"
                gradientTo="to-sky"
                borderColor="border-teal"
                icon={
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                }
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
              <StatCard value="+48 anos" label="de experiência combinada" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCard value="2 estados" label="SC e MG" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCard value="8+ projetos" label="entregues com impacto real" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
