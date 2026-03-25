import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Fale Conosco · A&B Consultoria",
  description:
    "Entre em contato com a A&B Consultoria Estratégica. Retorno em até 24 horas úteis.",
};

export default function Contato() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Texto */}
            <ScrollReveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
                  Fale Conosco
                </h1>
                <p className="text-lg text-sub leading-relaxed mb-4">
                  Cada necessidade é única. Conte-nos sobre o seu desafio e
                  retornaremos em até 24 horas úteis.
                </p>
                <p className="text-lg text-sub leading-relaxed">
                  Atendemos prefeituras, secretarias, empresas, associações e
                  instituições em todo o Brasil.
                </p>
              </div>
            </ScrollReveal>

            {/* Formulário */}
            <ScrollReveal delay={0.15}>
              <div className="bg-offwhite rounded-2xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
