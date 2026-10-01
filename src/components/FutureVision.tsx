import React from 'react';
import { MapPin, Navigation, TrendingUp, Layers, Home, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const FutureVision: React.FC = () => {
  const roadmapRings = [
    { level: 'Level 1', label: 'Single Locality', scale: '10–50 Homes', desc: '1 neighborhood cluster, zero delivery failure, tight community trust.' },
    { level: 'Level 2', label: 'Nearby Areas', scale: '100–250 Homes', desc: '2–3 adjacent residential sectors connected via synchronized morning routes.' },
    { level: 'Level 3', label: 'Multiple Routes', scale: '500+ Homes', desc: 'Dedicated hub micro-fulfillment with multiple runners & temperature crates.' },
    { level: 'Level 4', label: 'Larger Local Brand', scale: '1,000+ Homes', desc: 'Trusted city-wide direct-from-farm dairy brand recognized for purity.' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7BCB9A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7BCB9A] uppercase tracking-wider mb-3">
            <span>The Long-Term Vision</span>
            <span aria-hidden="true">·</span>
            <span>Sustainable Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Today: 10 Customers.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] to-[#7BCB9A]">
              Tomorrow: 1,000 Homes.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            Milora starts small, builds trust, and grows step by step. Our expansion is anchored in customer delight, not unsustainable burning.
          </p>
        </div>

        {/* Map-Style Expansion Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapRings.map((ring, idx) => (
            <motion.div
              key={ring.level}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 hover:border-[#7BCB9A]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#E8C66A] bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {ring.level}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#7BCB9A] group-hover:scale-110 group-hover:bg-[#7BCB9A]/20 transition-all">
                    <Navigation className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#FFFDF7] font-heading mb-1">
                  {ring.label}
                </h3>

                <span className="text-xs font-mono font-semibold text-[#7BCB9A] block mb-3">
                  {ring.scale}
                </span>

                <p className="text-xs sm:text-sm text-[#F8F7F2]/75 leading-relaxed">
                  {ring.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#E8C66A] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Disciplined Growth Model</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
