import type { Metadata } from "next";
import SegmentLanding from "@/components/SegmentLanding";
import { getSegment } from "../segments";

const segment = getSegment("empreendedor")!;

const url = `https://www.abconsultoriaestrategica.com.br/para-quem-atendemos/${segment.slug}`;

export const metadata: Metadata = {
  title: `Soluções para ${segment.label}`,
  description: segment.metaDescription,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "A&B Consultoria Estratégica",
    title: `Soluções para ${segment.label} · A&B Consultoria`,
    description: segment.metaDescription,
    url,
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
      item: "https://www.abconsultoriaestrategica.com.br/para-quem-atendemos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: segment.label,
      item: `https://www.abconsultoriaestrategica.com.br/para-quem-atendemos/${segment.slug}`,
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
