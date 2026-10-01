import React from 'react';
import { CheckCircle2, Milk, ShieldCheck, MessageSquare, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyMilora: React.FC = () => {
  const reasons = [
    {
      title: 'Fresh Milk',
      subtitle: 'Freshness-focused supply chain',
      desc: 'Collected fresh daily at dawn and dispatched within hours, preventing stale multi-day warehouse storage.',
      icon: Milk
    },
    {
      title: 'Safe & Hygienic',
      subtitle: 'Careful handling and suitable packaging',
      desc: 'Strict food-grade sealed pouches, temperature-guarded delivery crates, and tamper-evident packaging.',
      icon: ShieldCheck
    },
    {
      title: 'Easy Ordering',
      subtitle: 'Simple WhatsApp ordering',
      desc: 'No heavy mobile apps to update or buggy wallet recharges. Manage your milk with quick WhatsApp messages.',
      icon: MessageSquare
    },
    {
      title: 'Regular Delivery',
      subtitle: 'Convenient scheduled delivery',
      desc: 'Predictable morning delivery before 7:30 AM so your family morning routine is never delayed.',
      icon: Clock
    },
    {
      title: 'Local Trust',
      subtitle: 'Neighbourhood-focused service',
      desc: 'Direct human relationship with your local route partner who understands your building and preferences.',
      icon: Heart
    }
  ];

  return (
    <section id="why-milora" className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7BCB9A] uppercase tracking-wider mb-3">
            <span>Core Differentiation</span>
            <span aria-hidden="true">·</span>
            <span>Why Customers Stay</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Why Choose Milora?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            We focus on five uncompromising pillars to make daily milk convenient, fresh, and completely dependable.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 hover:border-[#7BCB9A]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:bg-white/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#7BCB9A]/20 flex items-center justify-center text-[#7BCB9A]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#7BCB9A]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#FFFDF7] font-heading mb-1">
                    {reason.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#E8C66A] mb-3">
                    {reason.subtitle}
                  </div>

                  <p className="text-sm text-[#F8F7F2]/75 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#7BCB9A] font-medium">
                  <span>Verified Daily Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
