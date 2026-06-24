import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";
import { segments } from "./segments";

export const metadata: Metadata = {
  title: "Para quem atendemos",
  description:
    "Inteligência estratégica sob medida para Gestor Público, Agente Político e Empreendedor. Dados públicos transformados em decisão.",
  alternates: {
    canonical: "https://www.abconsultoriaestrategica.com.br/solucoes",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "A&B Consultoria Estratégica",
    title: "Para quem atendemos · A&B Consultoria",
    description:
      "Inteligência estratégica sob medida para Gestor Público, Agente Político e Empreendedor. Dados públicos transformados em decisão.",
    url: "https://www.abconsultoriaestrategica.com.br/solucoes",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.abconsultoriaestrategica.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Para quem atendemos",
      item: "https://www.abconsultoriaestrategica.com.br/solucoes",
    },
  ],
};

export default function Solucoes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Introdução */}
      <section className="pt-32 pb-10 bg-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Para quem atendemos
            </h1>
            <p className="text-lg text-sub leading-relaxed">
              Cada perfil decide com base em perguntas diferentes. Escolha o seu e
              veja como transformamos dados públicos em vantagem estratégica.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cards de perfil */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segments.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/solucoes/${s.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full"
                >
                  <div className={`h-1.5 ${s.accent.bg}`} />
                  <div className="p-8 flex flex-col h-full">
                    <span className="text-3xl mb-4">{s.emoji}</span>
                    <h2 className="text-xl font-bold text-navy mb-2">
                      {s.label}
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sub mb-4">
                      {s.eyebrow}
                    </p>
                    <p className="text-sm text-sub leading-relaxed mb-6">
                      {s.cardDescription}
                    </p>
                    <span
                      className={`mt-auto text-sm font-semibold ${s.accent.text} group-hover:underline`}
                    >
                      Ver soluções →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Não sabe por onde começar?"
        subtitle="Conte-nos sobre sua necessidade e indicamos o melhor caminho."
        ctaLabel="Fale com a gente"
        ctaHref="/contato"
        bg="bg-navy"
      />
    </>
  );
}
