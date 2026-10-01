import React from 'react';
import { Clock, Users2, AlertCircle, Home } from 'lucide-react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      icon: Clock,
      title: 'No Time to Visit Shops',
      desc: 'Busy morning routines, work commutes, and family duties leave little time to run to physical dairy booths every day.'
    },
    {
      num: '02',
      icon: Users2,
      title: 'Long Queues & Early Hassle',
      desc: 'Standing in early-morning queues at local milk booths is frustrating, especially during rush hours or rainy weather.'
    },
    {
      num: '03',
      icon: AlertCircle,
      title: 'Milk May Not Always Be Available',
      desc: 'Neighborhood shops frequently run out of fresh stock by 7:30 AM, forcing families to compromise or buy packed processed alternatives.'
    },
    {
      num: '04',
      icon: Home,
      title: 'Customers Want Doorstep Delivery',
      desc: 'Modern households expect reliable, automated doorstep delivery before they wake up, without daily reminders or complicated processes.'
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#E8C66A] uppercase tracking-wider mb-3">
            <span>Market Friction</span>
            <span aria-hidden="true">·</span>
            <span>Customer Frustration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            The Daily Milk Problem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed font-normal">
            Millions of urban households struggle every single morning with inconsistent milk supply, long queues, and inconvenient store runs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={prob.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-[#7BCB9A]/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#E8C66A] tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10">
                      PROBLEM {prob.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#7BCB9A] group-hover:scale-110 group-hover:bg-[#7BCB9A]/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#FFFDF7] font-heading mb-3">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-[#F8F7F2]/75 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-[#E8C66A] font-medium">
                  <span>Needs a smarter local solution →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
