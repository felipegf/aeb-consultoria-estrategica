import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/realizacoes", label: "Realizações" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & tagline */}
          <div>
            <span className="text-2xl font-bold">A&B</span>
            <p className="text-white/70 text-sm mt-2">
              Consultoria Estratégica
            </p>
            <p className="text-white/50 text-sm mt-4">
              Dados que orientam. Decisões que transformam.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">
              Contato
            </h4>
            <p className="text-sm text-white/70">
              abconsultoriaestrategica@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-xs text-white/40 max-w-3xl">
            Seus dados pessoais são tratados pela A&B Consultoria Estratégica
            conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
            sendo utilizados exclusivamente para responder à sua solicitação.
          </p>
          <p className="text-xs text-white/40 mt-4">
            © 2025 A&B Consultoria Estratégica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
