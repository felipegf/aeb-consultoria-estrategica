import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";
import MaterialDownload from "@/components/MaterialDownload";
import type { Segment } from "@/app/solucoes/segments";

export default function SegmentLanding({ segment }: { segment: Segment }) {
  const { accent } = segment;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-blue pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span
              className={`inline-block ${accent.bg} text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6`}
            >
              {segment.emoji} {segment.label}
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
              {segment.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {segment.titlePre}
              <span className={accent.text}>{segment.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              {segment.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Números */}
      <section className="bg-mist py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {segment.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p
                    className={`text-3xl md:text-4xl font-bold ${accent.text} mb-2`}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-sub leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-sub/80 mt-10 max-w-2xl mx-auto">
              * Os números são de um exemplo de trabalho já realizado. Para uma
              análise atualizada do seu caso, fale conosco.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy mb-8">
              {segment.insightsTitle}
            </h2>
            <ul className="space-y-6 max-w-3xl">
              {segment.insights.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`mt-2 h-2 w-2 rounded-full shrink-0 ${accent.bg}`}
                  />
                  <p className="text-text leading-relaxed">
                    <span className="font-bold text-navy">{it.title}</span>{" "}
                    {it.text}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className={`mt-10 rounded-2xl p-6 border-l-4 ${accent.border} ${accent.softBg} max-w-3xl`}
            >
              <p
                className={`text-sm font-bold uppercase tracking-wide ${accent.text} mb-2`}
              >
                {segment.callout.title}
              </p>
              <p className="text-sm text-text leading-relaxed">
                {segment.callout.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Produtos */}
      <section className="bg-offwhite py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy mb-10">
              {segment.productsTitle}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segment.products.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className={`h-1.5 ${accent.bg}`} />
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-navy mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-sub leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${accent.softBg} ${accent.text}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="text-blue font-semibold text-sm hover:underline"
            >
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* Download do material */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy mb-3">
              Baixe o material completo
            </h2>
            <p className="text-sub mb-8">
              Informe seu e-mail e receba o one-pager em PDF com todos os números,
              análises e produtos deste perfil.
            </p>
            <MaterialDownload segment={segment} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <CtaBand
        title={segment.cta.title}
        subtitle={segment.cta.subtitle}
        ctaLabel="Fale com a gente"
        ctaHref="/contato"
        bg="bg-navy"
      />
    </>
  );
}
