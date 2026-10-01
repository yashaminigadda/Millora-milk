import React, { useState } from 'react';
import { Calculator, RotateCcw, Info, TrendingUp, IndianRupee, ArrowRight, Sparkles } from 'lucide-react';
import { CalculatorInputs, CalculatorOutputs } from '../types';

export const CalculatorSection: React.FC = () => {
  const defaultInputs: CalculatorInputs = {
    litresPerDay: 50,
    purchaseCostPerLitre: 56,
    packagingCostPerPack: 2,
    deliveryCostPerDay: 150,
    sellingPricePerLitre: 65,
    operatingDays: 30
  };

  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);

  const calculateOutputs = (vals: CalculatorInputs): CalculatorOutputs => {
    const dailyMilkCost = vals.litresPerDay * vals.purchaseCostPerLitre;
    const dailyPackagingCost = vals.litresPerDay * vals.packagingCostPerPack;
    const dailyDeliveryCost = vals.deliveryCostPerDay;
    const totalDailyCost = dailyMilkCost + dailyPackagingCost + dailyDeliveryCost;
    
    const dailyRevenue = vals.litresPerDay * vals.sellingPricePerLitre;
    const estimatedDailyProfit = dailyRevenue - totalDailyCost;
    const estimatedMonthlyProfit = estimatedDailyProfit * vals.operatingDays;
    const monthlyRevenue = dailyRevenue * vals.operatingDays;
    const monthlyTotalCost = totalDailyCost * vals.operatingDays;
    const profitMarginPercent = dailyRevenue > 0 ? (estimatedDailyProfit / dailyRevenue) * 100 : 0;

    return {
      dailyMilkCost,
      dailyPackagingCost,
      dailyDeliveryCost,
      totalDailyCost,
      dailyRevenue,
      estimatedDailyProfit,
      estimatedMonthlyProfit,
      monthlyRevenue,
      monthlyTotalCost,
      profitMarginPercent
    };
  };

  const outputs = calculateOutputs(inputs);

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#FFFDF7] text-[#13202E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Gold Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#996515] font-bold">Interactive Model</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#071A2B] font-bold">Unit Economics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
              50-Litre Business Calculator
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Simulate daily costs, revenue, and estimated monthly profit based on your neighborhood operating parameters.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#071A2B] bg-white hover:bg-[#F8F7F2] border border-[#D4AF37]/50 rounded-2xl transition-all cursor-pointer shadow-xs self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#996515]" />
            <span>Reset 50L Defaults</span>
          </button>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <h3 className="text-lg font-bold text-[#071A2B] font-heading flex items-center justify-between">
              <span>Operating Parameters</span>
              <span className="text-xs font-mono font-bold text-[#996515] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-md">
                Live Adjustment
              </span>
            </h3>

            {/* Slider 1: Litres Per Day */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-[#071A2B]">
                <label htmlFor="litres-slider">Daily Milk Volume</label>
                <span className="font-mono font-black bg-white px-3 py-1 rounded-xl border border-[#D4AF37]/50 text-[#071A2B] shadow-2xs">
                  {inputs.litresPerDay} Litres/day
                </span>
              </div>
              <input
                id="litres-slider"
                type="range"
                min="10"
                max="300"
                step="5"
                value={inputs.litresPerDay}
                onChange={(e) => setInputs({ ...inputs, litresPerDay: Number(e.target.value) })}
                className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>10 L</span>
                <span className="font-bold text-[#996515]">50 L (Benchmark)</span>
                <span>300 L</span>
              </div>
            </div>

            {/* Inputs Grid: Costs & Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Purchase Cost */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Milk Purchase Cost (₹/L)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-mono text-slate-400">₹</span>
                  <input
                    type="number"
                    min="40"
                    max="80"
                    value={inputs.purchaseCostPerLitre}
                    onChange={(e) => setInputs({ ...inputs, purchaseCostPerLitre: Number(e.target.value) })}
                    className="w-full font-mono font-bold text-base text-[#071A2B] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Selling Price */}
              <div className="bg-white p-4 rounded-2xl border-2 border-[#D4AF37] shadow-xs">
                <label className="text-xs text-[#996515] font-bold block mb-1">
                  Selling Price (₹/L)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-mono text-[#D4AF37] font-bold">₹</span>
                  <input
                    type="number"
                    min="50"
                    max="100"
                    value={inputs.sellingPricePerLitre}
                    onChange={(e) => setInputs({ ...inputs, sellingPricePerLitre: Number(e.target.value) })}
                    className="w-full font-mono font-black text-base text-[#071A2B] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Packaging Cost */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Packaging Cost (₹/pack)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-mono text-slate-400">₹</span>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    step="0.5"
                    value={inputs.packagingCostPerPack}
                    onChange={(e) => setInputs({ ...inputs, packagingCostPerPack: Number(e.target.value) })}
                    className="w-full font-mono font-bold text-base text-[#071A2B] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Delivery Cost */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Daily Delivery Cost (₹/day)
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-mono text-slate-400">₹</span>
                  <input
                    type="number"
                    min="50"
                    max="500"
                    step="10"
                    value={inputs.deliveryCostPerDay}
                    onChange={(e) => setInputs({ ...inputs, deliveryCostPerDay: Number(e.target.value) })}
                    className="w-full font-mono font-bold text-base text-[#071A2B] focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Operating Days */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-xs font-bold text-[#071A2B] block">Operating Days / Month</span>
                <span className="text-[11px] text-slate-500">Standard monthly billing cycle</span>
              </div>
              <div className="flex items-center gap-2">
                {[26, 30].map(days => (
                  <button
                    key={days}
                    onClick={() => setInputs({ ...inputs, operatingDays: days })}
                    className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                      inputs.operatingDays === days
                        ? 'bg-[#071A2B] text-[#D4AF37] border-[#071A2B] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Results & Formulas */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-b from-[#0B2239] to-[#071A2B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/50 relative overflow-hidden">
              
              {/* Top Result Banner with Gold Highlights */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#F5D77F] uppercase tracking-wider font-mono">
                    Estimated Monthly Profit
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono-data gold-gradient-text mt-1">
                    ₹{Math.round(outputs.estimatedMonthlyProfit).toLocaleString()}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-white/50 block font-mono">Daily Net Profit</span>
                  <span className="text-xl font-bold font-mono-data text-[#F5D77F]">
                    ₹{Math.round(outputs.estimatedDailyProfit).toLocaleString()} / day
                  </span>
                </div>
              </div>

              {/* Step-by-Step Breakdown matching presentation formulas */}
              <div className="space-y-3 font-mono-data text-xs sm:text-sm">
                
                {/* 1. Milk Cost */}
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">
                    Milk Cost ({inputs.litresPerDay} × ₹{inputs.purchaseCostPerLitre})
                  </span>
                  <span className="font-semibold text-white">
                    ₹{outputs.dailyMilkCost.toLocaleString()}
                  </span>
                </div>

                {/* 2. Packaging */}
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">
                    Packaging ({inputs.litresPerDay} × ₹{inputs.packagingCostPerPack})
                  </span>
                  <span className="font-semibold text-white">
                    ₹{outputs.dailyPackagingCost.toLocaleString()}
                  </span>
                </div>

                {/* 3. Delivery */}
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">Delivery Overhead / Day</span>
                  <span className="font-semibold text-white">
                    ₹{outputs.dailyDeliveryCost.toLocaleString()}
                  </span>
                </div>

                {/* 4. Total Daily Cost */}
                <div className="flex items-center justify-between py-2 border-b border-white/15 text-white font-bold">
                  <span className="text-[#F5D77F]">Total Daily Cost</span>
                  <span className="text-[#F5D77F]">₹{outputs.totalDailyCost.toLocaleString()}</span>
                </div>

                {/* 5. Daily Revenue */}
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">
                    Daily Revenue ({inputs.litresPerDay} × ₹{inputs.sellingPricePerLitre})
                  </span>
                  <span className="font-bold text-[#D4AF37]">
                    ₹{outputs.dailyRevenue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Monthly Summary Strip with Gold Border */}
              <div className="mt-6 bg-white/5 border border-[#D4AF37]/30 rounded-2xl p-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-[11px] text-white/50 block font-mono">Monthly Revenue</span>
                  <span className="text-base font-bold font-mono-data text-white">
                    ₹{outputs.monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-white/50 block font-mono">Estimated Profit Margin</span>
                  <span className="text-base font-black font-mono-data text-[#D4AF37]">
                    {outputs.profitMarginPercent.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* MANDATORY PROMINENT DISCLAIMER NOTE */}
            <div className="bg-amber-50/90 border-2 border-[#D4AF37]/50 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950 shadow-xs">
              <Info className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-[#996515]">Important Notice:</strong> Example calculation only. Actual profit depends on local milk cost, packaging, transportation, wastage, selling price and demand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
