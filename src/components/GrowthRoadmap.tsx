import React, { useState } from 'react';
import { Users, TrendingUp, ShieldCheck, MapPin, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const GrowthRoadmap: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2); // default Stage 03: 50 customers

  const stages = [
    {
      num: '01',
      title: '10 Customers',
      milestone: 'Route Validation & Trust',
      litres: '10–15 L/day',
      desc: 'Deliver to initial 10 pilot homes in one immediate apartment cluster. Fine-tune wake-up timing, delivery slots, and packaging feedback.',
      focus: 'Zero delivery failure rate',
      status: 'Foundation'
    },
    {
      num: '02',
      title: '25 Customers',
      milestone: 'Operational Consistency',
      litres: '25–30 L/day',
      desc: 'Expand along the same morning lane. Transition initial 3-day trial households into regular monthly subscribers.',
      focus: 'High customer retention',
      status: 'Stabilization'
    },
    {
      num: '03',
      title: '50 Customers',
      milestone: 'Benchmark Scale (50 L/Day)',
      litres: '50 L/day Target',
      desc: 'Achieve the primary target unit economic model. Optimal route density with 1 delivery partner generating steady positive monthly cashflow.',
      focus: 'Profitable micro-route density',
      status: 'Target Blueprint'
    },
    {
      num: '04',
      title: '100+ Customers',
      milestone: 'Multi-Route Scaling',
      litres: '100+ L/day',
      desc: 'Duplicate the proven 50-litre operational route playbook into adjacent residential sectors with a second dedicated delivery runner.',
      focus: 'Multi-cluster expansion',
      status: 'Scaling'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7BCB9A] uppercase tracking-wider mb-3">
            <span>Progressive Scaling</span>
            <span aria-hidden="true">·</span>
            <span>Milestone Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Start Small. Grow Step by Step.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            A sustainable growth philosophy: First build trust → Then build repeat customers → Then increase volume → Then expand operations.
          </p>
        </div>

        {/* 4-Stage Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((st, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStage(idx)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-white/15 to-white/5 border-[#7BCB9A] shadow-xl ring-1 ring-[#7BCB9A]/30'
                    : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                        isSelected
                          ? 'bg-[#7BCB9A] text-[#071A2B] border-[#7BCB9A]'
                          : 'bg-white/5 text-[#E8C66A] border-white/10'
                      }`}
                    >
                      STAGE {st.num}
                    </span>

                    <span className="text-xs font-mono text-[#7BCB9A] font-semibold">
                      {st.litres}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#FFFDF7] font-heading mb-1">
                    {st.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#E8C66A] mb-4">
                    {st.milestone}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F8F7F2]/75 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F8F7F2]/60">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#7BCB9A]" />
                    <span>{st.focus}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guiding Principle Banner */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7BCB9A]/20 flex items-center justify-center text-[#7BCB9A] shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">The Milora Golden Rule</h4>
              <p className="text-xs text-[#F8F7F2]/70">
                Never sacrifice freshness or punctual delivery speed for uncontrolled vanity volume.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#E8C66A] shrink-0">
            <span>High Density · Low Waste · High Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};
