import React, { useState } from 'react';
import { ArrowRight, TrendingUp, CheckCircle, RefreshCw, Users, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export const BusinessModel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'value-chain' | 'growth-flywheel'>('value-chain');

  const chainNodes = [
    { title: 'Supplier', desc: 'Vetted dairy collection' },
    { title: 'Milk', desc: 'Pure fresh batch' },
    { title: 'Packaging', desc: 'Food-grade hygiene pouch' },
    { title: 'Delivery', desc: 'Doorstep morning route' },
    { title: 'Customer', desc: 'Delighted daily households' },
    { title: 'Revenue', desc: 'Reliable cashflow & repeats' }
  ];

  const flywheelSteps = [
    {
      title: 'Small Start',
      desc: 'Begin with 1 focused neighbourhood route (e.g. 50 Litres/day) to achieve route density and zero waste.',
      icon: Users,
      badge: 'Step 1'
    },
    {
      title: 'Repeat Customers',
      desc: 'Deliver consistent freshness and punctuality to convert one-time trials into recurring 30-day subscriptions.',
      icon: RefreshCw,
      badge: 'Step 2'
    },
    {
      title: 'Sustainable Growth',
      desc: 'Reinvest steady cashflow to add adjacent delivery routes, expand supply, and lower per-unit delivery cost.',
      icon: TrendingUp,
      badge: 'Step 3'
    }
  ];

  return (
    <section id="business-model" className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Unit Economics</span>
            <span aria-hidden="true">·</span>
            <span>Business Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            How The Business Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            A transparent, low-overhead direct-to-door dairy model designed for lean operational efficiency and sustainable growth.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-[#F8F7F2] border border-slate-200 rounded-2xl w-fit">
          <button
            onClick={() => setActiveTab('value-chain')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'value-chain'
                ? 'bg-[#071A2B] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#071A2B]'
            }`}
          >
            Operational Value Chain
          </button>
          <button
            onClick={() => setActiveTab('growth-flywheel')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'growth-flywheel'
                ? 'bg-[#071A2B] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#071A2B]'
            }`}
          >
            Small Start → Growth Flywheel
          </button>
        </div>

        {/* View 1: Value Chain */}
        {activeTab === 'value-chain' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                End-to-End Operational Pipeline
              </span>
              <span className="text-xs font-semibold text-[#071A2B] bg-white px-3 py-1 rounded-full border border-slate-200">
                Zero Intermediary Loss
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chainNodes.map((node, index) => (
                <div
                  key={node.title}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:border-[#7BCB9A] transition-all relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#071A2B] font-heading">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                  {index < chainNodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-[#071A2B] text-[#7BCB9A] flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <span>
                <strong>Direct Delivery Advantage:</strong> By collecting at dawn and delivering immediately, Milora minimizes refrigeration holding times and cuts cold-storage overhead.
              </span>
              <span className="font-semibold text-[#071A2B] shrink-0">
                Freshness Guaranteed
              </span>
            </div>
          </motion.div>
        )}

        {/* View 2: Growth Flywheel */}
        {activeTab === 'growth-flywheel' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {flywheelSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold bg-[#071A2B] text-white px-2.5 py-1 rounded-md">
                        {step.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#071A2B]">
                        <Icon className="w-5 h-5 text-[#7BCB9A]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#071A2B] font-heading mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#071A2B]">
                    <CheckCircle className="w-4 h-4 text-[#7BCB9A]" />
                    <span>Disciplined Capital Allocation</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};
