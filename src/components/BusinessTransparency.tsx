import React from 'react';
import { ArrowRight, IndianRupee, Check, HelpCircle } from 'lucide-react';

export const BusinessTransparency: React.FC = () => {
  const steps = [
    { title: '₹10,000 Capital', subtitle: 'Initial Fund', desc: 'Pragmatic startup pool' },
    { title: 'Milk Working Capital', subtitle: '₹4,000 (40%)', desc: 'Direct raw batch procurement' },
    { title: 'Insulated Bags', subtitle: '₹1,500 (15%)', desc: 'Thermal cold chain crates' },
    { title: 'Packaging & Labels', subtitle: '₹1,000 (10%)', desc: 'Food-grade sealed pouches' },
    { title: 'Local Marketing', subtitle: '₹1,000 (10%)', desc: 'Apartment flyers & WhatsApp' },
    { title: 'Transit & Fuel', subtitle: '₹1,000 (10%)', desc: '1st month route logistics' },
    { title: 'Emergency Reserve', subtitle: '₹1,500 (15%)', desc: 'Liquid buffer protection' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Complete Capital Clarity</span>
            <span aria-hidden="true">·</span>
            <span>Zero Hidden Leaks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            Know Where Your Money Goes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Every single rupee in the ₹10,000 launch model has a defined, essential purpose to protect morning operations and build a dependable business.
          </p>
        </div>

        {/* Step-by-Step Flow Grid */}
        <div className="bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {steps.map((st, idx) => (
              <div
                key={st.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between hover:border-[#7BCB9A] transition-all relative"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1">
                    ITEM 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#071A2B] font-heading">
                    {st.title}
                  </h4>
                  <span className="text-xs font-semibold text-[#7BCB9A] block mt-0.5 font-mono">
                    {st.subtitle}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    {st.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7BCB9A] shrink-0" />
              <span>
                <strong>Pragmatic Discipline:</strong> No expensive storefront rent, no heavy refrigeration plants upfront, no unnecessary burn.
              </span>
            </div>
            <span className="text-[#071A2B] font-mono font-bold shrink-0">
              Total Budget = ₹10,000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
