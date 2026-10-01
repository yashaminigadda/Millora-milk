import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Droplets, ShieldCheck } from 'lucide-react';
import { INITIAL_PRODUCTS } from '../services/storage';
import { Product } from '../types';
import { MiloraLogo } from './MiloraLogo';

interface OurMilkProps {
  onSelectProduct: (product: Product) => void;
}

export const OurMilk: React.FC<OurMilkProps> = ({ onSelectProduct }) => {
  const [selectedSize, setSelectedSize] = useState<'all' | '500ml' | '1l'>('all');

  const filteredProducts = selectedSize === 'all'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter(p => selectedSize === '500ml' ? p.volumeMl === 500 : p.volumeMl === 1000);

  return (
    <section id="our-milk" className="py-20 md:py-28 bg-[#FFFDF7] text-[#13202E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#996515] font-bold">Pure Farm Sourced</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#4EAB6E] font-bold">Dawn Fresh Milk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
              Our Milk
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Carefully collected and hygienically packaged fresh milk in two practical household portions.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#F8F7F2] border border-slate-200 rounded-2xl self-start md:self-auto shadow-2xs">
            <button
              onClick={() => setSelectedSize('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedSize === 'all'
                  ? 'bg-[#071A2B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#071A2B]'
              }`}
            >
              All Packs
            </button>
            <button
              onClick={() => setSelectedSize('500ml')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedSize === '500ml'
                  ? 'bg-[#071A2B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#071A2B]'
              }`}
            >
              500 ML
            </button>
            <button
              onClick={() => setSelectedSize('1l')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedSize === '1l'
                  ? 'bg-[#071A2B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#071A2B]'
              }`}
            >
              1 Litre (Flagship)
            </button>
          </div>
        </div>

        {/* 2 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                product.popular
                  ? 'border-2 border-[#D4AF37] shadow-xl ring-2 ring-[#D4AF37]/20'
                  : 'border border-slate-200 shadow-md hover:border-[#D4AF37]/50'
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 right-0 gold-gradient-bg text-[#071A2B] text-[11px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular Household Choice</span>
                </div>
              )}

              <div>
                {/* Visual Representation */}
                <div className="w-full h-52 bg-gradient-to-b from-[#FCFBF7] to-[#F5F2EA] rounded-2xl flex items-center justify-center relative mb-6 border border-slate-200 overflow-hidden group">
                  {/* Gold decorative aura */}
                  <div className="absolute w-36 h-36 rounded-full bg-[#D4AF37]/15 blur-xl group-hover:scale-125 transition-transform" />

                  {/* Illustrated Packaging with Cow Logo */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-32 bg-white border-2 border-[#D4AF37]/70 rounded-2xl shadow-lg flex flex-col items-center p-2 relative">
                      <div className="w-10 h-2 bg-[#071A2B] rounded-t-sm mb-1" />
                      <div className="w-full bg-[#071A2B] rounded-xl p-2 flex flex-col items-center text-center my-auto">
                        <MiloraLogo variant="icon" size="sm" />
                        <span className="text-[10px] font-black text-white mt-1">MILORA</span>
                        <span className="text-[8px] font-bold text-[#D4AF37] uppercase">{product.quantityLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Freshness Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-[#D4AF37]/40 px-3 py-1 rounded-xl text-[11px] font-bold text-[#071A2B] flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#4EAB6E]" />
                    <span>Pure Food-Grade Sealed</span>
                  </div>
                </div>

                {/* Header & Pricing */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#071A2B] font-heading">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#071A2B] font-mono-data">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-slate-500 block font-medium">/ pack</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 border-t border-slate-100 pt-5 mb-8">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#4EAB6E]/20 flex items-center justify-center text-[#4EAB6E] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProduct(product)}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  product.popular
                    ? 'gold-gradient-bg text-[#071A2B] hover:brightness-110 active:scale-98 shadow-[#D4AF37]/25'
                    : 'bg-[#071A2B] text-white hover:bg-[#0c2842] active:scale-98'
                }`}
              >
                <span>Order {product.quantityLabel} Pack</span>
                <ArrowRight className={`w-4 h-4 ${product.popular ? 'text-[#071A2B]' : 'text-[#D4AF37]'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
