"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  ["Início", "#inicio"],
  ["Quem Somos", "#sobre"],
  ["Áreas de Atuação", "#areas"],
  ["Equipe", "#equipe"],
  ["Contato", "#contato"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/images/logo-horizontal-light.png"
              alt="Aseff & Farias Advocacia"
              width={180}
              height={50}
              className="h-16 sm:h-14 lg:h-12 w-auto"
              priority
            />
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium text-white/70 hover:text-[var(--gold)] transition-colors duration-300 tracking-[2px] uppercase"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5555999655755"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 border border-[var(--gold)]/40 hover:bg-[var(--gold)] text-[var(--gold)] hover:text-white px-6 py-2.5 text-[12px] font-semibold tracking-[2px] uppercase transition-all duration-300"
          >
            Contato
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label="Abrir menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[var(--navy)]/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col items-center py-6 gap-6">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] font-medium text-white/70 hover:text-[var(--gold)] transition-colors duration-300 tracking-[3px] uppercase"
              >
                {label}
              </a>
            ))}
            <a
              href="https://wa.me/5555999655755"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 border border-[var(--gold)]/40 hover:bg-[var(--gold)] text-[var(--gold)] hover:text-white px-6 py-2.5 text-[12px] font-semibold tracking-[2px] uppercase transition-all duration-300 mt-2"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 border-2 border-[var(--gold)] flex items-center justify-center mb-3 lg:mb-5">
        <span className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl font-light text-white/80 tracking-tight select-none">
          A<span className="text-white/60">F</span>
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-6xl font-light text-white tracking-[0.15em] uppercase">
        Aseff <span className="text-[var(--gold)]">&amp;</span> Farias
      </h2>
      <p className="text-[var(--gold)] text-[10px] sm:text-xs lg:text-base tracking-[0.45em] uppercase mt-1 lg:mt-3 font-light">
        Advocacia
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[var(--navy-dark)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)] via-[var(--navy)] to-[var(--navy-dark)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen text-center pt-28 sm:pt-24 lg:pt-0">
        <div>
          <LogoText className="mb-8 lg:mb-10" />
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6">
            Soluções jurídicas
            {" "}
            <span className="text-[var(--gold-light)] italic">com transparência</span>
            {" "}e dedicação
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Especialistas em Direito Bancário e Previdenciário. Atuamos para
            proteger seus direitos e conquistar os melhores resultados para
            cada caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/5555999655755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 text-[13px] font-semibold tracking-[2px] uppercase transition-all duration-300"
            >
              Fale Conosco
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-[var(--gold)]/50 text-white/70 hover:text-white px-8 py-4 text-[13px] font-semibold tracking-[2px] uppercase transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-12 left-6 lg:left-12 flex items-center gap-4">
        <div className="w-[1px] h-16 bg-white/20" />
        <span className="text-white/30 text-[11px] tracking-[3px] uppercase rotate-0">
          Role para baixo
        </span>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="w-12 h-[1px] bg-[var(--gold)] mb-8" />
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[4px] uppercase mb-4">
              Quem Somos
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-medium text-[var(--navy-dark)] leading-[1.2] mb-8">
              Um escritório construído
              <br />
              <span className="italic text-[var(--gold-dark)]">com propósito</span>
            </h2>
            <p className="text-[var(--charcoal)]/60 text-base leading-[1.8] mb-6">
              O escritório Aseff & Farias Advocacia nasceu da união entre
              experiência, comprometimento e a vontade de fazer a diferença na
              vida de nossos clientes. Há anos atuando nas áreas de Direito
              Bancário e Direito Previdenciário, construímos uma trajetória
              sólida baseada em resultados concretos e relações de confiança.
            </p>
            <p className="text-[var(--charcoal)]/60 text-base leading-[1.8]">
              Acreditamos que cada cliente merece um atendimento único,
              personalizado e humano. Acompanhamos cada caso de perto, do
              início ao fim, garantindo que nossos clientes se sintam amparados
              em cada etapa do processo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: "Acompanhamento",
                desc: "Estamos ao seu lado em cada etapa do processo, mantendo você informado e seguro sobre o andamento do seu caso.",
                num: "01",
              },
              {
                title: "Atenção",
                desc: "Cada cliente é único. Ouvimos suas necessidades com empatia e dedicamos a atenção necessária para encontrar a melhor solução.",
                num: "02",
              },
              {
                title: "Valores",
                desc: "Ética, transparência e compromisso com a justiça são os pilares que sustentam nossa atuação e guiam cada decisão.",
                num: "03",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-6 p-6 border-b border-gray-100 group hover:border-[var(--gold)]/30 transition-colors duration-300"
              >
                <span className="text-[var(--gold)] font-[family-name:var(--font-heading)] text-3xl font-light opacity-40">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[var(--navy-dark)] font-semibold text-[15px] tracking-[1px] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--charcoal)]/50 text-sm leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AreasDeAtuacao() {
  const areas = [
    {
      title: "Direito Bancário",
      desc: "Defendemos seus direitos contra abusos de instituições financeiras. Atuamos na revisão de contratos, redução de juros abusivos e renegociação de dívidas bancárias.",
      items: [
        "Revisão de contratos bancários",
        "Redução de juros abusivos",
        "Renegociação de dívidas",
        "Ações contra cobranças indevidas",
        "Defesa contra negativação indevida",
        "Busca e apreensão de veículos",
      ],
    },
    {
      title: "Direito Previdenciário",
      desc: "Garantimos que você receba os benefícios a que tem direito. Auxiliamos em todas as etapas, desde o requerimento administrativo até a esfera judicial.",
      items: [
        "Auxílio-doença",
        "Auxílio-acidente",
        "Salário-maternidade",
        "Aposentadorias",
        "Pensão por morte",
        "Benefício de Prestação Continuada (BPC/LOAS)",
      ],
    },
  ];

  return (
    <section id="areas" className="py-28 lg:py-36 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="w-12 h-[1px] bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-[var(--gold)] text-[13px] font-medium tracking-[4px] uppercase mb-4">
            Especialidades
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-medium text-[var(--navy-dark)] leading-[1.2]">
            Áreas de Atuação
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-10 lg:p-12 group hover:shadow-2xl transition-shadow duration-500"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--navy-dark)] mb-5">
                {area.title}
              </h3>
              <div className="w-8 h-[1px] bg-[var(--gold)] mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="text-[var(--charcoal)]/60 text-sm leading-[1.8] mb-8">
                {area.desc}
              </p>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[var(--charcoal)]/70 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  const socios = [
    {
      nome: "Anderson Aseff",
      oab: "OAB/RS 130.983",
      cargo: "Sócio Fundador",
      foto: "/images/anderson.jpeg",
      desc: "Especialista em Direito Bancário e Previdenciário, atua na defesa dos direitos de consumidores frente a instituições financeiras e na garantia de benefícios previdenciários junto ao INSS.",
    },
    {
      nome: "Laura Farias",
      oab: "OAB/RS 130.981",
      cargo: "Sócia Fundadora",
      foto: "/images/laura.jpeg",
      desc: "Especialista em Direito Bancário e Previdenciário, dedica-se a proteger os direitos de seus clientes com atendimento humanizado, desde a revisão contratual até a conquista de benefícios do INSS.",
    },
  ];

  return (
    <section id="equipe" className="py-28 lg:py-36 bg-[var(--navy-dark)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="w-12 h-[1px] bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-[var(--gold)] text-[13px] font-medium tracking-[4px] uppercase mb-4">
            Profissionais
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-medium text-white leading-[1.2]">
            Nossa Equipe
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {socios.map((socio) => (
            <div key={socio.nome} className="group">
              <div className="relative mb-8 aspect-[3/4] overflow-hidden">
                <Image
                  src={socio.foto}
                  alt={socio.nome}
                  fill
                  className="object-cover object-top grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 max-md:grayscale-0"
                />
                <div className="absolute inset-0 bg-[var(--navy-dark)]/30 md:bg-[var(--navy-dark)]/30 group-hover:bg-transparent max-md:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-white">
                  {socio.nome}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-[var(--gold)] text-[12px] font-semibold tracking-[2px] uppercase">
                    {socio.cargo}
                  </span>
                  <span className="w-[1px] h-3 bg-white/20" />
                  <span className="text-white/40 text-[12px] tracking-[1px]">
                    {socio.oab}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-[1.8] pt-2">
                  {socio.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="w-12 h-[1px] bg-[var(--gold)] mb-8" />
            <p className="text-[var(--gold)] text-[13px] font-medium tracking-[4px] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-medium text-[var(--navy-dark)] leading-[1.2] mb-12">
              Fale conosco
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-[var(--navy-dark)] font-semibold text-[13px] tracking-[2px] uppercase mb-3">
                  Endereço
                </h3>
                <p className="text-[var(--charcoal)]/50 leading-[1.8]">
                  Rua Duque de Caxias, 2357, Sala 203
                  <br />
                  Bairro Nonoai — Santa Maria/RS
                  <br />
                  CEP: 97060-210
                </p>
              </div>
              <div>
                <h3 className="text-[var(--navy-dark)] font-semibold text-[13px] tracking-[2px] uppercase mb-3">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5555999655755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors text-lg"
                >
                  (55) 99965-5755
                </a>
              </div>
              <div>
                <h3 className="text-[var(--navy-dark)] font-semibold text-[13px] tracking-[2px] uppercase mb-3">
                  E-mail
                </h3>
                <a
                  href="mailto:escritorioaseffefarias@gmail.com"
                  className="text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
                >
                  escritorioaseffefarias@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-[var(--navy-dark)] font-semibold text-[13px] tracking-[2px] uppercase mb-3">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/aseffefarias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
                >
                  @aseffefarias
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[var(--cream)] p-10 lg:p-12">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--navy-dark)] mb-8">
              Envie sua mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[12px] font-semibold tracking-[2px] uppercase text-[var(--navy-dark)] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 text-[var(--charcoal)] placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-[2px] uppercase text-[var(--navy-dark)] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 text-[var(--charcoal)] placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-[2px] uppercase text-[var(--navy-dark)] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 text-[var(--charcoal)] placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-[2px] uppercase text-[var(--navy-dark)] mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos brevemente sobre o seu caso..."
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 text-[var(--charcoal)] placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none text-sm"
                />
              </div>
              <a
                href="https://wa.me/5555999655755"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[var(--navy-dark)] hover:bg-[var(--navy)] text-white px-10 py-4 text-[12px] font-semibold tracking-[2px] uppercase transition-all duration-300 mt-4"
              >
                Enviar via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5555999655755"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo-light.png"
              alt="Aseff & Farias Advocacia"
              width={100}
              height={100}
              className="h-16 w-auto opacity-70 mb-6"
            />
            <p className="text-white/30 text-sm leading-[1.8]">
              Especialistas em Direito Bancário e Previdenciário, dedicados a
              proteger seus direitos com ética e transparência.
            </p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-[12px] tracking-[2px] uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                ["Início", "#inicio"],
                ["Quem Somos", "#sobre"],
                ["Áreas de Atuação", "#areas"],
                ["Equipe", "#equipe"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/30 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-[12px] tracking-[2px] uppercase mb-6">
              Contato
            </h4>
            <ul className="space-y-3 text-white/30 text-sm">
              <li>Rua Duque de Caxias, 2357, Sala 203</li>
              <li>Bairro Nonoai — Santa Maria/RS</li>
              <li>CEP: 97060-210</li>
              <li className="pt-3">
                <a
                  href="tel:+5555999655755"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  (55) 99965-5755
                </a>
              </li>
              <li>
                <a
                  href="mailto:escritorioaseffefarias@gmail.com"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  escritorioaseffefarias@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white/20 text-[13px]">
              &copy; {new Date().getFullYear()} Aseff & Farias Advocacia. Todos os
              direitos reservados.
            </p>
            <p className="text-white/15 text-[11px] mt-1">
              CNPJ: 60.973.346/0001-06
            </p>
          </div>
          <a
            href="https://instagram.com/aseffefarias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-[var(--gold)] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <AreasDeAtuacao />
        <Equipe />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
