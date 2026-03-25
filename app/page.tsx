'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PulseBeams } from '@/components/pulse-beams';
import { ButtonWithBeams } from '@/components/button-with-beams';

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

        {/* Decorative Orb */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <PulseBeams className="h-[400px]">
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
                  <ButtonWithBeams href="#contato" variant="primary" size="lg">
                    Agendar uma conversa gratuita
                  </ButtonWithBeams>
                  <ButtonWithBeams href="#servicos" variant="outline" size="lg">
                    Ver soluções
                  </ButtonWithBeams>
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

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center"
              >
                <img
                  src="https://kalebbrasil.com.br/wp-content/uploads/2024/10/sistema-kaleb.jpg"
                  alt="Sistema de Automação Comercial Kaleb Brasil"
                  className="max-w-full h-auto rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </PulseBeams>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">Pronto para começar?</h2>
        <p className="text-text-soft mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como a Kaleb Brasil pode transformar a gestão do seu negócio.
        </p>
        <ButtonWithBeams href="#contato" variant="primary" size="lg">
          Agendar uma Conversa Gratuita
        </ButtonWithBeams>
      </section>
    </div>
  );
}
