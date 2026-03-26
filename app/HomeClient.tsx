'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomeClient() {
    const [menuOpen, setMenuOpen] = React.useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-white/5">
        <div className="container-custom flex items-center justify-between h-[52px] py-2">
          <a href="https://kalebbrasil.com.br" target="_blank" rel="noopener noreferrer" className="text-white text-xl font-bold">
            Kaleb Brasil
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-white/75 text-sm font-medium hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-white/75 text-sm font-medium hover:text-white transition-colors">
              Sobre
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white focus:outline-none"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-navy/95 bg-opacity-95 flex flex-col items-center justify-center gap-8 transition-all">
            <button
              className="absolute top-6 right-6 p-2 text-white"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <a href="#servicos" className="text-white text-2xl font-semibold" onClick={() => setMenuOpen(false)}>
              Serviços
            </a>
            <a href="#sobre" className="text-white text-2xl font-semibold" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-navy via-navy to-blue flex items-center pt-[120px] pb-20 relative overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[48px_48px]" />
        </div>

        {/* Decorative Orbs */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-orange-600/15 border border-accent/40 text-accent text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-7"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Automação Comercial · Interior Paulista
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-inter text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
              >
                O apoio e a solução que a sua empresa{' '}
                <span className="text-accent">realmente merece.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Cadastre seus produtos, acelere suas vendas, emita notas fiscais e acompanhe
                resultados — tudo com um único parceiro especializado em PMEs do interior de SP.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a href="#pronto" className="btn-primary btn-lg inline-block text-center">
                  Agendar uma conversa gratuita
                </a>
                <a href="#servicos" className="btn-outline btn-lg inline-block text-center">
                  Ver soluções
                </a>
              </motion.div>

              {/* Trust Items */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-white/80 font-medium">
                  <svg width="16" height="16" fill="none" stroke="#25D366" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Suporte rápido e eficiente
                </div>
                <div className="flex items-center gap-2 text-white/80 font-medium">
                  <svg width="16" height="16" fill="none" stroke="#25D366" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Treinamento personalizado incluso
                </div>
              </motion.div>
            </motion.div>

            {/* Right decorative element - subtle gradient box instead of image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-blue-light/30 to-accent/20 rounded-3xl backdrop-blur-sm border border-white/10" />
            </motion.div>
          </div>
        </div>
        </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white text-navy">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-wider uppercase text-blue mb-3">Nossas soluções</p>
            <h2 className="section-h2">Tudo o que você precisa em um só lugar</h2>
            <p className="section-sub">
              Chega de correr de um fornecedor para outro. A Kaleb Brasil reúne software, hardware e serviços de suporte sob um único ponto de contato responsável.
            </p>
          </div>

          {/* Cards com hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🖥️",
                title: "Sistemas e ERP",
                subtitle: "Gestão completa do seu negócio",
                items: [
                  "Gestão de vendas e PDV",
                  "Controle de estoque em tempo real",
                  "Emissão de NFC-e, NF-e e NFS-e",
                  "Preparado para a reforma tributária"
                ],
                link: "https://kalebbrasil.com.br/sistemas-e-erp/"
              },
              {
                icon: "🖨️",
                title: "Equipamentos e Suprimentos",
                subtitle: "Hardware de qualidade para seu negócio",
                items: [
                  "Impressoras fiscais e de etiquetas",
                  "Computadores e periféricos",
                  "Leitores de código de barras",
                  "Suprimentos e acessórios"
                ],
                link: "https://kalebbrasil.com.br/equipamentos-e-suprimentos/"
              },
              {
                icon: "🔧",
                title: "Serviços Técnicos",
                subtitle: "Suporte e infraestrutura especializada",
                items: [
                  "Segurança da informação",
                  "Emissão de certificados digitais (A1)",
                  "Manutenção de computadores",
                  "Acesso remoto e suporte online"
                ],
                link: "https://kalebbrasil.com.br/servicos/"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-blue-light/5 rounded-2xl border border-blue-light/30 cursor-pointer"
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(22,88,184,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                  <p className="text-sm text-text-soft">{service.subtitle}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-soft">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 text-accent">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-accent font-medium text-sm hover:text-accent/70 transition">
                  Saiba mais →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-slate-50 text-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-wider uppercase text-blue mb-3">Quem somos</p>
              <h2 className="section-h2">Nascemos no interior para entender o interior.</h2>
              <p className="text-text-soft mb-4">
                Fundada em Vinhedo/SP, a <strong>Kaleb Brasil</strong> nasceu com a garra e coragem
                de seus idealizadores para oferecer a solução mais completa em automação comercial
                para empreendedores de pequeno e médio porte da região.
              </p>
              <p className="text-text-soft mb-4">
                Crescemos e estendemos nossa atuação para outras cidades do interior paulista,
                informatizando estabelecimentos comerciais e industriais com softwares, equipamentos
                e serviços adequados a cada necessidade.
              </p>
              <p className="text-text-soft font-semibold">Nosso negócio é <strong>entender para atender</strong>.</p>
            </motion.div>

            {/* Right - MVV */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="space-y-4">
                {[
                  { label: "Missão", desc: "Entender cada cliente como único e oferecer tecnologias que o ajudem a administrar seus negócios." },
                  { label: "Visão", desc: "Ser referência em atendimento ao cliente com qualidade de produtos e serviços." },
                  { label: "Valores", desc: "Deus, família, ética, responsabilidade e respeito." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg border border-blue-light/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-light to-accent flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {item.label[0]}
                    </div>
                    <div>
                      <div className="font-bold text-navy mb-1">{item.label}</div>
                      <p className="text-sm text-text-soft">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-white text-navy">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left - Text */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-xs font-bold tracking-wider uppercase text-blue mb-3">Por que a Kaleb Brasil</p>
                <h2 className="section-h2">Especialistas que entendem o seu negócio.</h2>

                <div className="space-y-6 mt-8">
                  {[
                    { num: "01", title: "Atendimento humanizado e rápido", desc: "Suporte ágil com pessoas reais — não bots. Nossos clientes confirmam: quando precisam, a equipe está lá." },
                    { num: "02", title: "Solução completa em um só parceiro", desc: "Software, hardware, certificados, manutenção e treinamento. Uma empresa, um responsável, zero terceirização de culpa." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-2xl font-bold text-accent flex-shrink-0 w-12 text-center">{item.num}</div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-text-soft text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Text */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="space-y-6 md:mt-[88px]">
                  {[
                    { num: "03", title: "Treinamento personalizado e dinâmico", desc: "Treinamos sua equipe no seu ritmo, mesmo com a loja aberta, focando no que você realmente precisa usar no dia a dia." },
                    { num: "04", title: "Preparados para as mudanças fiscais", desc: "NFC-e, reforma tributária, NCM ativos — nossa equipe está atualizada e pronta para guiar a sua empresa nessas transições." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-2xl font-bold text-accent flex-shrink-0 w-12 text-center">{item.num}</div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-text-soft text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white text-navy">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <p className="text-xs font-bold tracking-wider uppercase text-blue mb-3">Prova social</p>
            <h2 className="section-h2 mb-4">O que nossos clientes dizem</h2>
            <p className="section-sub max-w-2xl mx-auto">
              Empresários reais do interior paulista que confiam na Kaleb Brasil para gerir seus negócios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Ótima empresa, ótimo sistema, prático e fácil de utilizar. Suporte ao cliente sempre rápido e eficiente. Recomendo!",
                name: "Julia Almeida",
                role: "Açougue"
              },
              {
                text: "Atendimento rápido de um produto fácil de aprender e usar. Recomendo.",
                name: "Amanda Correa",
                role: "Hortifruti"
              },
              {
                text: "São muito atenciosos e profissionais, sempre prontos a nos atender no suporte. Recomendo!",
                name: "Roberto Sales",
                role: "Loja de Roupas"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-light/5 to-accent/5 border border-blue-light/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-text-soft mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-light to-accent flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name[0]}{testimonial.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{testimonial.name}</div>
                    <div className="text-text-soft text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Filosofia */}
      <section id="sobre" className="py-24 bg-gradient-to-b from-slate-50 via-white to-navy/5 text-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Citação prominente */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-accent mb-4">Nossa Filosofia</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-navy mb-4">
                  Entender para{' '}
                  <span className="text-accent">atender</span>
                </h2>
                <p className="text-text-soft text-lg leading-relaxed">
                  Nosso negócio é simples: conhecer cada cliente como único e oferecer soluções que realmente fazem diferença no dia a dia.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-light/5 to-accent/5 border-2 border-accent/20 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-8 -left-8 text-8xl text-accent/10 font-bold">{ '"' }</div>
                <p className="relative z-10 text-xl md:text-2xl font-bold text-navy leading-relaxed mb-6">
                  Nosso negócio é <em className="text-accent not-italic">entender para atender</em> — sendo a solução que a sua empresa merece.
                </p>
                <p className="text-sm text-text-soft font-semibold text-right">— Kaleb Brasil, desde Vinhedo/SP</p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Homologado para NFC-e 2026",
                  "Certificados digitais A1 online",
                  "Suporte remoto e presencial",
                  "Pronto para a reforma tributária"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-blue-light/20 hover:bg-white/80 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="text-accent">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-navy font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-light via-accent/20 to-navy/10 p-12 border border-white/40 shadow-2xl">
                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-light/20 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-6">
                  {/* Card 1 */}
                  <div className="backdrop-blur-sm bg-white/90 rounded-2xl p-6 border border-white/70 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-bold text-navy mb-2">Rápido</h4>
                    <p className="text-sm text-text-soft">Implementação e suporte ágil, sem demora.</p>
                  </div>

                  {/* Card 2 */}
                  <div className="backdrop-blur-sm bg-white/90 rounded-2xl p-6 border border-white/70 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="text-4xl mb-3">🤝</div>
                    <h4 className="font-bold text-navy mb-2">Próximo</h4>
                    <p className="text-sm text-text-soft">Atendimento humanizado, com pessoas reais.</p>
                  </div>

                  {/* Card 3 */}
                  <div className="backdrop-blur-sm bg-white/90 rounded-2xl p-6 border border-white/70 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="text-4xl mb-3">✓</div>
                    <h4 className="font-bold text-navy mb-2">Confiável</h4>
                    <p className="text-sm text-text-soft">Parceiro comprometido com seus resultados.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* Pronto para começar - Formulário Completo */}
      <section id="pronto" className="py-24 bg-gradient-to-br from-navy via-blue to-blue-light text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[48px_48px]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-4">Pronto para começar?</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Vamos transformar a gestão do seu negócio
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Preencha o formulário abaixo e um consultor entrará em contato em até 1 dia útil.
                A conversa inicial é gratuita e sem compromisso.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-sm border border-white/20 p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left - Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">Agendar conversa gratuita</h3>
                      <p className="text-text-soft text-sm">Sem compromisso — um consultor entrará em contato em breve.</p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4 pt-6">
                      {[
                        { icon: "📱", label: "WhatsApp", value: "(19) 9 9836-2868" },
                        { icon: "🌐", label: "Site", value: "kalebbrasil.com.br" },
                        { icon: "📍", label: "Região", value: "Interior de São Paulo" }
                      ].map((contact, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="text-2xl flex-shrink-0">{contact.icon}</div>
                          <div>
                            <div className="font-bold text-navy">{contact.label}</div>
                            <div className="text-text-soft text-sm">{contact.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* WhatsApp Button */}
                    <div className="pt-4">
                      <a
                        href="https://api.whatsapp.com/send?phone=5519998362868&text=Ol%C3%A1%2C+vim+pela+landpage+e+gostaria+de+conversar+sobre+as+solu%C3%A7%C3%B5es+da+Kaleb+Brasil!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-all"
                      >
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Ou fale agora pelo WhatsApp →
                      </a>
                    </div>
                  </div>

                  {/* Right - Form Fields */}
                  <div>
                    <form id="leadForm" className="space-y-4">
                      {/* Nome e Empresa */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Nome <span className="text-accent">*</span>
                          </label>
                          <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome completo"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-blue-light/30 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-navy placeholder:text-text-soft/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Empresa <span className="text-accent">*</span>
                          </label>
                          <input
                            type="text"
                            name="empresa"
                            placeholder="Nome da empresa"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-blue-light/30 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-navy placeholder:text-text-soft/50"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          E-mail <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="seu@email.com.br"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-blue-light/30 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-navy placeholder:text-text-soft/50"
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          WhatsApp <span className="text-accent">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="(19) 9 0000-0000"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-blue-light/30 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-navy placeholder:text-text-soft/50"
                        />
                      </div>

                      {/* Mensagem */}
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Mensagem <span className="text-text-soft text-xs">(opcional)</span>
                        </label>
                        <textarea
                          name="mensagem"
                          placeholder="Conte brevemente sobre seu negócio ou dúvida principal..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-blue-light/30 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-navy placeholder:text-text-soft/50 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
                        </svg>
                        Enviar e agendar conversa
                      </button>

                      {/* Privacy note */}
                      <p className="text-xs text-text-soft flex items-center gap-2">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="11" width="18" height="11" rx="2"/>
                          <path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                        Seus dados estão seguros. Sem spam.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy/95 text-white py-12 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h4 className="text-lg font-bold mb-2">Kaleb Brasil</h4>
              <p className="text-white/75 text-sm">Automação comercial especializada para PMEs do interior de São Paulo.</p>
            </div>

            {/* Links */}
            <div>
              <h5 className="font-semibold mb-3 text-sm">Links Rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="text-white/75 hover:text-accent transition">Serviços</a></li>
                <li><a href="#sobre" className="text-white/75 hover:text-accent transition">Sobre</a></li>
                <li><a href="#contato" className="text-white/75 hover:text-accent transition">Contato</a></li>
                <li><a href="https://kalebbrasil.com.br" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-accent transition">Site Principal</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-semibold mb-3 text-sm">Contato</h5>
              <ul className="space-y-2 text-sm text-white/75">
                <li>WhatsApp: (19) 9 9836-2868</li>
                <li>Email: contato@kalebbrasil.com.br</li>
                <li>Vinhedo/SP - Interior Paulista</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/50 text-sm">
              © 2026 Kaleb Brasil. Todos os direitos reservados. | Landing Page criada com Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}