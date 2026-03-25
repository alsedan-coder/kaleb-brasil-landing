'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PulseBeams } from './pulse-beams';

interface ButtonWithBeamsProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'lg';
}

export const ButtonWithBeams: React.FC<ButtonWithBeamsProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'lg',
}) => {
  const buttonBeams = [
    {
      path: 'M0 20 Q50 0 100 20 Q150 40 200 20',
      delay: 0,
    },
    {
      path: 'M0 30 Q50 50 100 30 Q150 10 200 30',
      delay: 0.5,
    },
  ];

  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group';

  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white/30 hover:border-accent text-white hover:text-accent bg-transparent hover:bg-accent/10',
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const ButtonContent = () => (
    <>
      {/* Pulse Beams Background */}
      <PulseBeams
        className="absolute inset-0 w-full h-full"
        beams={buttonBeams}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}

        {/* Arrow animation */}
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          →
        </motion.span>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonContent />
    </motion.button>
  );
};