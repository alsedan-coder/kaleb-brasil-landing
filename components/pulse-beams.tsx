'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BeamPath {
  path: string;
  delay?: number;
}

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  beams?: BeamPath[];
}

const defaultBeams: BeamPath[] = [
  {
    path: 'M100 150 Q150 100 250 150',
    delay: 0,
  },
  {
    path: 'M150 50 Q200 100 250 150',
    delay: 0.3,
  },
  {
    path: 'M100 250 Q150 200 250 150',
    delay: 0.6,
  },
];

export const PulseBeams: React.FC<PulseBeamsProps> = ({
  children,
  className = '',
  beams = defaultBeams,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const beamVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
        ease: 'linear',
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'mirror' as const,
      },
    },
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 300"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pulseGradient1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E67E22" stopOpacity="0" />
            <stop offset="30%" stopColor="#E67E22" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#D35400" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E67E22" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pulseGradient2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E67E22" stopOpacity="0" />
            <stop offset="30%" stopColor="#E67E22" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#1658B8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E67E22" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {beams.map((beam, index) => (
            <motion.path
              key={index}
              d={beam.path}
              stroke={`url(#pulseGradient${(index % 2) + 1})`}
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              variants={beamVariants}
              style={{
                animationDelay: `${beam.delay || 0}s`,
              }}
            />
          ))}

          {/* Animated dots */}
          {beams.map((beam, index) => (
            <motion.circle
              key={`dot-${index}`}
              r="3"
              fill="#E67E22"
              filter="url(#glow)"
              variants={dotVariants}
              style={{
                offsetPath: `path('${beam.path}')`,
                animationDelay: `${beam.delay || 0}s`,
              }}
            />
          ))}
        </motion.g>
      </svg>

      {/* Content */}
      {children}
    </div>
  );
};
            strokeWidth="1"
            variants={dotVariants}
          />
          <motion.circle
            cx="150"
            cy="50"
            r="3"
            fill="rgba(230,126,34,0.5)"
            stroke="rgba(230,126,34,0.7)"
            strokeWidth="1"
            variants={dotVariants}
          />
          <motion.circle
            cx="100"
            cy="250"
            r="3"
            fill="rgba(230,126,34,0.5)"
            stroke="rgba(230,126,34,0.7)"
            strokeWidth="1"
            variants={dotVariants}
          />
        </motion.g>
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
