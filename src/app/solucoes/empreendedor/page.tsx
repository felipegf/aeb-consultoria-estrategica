import type { Metadata } from "next";
import SegmentLanding from "@/components/SegmentLanding";
import { getSegment } from "../segments";

const segment = getSegment("empreendedor")!;

export const metadata: Metadata = {
  title: `Soluções para ${segment.label}`,
  description: segment.metaDescription,
  alternates: {
    canonical: `https://www.abconsultoriaestrategica.com.br/solucoes/${segment.slug}`,
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
    {
      "@type": "ListItem",
      position: 3,
      name: segment.label,
      item: `https://www.abconsultoriaestrategica.com.br/solucoes/${segment.slug}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SegmentLanding segment={segment} />
    </>
  );
}
