import React from 'react';
import { MessageSquare, Instagram, FileText, Users, Sparkles, ArrowRight, Info } from 'lucide-react';

interface MarketingStrategyProps {
  onStartTrial: () => void;
}

export const MarketingStrategy: React.FC<MarketingStrategyProps> = ({ onStartTrial }) => {
  const channels = [
    {
      title: 'WhatsApp Outreach',
      desc: 'Direct society group coordination and one-click broadcast updates for delivery confirmations.',
      icon: MessageSquare,
      stat: 'Primary Channel'
    },
    {
      title: 'Instagram & Local Social',
      desc: 'Hyperlocal visual content showing farm collection, hygiene packing, and morning delivery stories.',
      icon: Instagram,
      stat: 'Visual Proof'
    },
    {
      title: 'Local Apartment Flyers',
      desc: 'Targeted door-to-door informational cards distributed in gated communities within a 2 km delivery route.',
      icon: FileText,
      stat: 'Doorstep Reach'
    },
    {
      title: 'Customer Referrals',
      desc: 'Satisfied neighbours recommending Milora to their apartment residents for shared morning delivery routes.',
      icon: Users,
      stat: 'Word of Mouth'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Go-To-Market Execution</span>
            <span aria-hidden="true">·</span>
            <span>Local Acquisition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            How We Reach Customers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            A low-cost, grassroots acquisition strategy focused on tight neighbourhood density and hyper-local word-of-mouth.
          </p>
        </div>

        {/* 4 Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.title}
                className="bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#071A2B]">
                      <Icon className="w-6 h-6 text-[#7BCB9A]" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {ch.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071A2B] font-heading mb-2">
                    {ch.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-medium text-slate-500">
                  Zero high-burn ad spend
                </div>
              </div>
            );
          })}
        </div>

        {/* Example Campaign Banner: Try Milora for 3 Days */}
        <div className="bg-[#071A2B] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7BCB9A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E8C66A] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#E8C66A]" />
                <span>Example Promotional Campaign</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#FFFDF7] font-heading">
                “Try Milora for 3 Days.”
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#F8F7F2]/80 max-w-xl leading-relaxed">
                Experience the difference of pure doorstep milk with zero long-term commitment. Test our punctuality, taste, and packaging at your door.
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-[#F8F7F2]/60">
                <Info className="w-3.5 h-3.5 text-[#E8C66A] shrink-0" />
                <span>
                  Sample campaign blueprint from startup marketing framework. Activated per route availability.
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onStartTrial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#071A2B] bg-[#7BCB9A] hover:bg-[#6ec28f] active:scale-95 rounded-2xl shadow-xl shadow-[#7BCB9A]/20 transition-all cursor-pointer"
              >
                <span>Start Your 3-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
