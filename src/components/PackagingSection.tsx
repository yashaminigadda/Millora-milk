import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, RotateCw, Layers, Calculator, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { MiloraLogo } from './MiloraLogo';

export const PackagingSection: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(15);
  const [packsPerDay, setPacksPerDay] = useState(50);
  const costPerPack = 2; // ₹2/pack example

  const dailyCost = packsPerDay * costPerPack;
  const monthlyCost = dailyCost * 30;

  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-[#F5D77F]">Food-Safety Standard</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-[#4EAB6E]">Hygiene Seal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Packed With Care.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            Clean handling and food-grade packaging ensure that pure fresh milk reaches homes in pristine, tamper-evident condition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive 3D Pouch Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 border-2 border-[#D4AF37]/40 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative">
              
              {/* Top status */}
              <div className="w-full flex items-center justify-between text-xs text-[#F8F7F2]/80 mb-6">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#4EAB6E]" />
                  <span>Tamper Evident</span>
                </span>
                <span className="text-[#F5D77F] font-bold font-mono">100% Food-Grade</span>
              </div>

              {/* 3D Interactive Rotating Milk Pouch with Official Milora Branding */}
              <div className="py-8 relative flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: rotationAngle }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="w-44 sm:w-52 h-72 bg-gradient-to-br from-[#FFFDF7] via-[#FCFBF7] to-[#e8e4d5] rounded-3xl p-4 text-[#071A2B] shadow-2xl border-2 border-[#D4AF37] flex flex-col justify-between relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  {/* Top Seal with Gold Stripe */}
                  <div className="w-full h-3 bg-[#071A2B] rounded-t-sm flex items-center justify-center border-b border-[#D4AF37]">
                    <span className="text-[7px] text-[#D4AF37] font-mono tracking-widest font-bold">MILORA HYGIENE SEAL</span>
                  </div>

                  {/* Brand & Artwork with Official Cow Logo */}
                  <div className="my-auto flex flex-col items-center text-center">
                    <MiloraLogo variant="icon" size="md" />
                    
                    <span className="text-base font-black tracking-tight text-[#071A2B] font-heading mt-1">
                      MILORA <span className="text-[#996515]">MILK</span>
                    </span>
                    <span className="text-[9px] font-script text-slate-700">
                      Fresh Milk. Delivered to Your Door.
                    </span>
                    <div className="mt-3 px-3.5 py-1 rounded-full bg-[#071A2B] text-[#D4AF37] text-[10px] font-black border border-[#D4AF37]/50 shadow-xs">
                      1 LITRE / 500 ML
                    </div>
                  </div>

                  {/* Bottom Safety Info */}
                  <div className="text-[8px] text-slate-600 border-t border-slate-300/80 pt-1.5 flex items-center justify-between font-medium">
                    <span>Pure Nutrition</span>
                    <span>100% Recyclable</span>
                  </div>
                </motion.div>
              </div>

              {/* Rotation Angle Slider Control */}
              <div className="w-full mt-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between text-xs text-[#F8F7F2]/80 mb-2">
                  <span className="flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Rotate Pouch Angle</span>
                  </span>
                  <span className="font-mono text-[#D4AF37] font-bold">{rotationAngle}°</span>
                </div>
                <input
                  type="range"
                  min="-60"
                  max="60"
                  value={rotationAngle}
                  onChange={(e) => setRotationAngle(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Packaging Highlights & Calculation Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Food-Grade Packaging</h4>
                <p className="text-xs text-[#F8F7F2]/70">Strict compliance with food-contact dairy standards.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Leak-Proof Sealing</h4>
                <p className="text-xs text-[#F8F7F2]/70">Ultrasonic heat-sealing prevents transit spills.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Hygienic Handling</h4>
                <p className="text-xs text-[#F8F7F2]/70">Insulated carry crates maintain cold chain.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Brand Labels & Date</h4>
                <p className="text-xs text-[#F8F7F2]/70">Clear batch tracking and freshness date stamping.</p>
              </div>
            </div>

            {/* Packaging Example Calculation Card with Gold Accent */}
            <div className="bg-gradient-to-br from-[#0B2239] to-[#071A2B] border-2 border-[#D4AF37]/50 rounded-3xl p-6 relative shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-base font-bold text-white font-heading">
                    Packaging Example Calculation
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#F5D77F] font-bold border border-[#D4AF37]/30">
                  Example Model
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center my-4">
                <div className="bg-black/30 rounded-2xl p-3.5 border border-white/10">
                  <span className="text-xs text-[#F8F7F2]/60 block mb-1">Unit Cost</span>
                  <span className="text-lg font-black font-mono-data text-[#F5D77F]">
                    ₹{costPerPack} <span className="text-xs font-normal">/ pack</span>
                  </span>
                </div>

                <div className="bg-black/30 rounded-2xl p-3.5 border border-white/10">
                  <span className="text-xs text-[#F8F7F2]/60 block mb-1">50 Packs / Day</span>
                  <span className="text-lg font-black font-mono-data text-white">
                    ₹{dailyCost} <span className="text-xs font-normal">/ day</span>
                  </span>
                </div>

                <div className="bg-black/30 rounded-2xl p-3.5 border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                  <span className="text-xs text-[#F8F7F2]/60 block mb-1">30 Days Total</span>
                  <span className="text-lg font-black font-mono-data text-[#D4AF37]">
                    ₹{monthlyCost.toLocaleString()} <span className="text-xs font-normal">/ mo</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#F8F7F2]/60 pt-3 border-t border-white/10">
                <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>
                  Clearly labeled example calculation from presentation benchmarks. Actual packaging costs vary by batch volume and local vendor contracts.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
