import React, { useState } from 'react';
import { MessageSquare, Milk, ShieldCheck, Truck, Home, UserCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const SolutionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'customer',
      title: 'Customer',
      subtitle: 'Places daily or subscription request',
      icon: UserCheck,
      detail: 'Households, bachelors, or cafes looking for dependable pure fresh milk without morning stress.'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Order',
      subtitle: 'Zero app installation friction',
      icon: MessageSquare,
      detail: 'Send a quick message on WhatsApp or click a single button to confirm daily requirement.'
    },
    {
      id: 'milora',
      title: 'Milora Hub',
      subtitle: 'Smart route & batch aggregation',
      icon: Milk,
      detail: 'Our local micro-hub aggregates neighbourhood quantities and coordinates morning dispatch.'
    },
    {
      id: 'supplier',
      title: 'Reliable Supplier',
      subtitle: 'Pure farm-fresh collection',
      icon: ShieldCheck,
      detail: 'Direct collection from vetted local dairy farmers and quality-tested suppliers at dawn.'
    },
    {
      id: 'packing',
      title: 'Safe Packing',
      subtitle: 'Food-grade leakproof seal',
      icon: ShieldCheck,
      detail: 'Hygienically packaged in 500ml or 1 Litre tamper-evident food-grade pouches with date stamps.'
    },
    {
      id: 'delivery',
      title: 'Home Delivery',
      subtitle: 'Doorstep by 7:30 AM',
      icon: Home,
      detail: 'Insulated thermal delivery straight to the customer doorsteps in quiet morning slots.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>The Milora Solution</span>
            <span aria-hidden="true">·</span>
            <span>Seamless Chain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            We Bring the Milk to You.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Milora bridges local dairy supply and modern urban convenience through an efficient, technology-backed doorstep delivery system.
          </p>
        </div>

        {/* Process Flow Interactive Container */}
        <div className="bg-[#F8F7F2] border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* Desktop Flow (6 Nodes Connected) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all flex flex-col items-center text-center relative ${
                    isSelected
                      ? 'bg-white shadow-md border-2 border-[#7BCB9A] scale-105 z-10'
                      : 'bg-white/70 hover:bg-white border border-slate-200/60 hover:shadow-sm'
                  }`}
                >
                  {/* Step Number Tag */}
                  <span className="text-[10px] font-mono font-bold text-slate-400 mb-2">
                    STEP 0{idx + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? 'bg-[#071A2B] text-[#7BCB9A]'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-[#071A2B] font-heading mb-1">
                    {step.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {step.subtitle}
                  </p>

                  {/* Arrow Indicator for connecting flow (desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-[#071A2B] text-white flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 text-[#7BCB9A]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Details Callout */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#7BCB9A]/20 text-[#071A2B] flex items-center justify-center shrink-0 font-bold font-mono">
                0{activeStep + 1}
              </div>
              <div>
                <h5 className="text-base font-bold text-[#071A2B]">
                  Stage Detail: {steps[activeStep].title}
                </h5>
                <p className="text-sm text-slate-600 mt-0.5">
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-medium text-slate-500">
                Click any stage above to inspect
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
