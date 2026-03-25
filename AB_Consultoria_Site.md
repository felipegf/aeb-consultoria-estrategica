# A&B Consultoria Estratégica — Site Briefing

> Documento de referência para desenvolvimento com Claude Code.  
> Paleta, estrutura, conteúdo e componentes por página.

---

## Stack sugerida

- **Framework:** Next.js 14 (App Router)
- **Estilo:** Tailwind CSS
- **Formulário:** React Hook Form + Resend (e-mail)
- **Animações:** Framer Motion (scroll reveal leve)
- **Deploy:** Vercel

---

## Paleta de cores

```css
/* Adicionar em tailwind.config.js → extend.colors */
navy:    '#0D2B5C'   /* primário — fundos hero, headers */
blue:    '#1A5FA8'   /* secundário — botões, links */
sky:     '#2E86AB'   /* accent — bordas, destaques */
teal:    '#1B998B'   /* sucesso, checkmarks, cases */
offwhite:'#F8FAFB'   /* fundo de cards */
mist:    '#F0F7FF'   /* fundo de seções alternadas */
text:    '#2C3E50'   /* corpo de texto */
sub:     '#5D7290'   /* texto secundário / muted */
```

---

## Tipografia

```css
/* Font: Inter (Google Fonts) */
--heading: font-bold tracking-tight text-navy
--subheading: font-medium text-blue
--body: text-base text-text leading-relaxed
--muted: text-sm text-sub
--eyebrow: text-xs font-bold uppercase tracking-widest text-sky
```

---

## Estrutura de rotas

```
/                  → Home
/quem-somos        → Quem Somos
/servicos          → Serviços (tabs: Governos | Negócios)
/realizacoes       → Realizações
/contato           → Fale Conosco
```

---

## Componentes globais

### `<Header />`
- Logo "A&B" (texto bold navy) + tagline "Consultoria Estratégica"
- Nav: Home · Quem Somos · Serviços · Realizações · Contato
- Botão CTA: "Fale com a gente" (bg-sky, text-white)
- Sticky com backdrop-blur ao fazer scroll
- Mobile: hamburguer menu

### `<Footer />`
- Logo + tagline
- Links de navegação
- E-mail: abconsultoriaestrategica@gmail.com
- Texto LGPD resumido
- Copyright: © 2025 A&B Consultoria Estratégica

---

## Página 1 — Home (`/`)

### Bloco 1 — Hero
```
bg: navy (gradiente sutil para blue)
height: 100vh

Eyebrow: "Inteligência Estratégica para Negócios"
H1: "Dados que orientam.\nDecisões que transformam."
Subtitle: "Consultoria econômica especializada para gestores públicos,
           empresas e investidores que precisam de análises confiáveis
           para decidir com segurança."

CTA primário:  [Conheça nossos serviços]  → /servicos
CTA secundário: Fale com a gente          → /contato
```

### Bloco 2 — 3 Pilares
```
bg: mist
layout: 3 cards em grid

Card 1 — Análise econômica
  Interpretação de indicadores socioeconômicos e setoriais
  com rigor técnico e clareza.

Card 2 — Curadoria de dados
  Organização e sistematização de informações dispersas
  em diagnósticos aplicáveis.

Card 3 — Visão estratégica
  Dados transformados em conhecimento útil para decisões
  concretas e investimentos seguros.
```

### Bloco 3 — Realizações (preview)
```
bg: white
Eyebrow: "O que já entregamos"
H2: "Resultados concretos para municípios e organizações"

4 case cards em grid (2×2)
→ Exibir apenas os 4 primeiros cases
→ CTA: [Ver todas as realizações] → /realizacoes
```

