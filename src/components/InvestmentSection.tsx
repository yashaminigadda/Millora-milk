import React, { useState } from 'react';
import { IndianRupee, PieChart, Info, Check, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { InvestmentSegment } from '../types';

export const InvestmentSection: React.FC = () => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>('milk-capital');

  const segments: InvestmentSegment[] = [
    {
      id: 'milk-capital',
      title: 'Milk Working Capital',
      amount: 4000,
      percentage: 40,
      color: '#D4AF37', // Gold primary
      description: 'Daily cash reserves to buy fresh milk batches upfront from suppliers.',
      purpose: 'Ensures uninterrupted daily milk collection before customer evening settlement.',
      items: [
        'Initial 2-3 days advance milk inventory buffer',
        'Direct cash on collection from reliable dairy farms',
        'Zero debt morning procurement'
      ]
    },
    {
      id: 'delivery-bag',
      title: 'Delivery / Insulated Bag',
      amount: 1500,
      percentage: 15,
      color: '#F5D77F', // Gold light
      description: 'Thermal insulated backpack and food-grade delivery crates.',
      purpose: 'Preserves the cold chain and milk temperature during morning door-to-door transit.',
      items: [
        'Heavy-duty thermal insulated courier delivery backpack',
        'Reusable chilled gel ice pads for morning route',
        'Protective bottle/pouch divider slots'
      ]
    },
    {
      id: 'emergency-reserve',
      title: 'Emergency Reserve',
      amount: 1500,
      percentage: 15,
      color: '#E8C66A', // Butter gold
      description: 'Buffer capital reserved for unexpected operational needs or vehicle maintenance.',
      purpose: 'Safeguards business continuity against minor transit delays or route adjustments.',
      items: [
        'Vehicle fuel / puncture contingency reserve',
        'Spillage or damaged packet buffer',
        'Short-term liquidity protection'
      ]
    },
    {
      id: 'packaging-stickers',
      title: 'Packaging & Stickers',
      amount: 1000,
      percentage: 10,
      color: '#4EAB6E', // Fresh green
      description: 'Food-grade pouches, brand labels, seals, and batch date markers.',
      purpose: 'Provides professional, hygienic presentation that builds immediate consumer trust.',
      items: [
        '500ml and 1L food-grade milk pouches (500+ units)',
        'Tamper-evident waterproof Milora brand stickers',
        'Batch date stamping markers & sealing tool'
      ]
    },
    {
      id: 'marketing-flyers',
      title: 'Marketing / Flyers',
      amount: 1000,
      percentage: 10,
      color: '#38bdf8', // Sky blue
      description: 'Local neighborhood flyers, society notice inserts, and WhatsApp campaign setup.',
      purpose: 'Generates the initial 20–50 recurring customer base within a 2 km radius.',
      items: [
        '1,000 high-quality local apartment flyers',
        'Door-to-door trial promotion vouchers',
        'QR code stickers for instant WhatsApp subscription'
      ]
    },
    {
      id: 'transportation',
      title: 'Transportation',
      amount: 1000,
      percentage: 10,
      color: '#a78bfa', // Purple
      description: 'Fuel and route logistics for the first month of local deliveries.',
      purpose: 'Covers compact 2-wheeler fuel costs across the local delivery zone.',
      items: [
        '1 month fuel budget for 5–8 km daily morning route',
        'Route optimization map planning',
        'Zero heavy vehicle overhead'
      ]
    }
  ];

  const activeSegment = segments.find(s => s.id === activeSegmentId) || segments[0];
  const totalAmount = 10000;

  // SVG Donut calculation
  let cumulativeAngle = 0;
  const radius = 70;
  const strokeWidth = 28;
  const center = 100;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="investment" className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Gold Kicker */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-[#F5D77F]">Capital Allocation</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-[#D4AF37]">Pragmatic Startup Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            ₹10,000 Starting Investment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            A precise capital blueprint showing how a lean micro-dairy delivery business can launch with just ₹10,000.
          </p>
        </div>

        {/* Investment Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Donut Chart */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="bg-gradient-to-b from-white/10 to-white/5 border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 w-full max-w-md flex flex-col items-center relative shadow-2xl">
              
              {/* Donut SVG */}
              <div className="relative w-56 h-56 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  {segments.map((seg) => {
                    const strokeDasharray = `${(seg.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((cumulativeAngle / 100) * circumference);
                    cumulativeAngle += seg.percentage;
                    const isSelected = activeSegmentId === seg.id;

                    return (
                      <circle
                        key={seg.id}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="transparent"
                        stroke={seg.color}
                        strokeWidth={isSelected ? strokeWidth + 4 : strokeWidth}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        onClick={() => setActiveSegmentId(seg.id)}
                        className="cursor-pointer transition-all duration-300 hover:opacity-100 opacity-90"
                      />
                    );
                  })}
                </svg>

                {/* Donut Center Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-xs text-[#F8F7F2]/60 uppercase tracking-wider font-mono">Total Capital</span>
                  <span className="text-2xl font-black font-mono-data text-[#F5D77F]">₹10,000</span>
                  <span className="text-[10px] text-[#4EAB6E] font-bold">100% Allocated</span>
                </div>
              </div>

              {/* Segment Chips Bar */}
              <div className="grid grid-cols-2 gap-2 w-full mt-6">
                {segments.map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setActiveSegmentId(seg.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-left transition-all cursor-pointer border ${
                      activeSegmentId === seg.id
                        ? 'bg-white/20 border-[#D4AF37] text-white font-bold shadow-xs'
                        : 'bg-white/5 border-transparent text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: seg.color }}
                    />
                    <span className="truncate">{seg.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Category Deep Dive */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-b from-[#0B2239] to-[#071A2B] border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeSegment.color }}
                    />
                    <span className="text-xs font-mono font-bold text-[#F5D77F] uppercase tracking-wider">
                      ALLOCATION ({activeSegment.percentage}%)
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFDF7] font-heading mt-1">
                    {activeSegment.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-white/50 block font-mono">Assigned Amount</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono-data gold-gradient-text">
                    ₹{activeSegment.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Purpose & Description */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#F5D77F] uppercase tracking-wide">
                    Purpose & Operational Function:
                  </span>
                  <p className="text-sm sm:text-base text-[#F8F7F2]/90 mt-1 leading-relaxed">
                    {activeSegment.purpose}
                  </p>
                </div>
              </div>

              {/* Itemized Deliverables */}
              <div>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wide block mb-3">
                  Capital Utilization Breakdown:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSegment.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-[#F8F7F2]/85"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Model Benchmark: Small Investment. Big Dreams.</span>
                <span className="text-[#F5D77F] font-bold">Fixed Framework: ₹10,000 Total</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
