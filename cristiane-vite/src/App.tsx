import { useEffect, useState } from "react";
import {
  Brain, Heart, Sparkles, Users, Baby, GraduationCap,
  CheckCircle2, MessageCircle, MapPin, Mail, Phone, Instagram, Clock, Calendar, Star, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-poltrona.png";
import aboutImg from "@/assets/sobre-consultorio.png";
import mentoriaImg from "@/assets/mentoria-notebook.png";
import finalImg from "@/assets/final-sofa.png";
import tdahImg from "@/assets/tdah.png";

const WHATSAPP = "5534993337055";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá Dra. Cristiane, gostaria de agendar uma consulta."
)}`;
const WA_MENTORIA = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá Dra. Cristiane, gostaria de solicitar supervisão ou mentoria."
)}`;
const INSTAGRAM_URL = "https://instagram.com/psic.cristianerodriguez";
const EMAIL = "cristiane.rrodriguez@gmail.com";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <TDAH />
      <Process />
      <Mentoria />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#tdah", label: "TDAH" },
    { href: "#mentoria", label: "Mentoria" },
    { href: "#processo", label: "Processo" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-2xl text-primary">Cristiane Rodrigues</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Psicóloga · Neuropsicóloga
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition"
        >
          <Calendar className="w-4 h-4" />
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-background" />
      {/* Formas orgânicas decorativas */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-secondary/60 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="absolute top-20 right-[-120px] w-[360px] h-[360px] rounded-full bg-accent/15 blur-3xl -z-10"
      />
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7 animate-float-up">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary/80 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Psicóloga · Neuropsicóloga
          </span>
          <p className="font-display text-3xl md:text-4xl text-primary leading-tight">
            Cristiane <span className="font-script">Rodrigues</span>
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.08] text-foreground mt-5">
            Seu bem-estar <em className="font-script text-primary">emocional</em> começa agora.
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary/80">
            Psicologia Clínica • Neuropsicologia • Supervisão e Mentoria
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Atendimento humanizado para crianças, adolescentes, adultos e profissionais da
            Psicologia que buscam clareza emocional, desenvolvimento pessoal e crescimento
            profissional.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 text-primary px-7 py-3.5 hover:bg-primary/5 transition"
            >
              Conhecer serviços <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full text-primary/80 px-3 py-3.5 hover:text-primary transition"
            >
              Sobre mim
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md">
            {/* moldura orgânica */}
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[3rem] -z-10 bg-secondary/70"
              style={{ borderRadius: "62% 38% 55% 45% / 50% 55% 45% 50%" }}
            />
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[2.5rem] -z-10 border border-primary/15"
            />
            <img
              src={heroImg}
              alt="Cristiane Rodrigues sentada em sua poltrona de atendimento"
              className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-[var(--shadow-soft)]"
              loading="eager"
            />
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-primary">+8 anos</div>
                <div className="text-xs text-muted-foreground">de prática clínica</div>
              </div>
            </div>
          </div>

          {/* CTA principal logo abaixo da foto */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-9 py-4 text-base font-medium hover:bg-[var(--primary-hover)] transition-all duration-300 shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            Agendar Consulta
          </a>
          <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Atendimento online e presencial
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 md:order-1">
          <img
            src={aboutImg}
            alt="Dra. Cristiane Rodrigues no consultório"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Sobre</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
            Você é <em className="font-script">seu maior investimento.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sou a Dra. Cristiane Rodrigues, psicóloga clínica e neuropsicóloga. Acredito que o
            cuidado com a saúde mental é um ato de coragem e de amor próprio. Meu trabalho une
            ciência, escuta sensível e estratégias práticas para que você compreenda sua mente
            e construa uma vida com mais sentido.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "Graduação em Psicologia e especialização em Neuropsicologia",
              "Atendimento clínico para crianças, adolescentes e adultos",
              "Avaliação neuropsicológica completa (TDAH, TEA, dificuldades de aprendizagem)",
              "Supervisora e mentora em Psicologia",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-9 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition"
          >
            Conversar pelo WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Heart, title: "Psicoterapia Adulto", desc: "Acompanhamento individual para ansiedade, autoestima, relacionamentos, propósito e fases de transição." },
  { icon: GraduationCap, title: "Atendimento Adolescente", desc: "Espaço seguro para identidade, emoções, escola e relações familiares na adolescência." },
  { icon: Baby, title: "Psicologia Infantil", desc: "Acolhimento lúdico para o desenvolvimento emocional e comportamental das crianças." },
  { icon: Brain, title: "Avaliação Neuropsicológica", desc: "Investigação aprofundada de TDAH, TEA, memória, atenção e funções cognitivas." },
  { icon: Users, title: "Orientação Parental", desc: "Apoio a famílias com estratégias práticas, baseadas em ciência e empatia." },
  { icon: Sparkles, title: "Atendimento Online", desc: "Sessões por videochamada com o mesmo cuidado e qualidade do presencial." },
];