### Bloco 4 — Por que A&B
```
bg: offwhite
H2: "Decisões mais seguras começam com informação qualificada"
Body: "Gestores que utilizam dados organizados e interpretados
       de forma estratégica conseguem:"

Checklist (ícone teal):
  ✔ Compreender a realidade econômica e social com clareza
  ✔ Identificar oportunidades de desenvolvimento e mercado
  ✔ Antecipar tendências e mitigar riscos antes de agir
  ✔ Planejar políticas públicas com base técnica sólida
  ✔ Orientar investimentos com maior segurança e eficiência
```

### Bloco 5 — CTA Final
```
bg: sky (ou navy)
H2: "Pronto para transformar dados em vantagem estratégica?"
Body: "Conte-nos sobre sua necessidade e descubra como podemos ajudar."
CTA: [Fale com a gente] → /contato
```

---

## Página 2 — Quem Somos (`/quem-somos`)

### Abertura
```
H1: "Quem Somos"
Body: "Somos duas consultoras com trajetórias complementares e um
       objetivo em comum: transformar dados em decisões mais
       inteligentes para governos, empresas e instituições."
Body: "Nossa parceria reúne Economia e Gestão da Informação —
       combinação que nos permite enxergar tanto os números quanto
       o contexto em que eles existem."
```

### Cards das consultoras
```
layout: 2 cards side by side (border-top colorida por consultora)

Card A:
  Foto: [placeholder circular]
  Nome: [Nome da Consultora A]
  Credencial: Economista · CRE-XX 000000
  Bio: "Mais de [X] anos de experiência em análise econômica,
        estudos de viabilidade e elaboração de diagnósticos
        para o setor público e privado."
  Tag: Especialidade — Inteligência Territorial

Card B:
  Foto: [placeholder circular]
  Nome: [Nome da Consultora B]
  Credencial: Gestora da Informação · [Registro]
  Bio: "Mais de [X] anos dedicados à curadoria e sistematização
        de dados estratégicos, com atuação junto a associações,
        observatórios e gestão pública."
  Tag: Especialidade — Curadoria de Dados Estratégicos
```

> **TODO:** Substituir placeholders por fotos e dados reais antes do deploy.

### História
```
H2: "Nossa história"
Body: [Espaço para narrativa de origem — como surgiu a parceria,
       o que motivou as fundadoras, quando foi criada a A&B.
       O nome A&B representa exatamente isso: duas perspectivas,
       uma entrega.]
```

### Números
```
layout: 3 stat cards (bg-navy, texto branco)

+30 anos   → de experiência combinada
2 estados  → SC e MG
5+ projetos → entregues com impacto real
```

---

## Página 3 — Serviços (`/servicos`)

### Introdução
```
H1: "Serviços"
Body: "Não entregamos apenas relatórios — estruturamos o caminho
       para o crescimento do seu município, empresa ou instituição."
```

### Tabs de segmento
```
[🏛 Inteligência para Governos]  [🏢 Inteligência para Negócios]

Estado ativo: tab com bg-navy, texto branco
Estado inativo: borda navy, texto navy
```

---

### Tab: Inteligência para Governos

**Recomendado para:**
Prefeituras · Secretarias municipais · Câmaras municipais · Agentes políticos · Consórcios intermunicipais · Associações Comerciais · Organizações da Sociedade Civil

---

#### Diagnóstico Socioeconômico Municipal
Relatório estratégico com panorama completo da realidade econômica e social do município: população, renda, emprego, atividade econômica, educação, infraestrutura e dinâmica territorial.

- Identificação dos principais desafios e oportunidades locais
- Dados interpretados para gestores e lideranças
- Entrega em relatório estratégico estruturado

---

#### Relatório de Inteligência Econômica Municipal
Análise aprofundada da estrutura econômica local para orientar políticas de desenvolvimento, atração de investimentos e fortalecimento do empreendedorismo.

- Setores que mais geram emprego
- Atividades com maior potencial de crescimento
- Vocações econômicas do município
- Tendências do ambiente de negócios

---

#### Painel de Indicadores Estratégicos
Sistema de indicadores socioeconômicos para acompanhar a evolução do município ao longo do tempo.

