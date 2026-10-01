import React from 'react';
import { Users, Briefcase, GraduationCap, HeartHandshake, Coffee, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const TargetCustomers: React.FC = () => {
  const personas = [
    {
      id: 'families',
      title: 'Families',
      subtitle: 'Regular household milk requirements',
      desc: 'Consistent 1–2 Litres daily requirement for kids, morning tea, homemade curd, and evening warm milk.',
      icon: Users,
      badge: 'Core Segment'
    },
    {
      id: 'professionals',
      title: 'Working Professionals',
      subtitle: 'Convenient delivery saves morning time',
      desc: 'No more rushing to milk booths before login or commuting. Fresh milk is waiting at the door before breakfast.',
      icon: Briefcase,
      badge: 'Time Savers'
    },
    {
      id: 'students',
      title: 'Students & Hostellers',
      subtitle: 'Easy access to daily nutrition',
      desc: 'Flexible 500 ML daily pouches for morning cereal, tea, or protein shakes with zero long-term lease lock-in.',
      icon: GraduationCap,
      badge: 'Compact Needs'
    },
    {
      id: 'elderly',
      title: 'Elderly Customers',
      subtitle: 'Doorstep convenience & trust',
      desc: 'Eliminates hazardous early-morning walking to grocery stores, steps, or traffic. Delivered gently to their doorstep.',
      icon: HeartHandshake,
      badge: 'Care & Comfort'
    },
    {
      id: 'cafes',
      title: 'Small Cafes / Tea Shops',
      subtitle: 'Regular business requirements',
      desc: 'Punctual dawn delivery for neighbourhood chai counters, bakeries, and boutique cafes needing 10–25 Litres daily.',
      icon: Coffee,
      badge: 'Commercial Route'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Customer Personas</span>
            <span aria-hidden="true">·</span>
            <span>Who We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            Target Customers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            From growing families to busy professionals and local chai points, Milora caters to diverse daily dairy demands.
          </p>
        </div>

        {/* 5 Persona Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8F7F2] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                      {persona.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#071A2B] group-hover:bg-[#7BCB9A]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#071A2B]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#071A2B] font-heading mb-1">
                    {persona.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#071A2B]/70 mb-3">
                    {persona.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {persona.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Standard 5:30 AM Slot</span>
                  <span className="text-[#071A2B] font-semibold">Available Now →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
