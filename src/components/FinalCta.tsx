import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenOrderModal: () => void;
  onTalkToMilora: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenOrderModal, onTalkToMilora }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#13202E] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-[#0B2239] to-[#071A2B] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50">
          {/* Subtle gold glow circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#4EAB6E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#F5D77F] uppercase tracking-wider block mb-3">
              Pure Freshness Daily · Dawn Collection
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading text-[#FFFDF7] text-balance">
              Fresh Milk Should Feel{' '}
              <span className="gold-gradient-text">This Simple.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed">
              Order today. Experience convenient doorstep delivery every single morning before your day begins.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#071A2B] gold-gradient-bg hover:brightness-110 active:scale-95 rounded-2xl shadow-xl shadow-[#D4AF37]/30 transition-all cursor-pointer border border-[#FFFDF7]/40"
              >
                <span>Order Milk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onTalkToMilora}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-[#D4AF37]/40 rounded-2xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span>Talk to Milora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
