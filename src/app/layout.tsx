import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://abconsultoriaestrategica.com.br"),
  title: {
    default: "A&B Consultoria Estratégica",
    template: "%s · A&B Consultoria",
  },
  description:
    "Consultoria econômica especializada em diagnósticos socioeconômicos, estudos setoriais e inteligência estratégica para governos e empresas.",
  keywords: [
    "consultoria econômica",
    "diagnóstico socioeconômico",
    "observatório econômico",
    "inteligência estratégica",
    "prefeitura",
    "desenvolvimento local",
    "análise de viabilidade",
    "planejamento estratégico",
  ],
  authors: [{ name: "A&B Consultoria Estratégica" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "A&B Consultoria Estratégica",
    title: "A&B Consultoria Estratégica",
    description:
      "Consultoria econômica especializada em diagnósticos socioeconômicos, estudos setoriais e inteligência estratégica para governos e empresas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A&B Consultoria Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&B Consultoria Estratégica",
    description:
      "Consultoria econômica especializada em diagnósticos socioeconômicos, estudos setoriais e inteligência estratégica para governos e empresas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://abconsultoriaestrategica.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G73KBFZ02B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G73KBFZ02B');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
