import React from 'react';
import { TrendingUp, Info, IndianRupee, Layers, PackageCheck, Sparkles } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      id: 'investment',
      label: 'Starting Investment',
      value: '₹10,000',
      subtitle: 'Low barrier lean launch model',
      icon: IndianRupee,
      tag: 'Example Model'
    },
    {
      id: 'volume',
      label: 'Example Daily Volume',
      value: '50 L/day',
      subtitle: 'Target 1st micro-route density',
      icon: Layers,
      tag: 'Operating Scale'
    },
    {
      id: 'price',
      label: 'Example Selling Price',
      value: '₹65 / L',
      subtitle: 'Market competitive fair rate',
      icon: PackageCheck,
      tag: 'Fair Pricing'
    },
    {
      id: 'profit',
      label: 'Estimated Monthly Profit',
      value: '₹6,000',
      subtitle: '30-day operating projection',
      icon: TrendingUp,
      tag: 'Projection',
      highlight: true
    }
  ];

  return (
    <section className="bg-[#061624] text-white border-y border-[#D4AF37]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        {/* Transparent Disclaimer Banner with Gold Info Icon */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-2 text-xs text-[#F8F7F2]/75 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#D4AF37]" />
            <span>
              <strong className="text-white font-semibold">Business Model Snapshot:</strong> All figures shown below are illustrative example benchmarks from the startup presentation.
            </span>
          </div>
          <span className="text-[#F5D77F] font-bold font-mono">Estimated Projections · Not Guaranteed Returns</span>
        </div>

        {/* 4 Statistical Cards Grid with Gold Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`p-6 rounded-3xl transition-all duration-300 relative overflow-hidden ${
                  stat.highlight
                    ? 'bg-gradient-to-b from-[#D4AF37]/25 via-white/5 to-white/5 border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15'
                    : 'bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.08]'
                }`}
              >
                {stat.highlight && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />
                )}

                <div className="flex items-center justify-between text-xs text-[#F8F7F2]/60 mb-2">
                  <span className="font-mono">{stat.tag}</span>
                  <div className={`p-1.5 rounded-lg ${stat.highlight ? 'bg-[#D4AF37] text-[#071A2B]' : 'bg-white/10 text-[#D4AF37]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-black tracking-tight font-mono-data ${stat.highlight ? 'gold-gradient-text' : 'text-white'}`}>
                  {stat.value}
                </div>

                <div className="mt-1.5 text-sm font-bold text-[#FFFDF7] font-heading">
                  {stat.label}
                </div>

                <div className="mt-1 text-xs text-[#F8F7F2]/70">
                  {stat.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