function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Cuidado <em className="font-script">sob medida</em> para cada fase da vida
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada pessoa carrega uma história única. Por isso, todo atendimento é personalizado
            com base nas suas necessidades e objetivos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-3xl p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/25 flex items-center justify-center text-primary mb-5 group-hover:bg-accent/40 transition">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition"
          >
            <Calendar className="w-4 h-4" /> Quero agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}

function TDAH() {
  const symptoms = ["Desatenção", "Impulsividade", "Procrastinação", "Dificuldade de foco", "Baixa autoestima", "Inquietação constante"];
  return (
    <section id="tdah" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Avaliação especializada</span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3 leading-[1.05]">
            Venha fazer sua avaliação de <span className="font-script text-accent">TDAH</span> comigo
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Entenda sua mente. <span className="text-primary font-medium">Transforme sua vida.</span>
          </p>

          <div className="mt-8 bg-card border border-border rounded-3xl p-6">
            <p className="text-sm font-medium text-primary mb-4">
              Avaliação completa e humanizada para:
            </p>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {["Crianças", "Adolescentes", "Adultos"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> {p}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-primary mb-3">Você pode estar lidando com:</p>
            <div className="flex flex-wrap gap-2">
              {symptoms.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground/80">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-9 rounded-full bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            Dê o primeiro passo para seu melhor foco <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] -z-10" style={{ background: "var(--gradient-warm)" }} />
          <img
            src={tdahImg}
            alt="Cristiane Rodrigues - avaliação de TDAH"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Primeiro contato", d: "Você envia uma mensagem pelo WhatsApp e agendamos sua primeira sessão." },
    { n: "02", t: "Sessão Inicial", d: "Quero te conhecer e ouvir a sua história." },
    { n: "03", t: "Plano de cuidado", d: "Definimos juntas um caminho terapêutico personalizado." },
    { n: "04", t: "Acompanhamento", d: "Sessões semanais ou quinzenais, com escuta, técnica e acolhimento." },
  ];
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Como funciona</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
            Um caminho <em className="font-script">simples</em> para começar
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-3xl p-7 relative overflow-hidden">
              <span className="font-display text-6xl text-accent/40 absolute -top-2 right-4">{s.n}</span>
              <h3 className="font-display text-2xl text-primary relative">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 relative leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { n: "Mariana S.", t: "A Dra. Cristiane mudou minha relação comigo mesma. Hoje me entendo e me respeito muito mais." },
    { n: "Felipe A.", t: "Depois do diagnóstico de TDAH e do acompanhamento, finalmente consegui organizar minha vida e meus estudos." },
    { n: "Camila R.", t: "Levei minha filha e fui acolhida junto. Um atendimento delicado, atento e profundamente profissional." },
  ];
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
            Histórias que <em className="font-script">florescem</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <figure key={i.n} className="bg-card border border-border rounded-3xl p-7">
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-xl text-primary leading-snug">"{i.t}"</blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">— {i.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Como funciona a primeira consulta?", a: "Na primeira sessão conversamos sobre o que está motivando sua busca, seu histórico e seus objetivos. É um espaço seguro, sem julgamentos." },
    { q: "Atendimento é online ou presencial?", a: "Os dois. Você pode escolher o formato que mais combina com sua rotina. As sessões online têm a mesma qualidade do presencial." },
    { q: "Quanto tempo dura uma avaliação neuropsicológica?", a: "Em média de 4 a 8 sessões, dependendo da demanda. Ao final, você recebe um laudo completo e devolutiva personalizada." },
    { q: "Atende crianças?", a: "Sim. Atendo crianças, adolescentes e adultos, com técnicas adequadas para cada fase do desenvolvimento." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Perguntas frequentes</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
            Vamos esclarecer <em className="font-script">suas dúvidas</em>
          </h2>
        </div>
        <div className="space-y-3">
          {qs.map((item) => (
            <details key={item.q} className="group bg-card border border-border rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center cursor-pointer text-primary font-medium">
                {item.q}
                <span className="text-accent text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="bg-card border border-border rounded-[2.5rem] p-10 md:p-14 shadow-[var(--shadow-soft)] relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full" style={{ background: "var(--gradient-warm)", opacity: 0.5 }} />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent">Vamos conversar</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
                Agende sua <em className="font-script">consulta</em>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Estou aqui para acolher sua história. Entre em contato e dê o primeiro passo
                em direção à sua melhor versão.
              </p>
              <ul className="mt-7 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-accent mt-0.5" /><a href={WA_LINK} target="_blank" rel="noopener" className="hover:text-primary transition">+55 34 99333-7055</a></li>
                <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-accent mt-0.5" /><a href={`mailto:${EMAIL}`} className="hover:text-primary transition break-all">{EMAIL}</a></li>
                <li className="flex items-start gap-3"><Instagram className="w-5 h-5 text-accent mt-0.5" /><a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-primary transition">@psic.cristianerodriguez</a></li>
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-accent mt-0.5" /><span>Atendimento presencial e online</span></li>
                <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-accent mt-0.5" /><span>Segunda a sexta · 08h às 21h</span></li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 hover:opacity-90 transition"
              >
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 text-primary px-7 py-4 hover:bg-primary/5 transition"
              >
                <Instagram className="w-5 h-5" /> Acompanhar no Instagram
              </a>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Resposta em até 24h em dias úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span className="font-display text-xl text-primary">Cristiane Rodrigues</span>
        <span>© {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <span>Psicóloga Clínica · CRP 04/12345</span>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white animate-gentle-pulse"
      style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.84 11.84 0 0 0 5.76 1.47h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.44-8.44ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.84 9.84 0 0 1-1.5-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.86 9.86 0 0 1 2.9 7c0 5.46-4.44 9.89-9.92 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}

function Mentoria() {
  const topics = [
    "Supervisão de casos clínicos",
    "Mentoria para início de carreira",
    "Orientação para desenvolvimento profissional",
    "Acompanhamento individualizado",
    "Apoio para estudantes e profissionais da área",
  ];
  return (
    <section id="mentoria" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 rounded-[2.5rem] -z-10" style={{ background: "var(--gradient-warm)" }} />
          <img
            src={mentoriaImg}
            alt="Cristiane Rodrigues conduzindo supervisão e mentoria"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Para profissionais</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 leading-tight">
            Supervisão e <em className="font-script">Mentoria</em> Profissional
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Além do atendimento clínico, ofereço supervisão e mentoria para estudantes de
            Psicologia, psicólogos e terapeutas que desejam desenvolver suas habilidades
            clínicas, aprimorar sua prática profissional e fortalecer sua atuação com mais
            segurança, ética e confiança. Os encontros são personalizados, respeitando o
            momento e os objetivos de cada profissional.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {topics.map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={WA_MENTORIA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-9 rounded-full bg-primary text-primary-foreground px-7 py-3.5 hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            <GraduationCap className="w-4 h-4" />
            Solicitar Supervisão ou Mentoria
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-secondary/30" />
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] -z-10" style={{ background: "var(--gradient-warm)" }} />
          <img
            src={finalImg}
            alt="Cristiane Rodrigues em momento acolhedor"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Estou com você</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mt-3 leading-[1.05]">
            Você não precisa enfrentar tudo <em className="font-script">sozinha.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Estou aqui para acolher sua história, ajudar no seu desenvolvimento emocional e
            caminhar ao seu lado em direção a uma vida com mais equilíbrio, clareza e bem-estar.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-9 rounded-full bg-primary text-primary-foreground px-7 py-4 hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            <Calendar className="w-5 h-5" /> Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
