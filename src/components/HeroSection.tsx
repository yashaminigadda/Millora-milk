import React from 'react';
import { ArrowRight, Droplets, ShieldCheck, Home, Sparkles, Clock, Sun, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MiloraLogo } from './MiloraLogo';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#071A2B] text-white overflow-hidden">
      {/* Background ambient gold & emerald lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#4EAB6E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Kicker with Gold Star Accent */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-4 px-3 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/40 shadow-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#F5D77F]">Direct Farm to Doorstep</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-[#4EAB6E] font-bold">Pure Nutrition Everyday</span>
            </div>

            {/* Headline with Gold Shimmer */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-[1.1] max-w-2xl text-balance">
              Fresh Milk.{' '}
              <span className="gold-gradient-text">
                Delivered to Your Door.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-[#F8F7F2]/85 leading-relaxed max-w-xl font-normal">
              Pure, safe and hygienically packed milk with simple ordering and convenient doorstep delivery every morning before breakfast.
            </p>

            {/* Dual CTAs with Gold and Navy styling */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#071A2B] gold-gradient-bg hover:brightness-110 active:scale-95 rounded-2xl transition-all shadow-xl shadow-[#D4AF37]/30 cursor-pointer border border-[#FFFDF7]/40"
              >
                <span>Order Milk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-2xl transition-all"
              >
                <span>Explore Milora</span>
              </a>
            </div>

            {/* 3 Circular Badges matching the brand image: Pure Fresh · Safe & Hygienic · Home Delivery */}
            <div className="mt-10 pt-8 border-t border-[#D4AF37]/20 w-full grid grid-cols-3 gap-3 text-center sm:text-left">
              {/* Badge 1: Pure Fresh */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B2239] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Droplets className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Pure Fresh</h4>
                  <span className="text-[10px] text-[#F5D77F] hidden sm:block">Farm Dawn Sourced</span>
                </div>
              </div>

              {/* Badge 2: Safe & Hygienic */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B2239] border border-[#4EAB6E]/40 flex items-center justify-center text-[#4EAB6E] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Safe & Hygienic</h4>
                  <span className="text-[10px] text-[#4EAB6E] hidden sm:block">Food-Grade Sealed</span>
                </div>
              </div>

              {/* Badge 3: Home Delivery */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B2239] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Home Delivery</h4>
                  <span className="text-[10px] text-[#F5D77F] hidden sm:block">By 7:30 AM Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Composition with Milora Glass Bottle & Glass of Milk */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer Gold Ring Frame */}
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#0b253d] to-[#071A2B] p-6 border-2 border-[#D4AF37]/40 shadow-2xl flex flex-col items-center justify-between overflow-hidden">
              
              {/* Background Farm Sunny Aura (Landscape representation) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#38bdf8]/15 via-[#4EAB6E]/10 to-transparent pointer-events-none" />

              {/* Top Banner Tag: Pure Nutrition Everyday */}
              <div className="w-full flex items-center justify-between text-xs z-10 pb-3 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-white/80">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>5:30 AM – 7:30 AM</span>
                </span>
                
                {/* Brand Callout */}
                <div className="flex items-center gap-1 text-[#F5D77F] font-bold text-[11px] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Pure Nutrition Everyday</span>
                </div>
              </div>

              {/* Central Milk Bottle + Glass Composition */}
              <div className="relative my-6 py-4 flex items-end justify-center gap-5 z-10">
                
                {/* 1. Fresh Glass of Pure Milk */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 sm:w-28 flex flex-col items-center"
                >
                  <div className="w-full h-36 bg-gradient-to-b from-white/95 via-[#FCFBF7] to-[#f4f2ea] rounded-b-xl rounded-t-xs border-2 border-white/80 shadow-2xl p-2 relative flex flex-col justify-between overflow-hidden">
                    {/* Top glass rim reflection */}
                    <div className="w-full h-1.5 bg-white rounded-full opacity-80" />
                    
                    {/* Milk Texture */}
                    <div className="my-auto text-center">
                      <Droplets className="w-5 h-5 text-[#38bdf8] mx-auto mb-1 opacity-60" />
                      <span className="text-[9px] font-bold text-[#071A2B] block uppercase tracking-wider">
                        Pure Milk
                      </span>
                    </div>

                    {/* Bottom glass base */}
                    <div className="w-full h-3 bg-white/40 rounded-b-lg border-t border-slate-200/50" />
                  </div>
                  <span className="text-[10px] font-bold text-[#F5D77F] mt-2">Daily Nutrition</span>
                </motion.div>

                {/* 2. Flagship Milora Glass Milk Bottle with Royal Blue Cap & Cow+Leaf Branding */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-36 sm:w-40 bg-gradient-to-b from-white/98 to-[#FCFBF7] rounded-3xl p-3 text-[#071A2B] shadow-2xl border-2 border-[#D4AF37] flex flex-col items-center relative"
                >
                  {/* Royal Navy Screw Cap */}
                  <div className="w-14 h-4 bg-[#071A2B] border border-[#D4AF37] rounded-t-md mb-1 flex items-center justify-center">
                    <span className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
                  </div>
                  
                  {/* Bottle Neck */}
                  <div className="w-10 h-5 bg-white/90 border-x border-slate-200" />
                  
                  {/* Bottle Body with Official Milora Cow+Leaf Label */}
                  <div className="w-full bg-[#FFFDF7] rounded-2xl p-3 border border-slate-200 flex flex-col items-center text-center shadow-inner relative overflow-hidden">
                    {/* Subtle Gold Ribbon Header */}
                    <div className="w-full bg-[#071A2B] text-[#D4AF37] text-[8px] font-mono font-bold py-0.5 rounded mb-2 flex items-center justify-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>PREMIUM GRADE</span>
                    </div>

                    {/* Cow + Leaf Logo */}
                    <div className="my-1">
                      <MiloraLogo variant="icon" size="sm" />
                    </div>

                    <span className="text-[12px] font-black tracking-tight text-[#071A2B] font-heading mt-0.5">
                      MILORA <span className="text-[#D4AF37]">MILK</span>
                    </span>
                    <span className="text-[8px] font-script text-[#071A2B]/80 leading-none">
                      Fresh Milk. Delivered to Your Door.
                    </span>

                    {/* Bottle Volume Tag */}
                    <div className="mt-3 w-full bg-[#071A2B] text-white text-[10px] font-black py-1 rounded-lg border border-[#D4AF37]/50 flex items-center justify-around">
                      <span>1 LITRE</span>
                      <span className="text-[#D4AF37] font-mono">₹65</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Wooden Pedestal & Mint Leaf representation */}
              <div className="w-full bg-gradient-to-r from-[#996515]/30 via-[#D4AF37]/20 to-[#996515]/30 rounded-2xl p-3 border border-[#D4AF37]/30 flex items-center justify-between text-xs z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4EAB6E] animate-ping" />
                  <span className="text-white font-medium">100% Food-Grade Tamper Sealed</span>
                </div>
                <span className="text-[#F5D77F] font-bold font-mono">ZERO PRESERVATIVES</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
