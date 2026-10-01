import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MiloraLogo } from './MiloraLogo';

interface IntroCinematicProps {
  onComplete: () => void;
}

export const IntroCinematic: React.FC<IntroCinematicProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(1);

  useEffect(() => {
    // Stage 1: Drop appears
    const t1 = setTimeout(() => setStage(2), 350);
    // Stage 2: Milk & Gold expands & Brand name appears
    const t2 = setTimeout(() => setStage(3), 750);
    // Stage 3: Tagline fades in
    const t3 = setTimeout(() => setStage(4), 1250);
    // Stage 4: Smooth transition to website
    const t4 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2B] text-white overflow-hidden select-none"
      >
        {/* Soft radial golden & emerald background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(7,26,43,0.95)_70%)] pointer-events-none" />

        {/* Expanding milk & gold aura */}
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{
            scale: stage >= 2 ? (stage >= 3 ? 14 : 3.5) : 0.8,
            opacity: stage >= 2 ? 0.12 : 0.25
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFFDF7] to-[#4EAB6E] blur-2xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Animated Emblem */}
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 relative"
          >
            <MiloraLogo variant="icon" size="xl" />
          </motion.div>

          {/* Brand Name in Gold Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-heading"
          >
            <span className="text-[#FFFDF7]">MILORA</span>{' '}
            <span className="gold-gradient-text">MILK</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-lg text-[#F5D77F] font-script tracking-wide max-w-md"
          >
            Fresh Milk. Delivered to Your Door.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 3 ? 1 : 0 }}
            className="mt-2 text-[11px] font-mono text-[#4EAB6E] uppercase tracking-widest"
          >
            Pure Nutrition Everyday · Small Investment. Big Dreams.
          </motion.div>
        </div>

        {/* Instant Skip button in bottom corner */}
        <button
          onClick={onComplete}
          className="absolute bottom-6 right-6 text-xs text-white/50 hover:text-[#D4AF37] transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer"
        >
          Skip Intro →
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
