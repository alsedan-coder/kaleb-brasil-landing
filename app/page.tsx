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
          <h2 className="section-h2">Nossos serviços</h2>
          <p className="section-sub mb-10">Soluções completas para automação comercial, gestão e eficiência operacional.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sistemas de gestão",
                desc: "Plataformas integradas para controle de estoque, vendas e financeiro."
              },
              {
                title: "Emissão de notas fiscais",
                desc: "Emissão automática, rápida e sem burocracia para micro e pequenas empresas."
              },
              {
                title: "Suporte e treinamento",
                desc: "Equipe dedicada para implementar e manter tudo funcionando."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-blue-light/5 rounded-2xl border border-blue-light/30 cursor-pointer"
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(22,88,184,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold mb-2 text-lg">{service.title}</h3>
                <p className="text-text-soft">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Nova versão com design melhorado */}
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