- Economia, emprego e renda
- Educação e população
- Atividade empresarial e desenvolvimento local

---

#### Observatório Socioeconômico Municipal
Sistema permanente e organizado de informações para subsidiar políticas públicas, monitorar a economia local e apoiar decisões estratégicas.

- Expansão e difusão de informações socioeconômicas
- Indicadores para políticas públicas e ações empresariais
- Análises de tendências e estruturas produtivas
- Suporte para atração de investimentos e redução de desigualdades

---

### Tab: Inteligência para Negócios

**Recomendado para:**
Empresas · Empreendedores · Associações Comerciais · Organizações em geral

---

#### Mapa de Oportunidades de Negócios
Estudo estratégico para identificar setores com maior potencial de crescimento, revelando oportunidades reais para novos negócios e investimentos.

- Perfil de renda e consumo da população
- Crescimento econômico e densidade empresarial
- Lacunas de mercado e setores subutilizados

---

#### Estudo de Ambiente Econômico para Investimentos
Relatório para empresas e investidores que precisam compreender o potencial econômico de uma região antes de decidir onde e como investir.

- Perfil econômico local e infraestrutura
- Mercado consumidor e dinâmica empresarial
- Oportunidades e riscos de investimento

---

#### Planejamento Estratégico
Compreensão profunda do ambiente organizacional para alcançar resultados tangíveis, aprimorar processos e crescer com sustentabilidade.

- Diagnóstico organizacional e de mercado
- Definição de objetivos e indicadores de resultado
- Plano de ação estruturado e monitorável

---

#### Análise de Viabilidade Econômica
Avaliação técnica para orientar decisões de investimento, expansão ou lançamento, reduzindo riscos e otimizando recursos.

---

#### Estudos de Impacto Econômico de Projetos
Análise dos efeitos diretos e indiretos da implementação de projetos no ambiente econômico local.

---

#### Apoio Técnico para Captação de Recursos
Elaboração de projetos técnicos, mapeamento de editais e estratégias para captação — inclusive fontes internacionais.

---

#### Elaboração de Estudos Setoriais e Temáticos
Análise de cenários e transformação de dados em diagnósticos precisos para orientar intervenções necessárias.

---

### CTA ao final de cada tab
```
"Não encontrou o que precisa? Oferecemos serviços personalizados
 conforme a especificidade de cada cliente."
→ [Fale com a gente]
```

---

## Página 4 — Realizações (`/realizacoes`)

```
H1: "Realizações"
Subtitle: "Cada projeto é único. Veja como transformamos dados
           em impacto real para nossos clientes."
```

### Cases

```yaml
- local: São Miguel do Oeste, SC
  cliente: ACISMO — Associação Empresarial
  titulo: Observatório Econômico
  descricao: >
    Criação do Observatório Econômico para a Associação Empresarial,
    estruturando um sistema permanente de monitoramento da economia local.

- local: Contagem, MG
  cliente: Prefeitura Municipal
  titulo: Mapa da Estrutura Produtiva
  descricao: >
    Levantamento das potencialidades econômicas por regional administrativa,
    subsidiando o planejamento de desenvolvimento econômico do município.

- local: Contagem, MG
  cliente: Prefeitura Municipal
  titulo: Mapa do Emprego
  descricao: >
    Análise detalhada da dinâmica de emprego e renda, com identificação
    de setores geradores e tendências do mercado de trabalho local.

- local: Estudo Temático
  cliente: Políticas Públicas
  titulo: Desigualdades de Gênero e Violência contra a Mulher
  descricao: >
    Estudo setorial para subsidiar políticas públicas e intervenções,
    com análise de indicadores e identificação de lacunas de atuação.

- local: Contagem, MG e São Miguel do Oeste, SC
  cliente: Dois municípios
  titulo: Painel Estratégico de Indicadores
  descricao: >
    Estruturação de painéis de indicadores socioeconômicos para dois
    municípios, permitindo monitoramento contínuo e embasamento de decisões.
```

