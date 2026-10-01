import React from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export const PricingExplanation: React.FC = () => {
  const steps = [
    { label: 'Raw Sourcing Cost', desc: 'Ethical payment to local dairy farmers' },
    { label: 'Hygienic Operations', desc: 'Food-grade leakproof sealing & testing' },
    { label: 'Doorstep Delivery', desc: 'Early morning neighbourhood route logistics' },
    { label: 'Sustainable Margin', desc: 'Viable operational cushion & emergency buffer' },
    { label: 'Example Selling Price', desc: 'Fair, accessible rate: ₹65 / Litre' }
  ];

  const factors = [
    'Milk purchase cost & ethical farmer remuneration',
    'Food-grade tamper-evident packaging & stickers',
    'Direct doorstep morning delivery convenience',
    'Sustainable local business growth & equipment maintenance',
    'Customer affordability vs quality balance',
    'Local market competition & fair pricing transparency'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E8C66A] uppercase tracking-wider mb-3">
            <span>Price Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Example Selling Price</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Why This Example Price?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            Why use ₹65/Litre as an example benchmark? Our pricing logic is built on honest cost structure, fair farmer pay, and long-term sustainability.
          </p>
        </div>

        {/* Pricing Scale Flow */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl">
          <div className="mb-6 flex items-center justify-between text-xs text-[#F8F7F2]/60">
            <span className="font-mono uppercase tracking-wider text-[#E8C66A]">
              Value & Cost Flow Pipeline
            </span>
            <span>Benchmark Model</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {steps.map((st, i) => (
              <div
                key={st.label}
                className={`p-5 rounded-2xl border flex flex-col justify-between relative ${
                  i === steps.length - 1
                    ? 'bg-gradient-to-b from-[#7BCB9A]/20 to-white/10 border-[#7BCB9A] shadow-lg'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-white/40 block mb-2">
                    PHASE 0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {st.label}
                  </h4>
                  <p className="text-xs text-[#F8F7F2]/70 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-[#071A2B] text-[#7BCB9A] flex items-center justify-center border border-white/10">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Pricing Considerations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {factors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm text-[#F8F7F2]/90"
            >
              <CheckCircle2 className="w-4 h-4 text-[#7BCB9A] shrink-0" />
              <span>{factor}</span>
            </div>
          ))}
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#F8F7F2]/60">
          <Info className="w-3.5 h-3.5 text-[#E8C66A] shrink-0" />
          <span>
            Note: ₹65/L is an illustrative example selling price for model presentation. Actual pricing varies by region, procurement contracts, and city dairy benchmarks.
          </span>
        </div>
      </div>
    </section>
  );
};
