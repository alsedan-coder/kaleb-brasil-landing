'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
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
        <div className="container-custom flex items-center justify-between h-[68px]">
          <a href="https://kalebbrasil.com.br" target="_blank" rel="noopener noreferrer" className="text-white text-xl font-bold">
            Kaleb Brasil
          </a>

          <nav className="flex items-center gap-6">
            <a href="#servicos" className="text-white/75 text-sm font-medium hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-white/75 text-sm font-medium hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#contato" className="btn-primary">
              Agendar Conversa
            </a>
          </nav>
        </div>
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
                <a href="#contato" className="btn-primary btn-lg inline-block text-center">
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
                    <div className="text-2xl font-bold text-accent flex-shrink-0">{item.num}</div>
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
              <div className="space-y-6 mt-0 md:mt-14">
                {[
                  { num: "03", title: "Treinamento personalizado e dinâmico", desc: "Treinamos sua equipe no seu ritmo, mesmo com a loja aberta, focando no que você realmente precisa usar no dia a dia." },
                  { num: "04", title: "Preparados para as mudanças fiscais", desc: "NFC-e, reforma tributária, NCM ativos — nossa equipe está atualizada e pronta para guiar a sua empresa nessas transições." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-2xl font-bold text-accent flex-shrink-0">{item.num}</div>
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
      </section>

      {/* Sobre - Filosofia */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-slate-50 to-white text-navy">
        <div className="container-custom">
          <h2 className="section-h2">Nossa Filosofia</h2>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-light/10 via-accent/5 to-blue-light/5 border border-blue-light/30 p-8 md:p-12"
            >
              {/* Decorative gradient accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-light/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-light">
                  Transformamos Negócios
                </h3>
                <p className="text-lg leading-relaxed text-text-soft mb-6">
                  Com décadas de experiência em automação comercial, ajudamos empresas do interior de SP a melhorar processos, aumentar vendas e operar com eficiência. Cada solução é customizada para suas necessidades reais.
                </p>

                {/* Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: "⚡", text: "Rápido" },
                    { icon: "🤝", text: "Próximo" },
                    { icon: "✓", text: "Confiável" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center p-4 bg-white/40 rounded-xl backdrop-blur-sm border border-white/60">
                      <span className="text-3xl mb-2">{item.icon}</span>
                      <span className="font-semibold text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="contato" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">Pronto para começar?</h2>
        <p className="text-text-soft mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como a Kaleb Brasil pode transformar a gestão do seu negócio.
        </p>
        <a href="#contato" className="btn-primary btn-lg inline-block">
          Agendar uma Conversa Gratuita
        </a>
      </section>
    </div>
  );
}