---

## Página 5 — Fale Conosco (`/contato`)

### Texto de apresentação
```
H1: "Fale Conosco"
Body: "Cada necessidade é única. Conte-nos sobre o seu desafio
       e retornaremos em até 24 horas úteis."
Body: "Atendemos prefeituras, secretarias, empresas, associações
       e instituições em todo o Brasil."
```

### Formulário
```
Campos obrigatórios marcados com *

Nome completo *              → text input
E-mail *                     → email input
Telefone / WhatsApp *        → tel input (com DDD)
Município / Instituição / Empresa → text input (opcional)
Segmento de interesse        → select:
                               [ Inteligência para Governos ]
                               [ Inteligência para Negócios ]
                               [ Outro ]
Como podemos ajudar? *       → textarea (min 4 linhas)

Botão: [Enviar mensagem]  → bg-sky, hover:bg-blue

Confirmação (toast ou inline):
"Recebemos sua mensagem! Retornaremos em até 24 horas úteis."
```

### Aviso LGPD
```
Fonte: text-xs text-sub
Posição: abaixo do botão de envio

"Ao enviar este formulário, você concorda com o tratamento dos
seus dados pessoais pela A&B Consultoria Estratégica, conforme
a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Seus dados
serão utilizados exclusivamente para responder à sua solicitação
e não serão compartilhados com terceiros. Para exercer seus direitos
de acesso, correção ou exclusão, entre em contato pelo e-mail
[inserir e-mail]."
```

> **Atenção:** Não expor o e-mail institucional como texto visível no site.

---

## Componentes reutilizáveis

```
<HeroSection />          → bloco hero com headline, subtitle e CTAs
<FeatureCard />          → card de pilar/feature com ícone e descrição
<ServiceCard />          → card de serviço com título, descrição e bullets
<CaseCard />             → card de case com localização, cliente e entrega
<ProfileCard />          → card de consultora com foto, nome e bio
<StatCard />             → número de destaque em bg-navy
<SegmentTabs />          → tabs Governos / Negócios
<IcpTags />              → grid de tags de perfil de cliente
<CtaBand />              → faixa CTA com bg colorido
<SectionHeader />        → eyebrow + H2 + subtitle opcional
<ContactForm />          → formulário com validação e LGPD
```

---

## SEO — meta tags por página

| Página | Title | Description |
|--------|-------|-------------|
| Home | A&B Consultoria Estratégica | Consultoria econômica especializada em diagnósticos socioeconômicos, estudos setoriais e inteligência estratégica para governos e empresas. |
| Quem Somos | Quem Somos · A&B Consultoria | Conheça as consultoras da A&B: mais de 30 anos de experiência em análise econômica e gestão da informação. |
| Serviços | Serviços · A&B Consultoria | Diagnóstico socioeconômico municipal, observatório econômico, mapa de oportunidades e muito mais. |
| Realizações | Realizações · A&B Consultoria | Cases reais: Observatório da ACISMO, Mapa do Emprego de Contagem, Painel de Indicadores e mais. |
| Contato | Fale Conosco · A&B Consultoria | Entre em contato com a A&B Consultoria Estratégica. Retorno em até 24 horas úteis. |

---

## Pendências antes do deploy

- [ ] Nomes reais das consultoras
- [ ] Fotos profissionais (formato quadrado ou circular)
- [ ] Registros profissionais (CRE e equivalente)
- [ ] Narrativa de origem da consultoria
- [ ] Depoimentos de clientes (mínimo 2 com nome e cargo)
- [ ] E-mail institucional para o formulário (configurar Resend ou similar)
- [ ] Domínio definido e contratado
- [ ] Política de privacidade completa (LGPD)
- [ ] Google Analytics ou equivalente

---

*A&B Consultoria Estratégica · abconsultoriaestrategica@gmail.com*
