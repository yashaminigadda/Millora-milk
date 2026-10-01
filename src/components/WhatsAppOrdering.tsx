import React, { useState } from 'react';
import { MessageSquare, Send, CheckCheck, Phone, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { getWhatsAppNumber } from '../services/storage';

export const WhatsAppOrdering: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('Hi Milora, I need 1 Litre fresh milk delivered daily.');
  const [whatsappNum, setWhatsappNum] = useState(getWhatsAppNumber());

  const handleLaunchWhatsApp = () => {
    const cleanNumber = whatsappNum.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(customMsg);
    const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Kicker */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-[#F5D77F]">Instant Ordering</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-[#4EAB6E]">Zero App Friction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Order Directly on WhatsApp
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            No complex passwords, app downloads, or buggy wallets. A simple WhatsApp message sets up your morning milk delivery.
          </p>
        </div>

        {/* WhatsApp Simulation & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive WhatsApp Chat Simulation */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-lg bg-[#0c1f2f] border-2 border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* WhatsApp Header */}
              <div className="bg-[#054c44] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#071A2B] flex items-center justify-center font-black text-sm">
                    M
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Milora Milk Delivery</span>
                      <span className="w-2 h-2 rounded-full bg-[#4EAB6E]" />
                    </h4>
                    <span className="text-[10px] text-white/70 block">Official Support & Route Dispatch</span>
                  </div>
                </div>

                <span className="text-xs text-[#F5D77F] font-mono font-bold">Verified Business</span>
              </div>

              {/* Chat Conversation Body */}
              <div className="p-5 space-y-4 bg-[radial-gradient(#112e47_1px,transparent_1px)] [background-size:16px_16px] min-h-[260px] flex flex-col justify-end">
                
                {/* Bubble 1: Customer */}
                <div className="self-end bg-[#055c52] text-white rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] text-xs sm:text-sm shadow-sm">
                  <p>Hi Milora, I need 1 litre milk daily.</p>
                  <span className="text-[9px] text-emerald-200 float-right mt-1 ml-2 flex items-center gap-1">
                    08:14 PM <CheckCheck className="w-3 h-3 text-[#D4AF37]" />
                  </span>
                </div>

                {/* Bubble 2: Milora */}
                <div className="self-start bg-[#1f384c] text-[#F8F7F2] rounded-2xl rounded-tl-xs p-3.5 max-w-[85%] text-xs sm:text-sm shadow-sm">
                  <p>Sure! Please confirm your delivery location and preferred morning slot.</p>
                  <span className="text-[9px] text-white/50 float-right mt-1 ml-2">08:15 PM</span>
                </div>

                {/* Bubble 3: Customer */}
                <div className="self-end bg-[#055c52] text-white rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] text-xs sm:text-sm shadow-sm">
                  <p>Confirmed: Flat 402, Green Glen Layout. 6:30 AM slot please.</p>
                  <span className="text-[9px] text-emerald-200 float-right mt-1 ml-2 flex items-center gap-1">
                    08:15 PM <CheckCheck className="w-3 h-3 text-[#D4AF37]" />
                  </span>
                </div>

                {/* Bubble 4: Milora Confirmation */}
                <div className="self-start bg-[#1f384c] text-[#F8F7F2] rounded-2xl rounded-tl-xs p-3.5 max-w-[90%] text-xs sm:text-sm shadow-sm border border-[#D4AF37]/40">
                  <div className="flex items-center gap-1.5 text-[#F5D77F] font-bold mb-1">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Order Confirmed · Route Locked</span>
                  </div>
                  <p className="text-white/90">
                    Your fresh 1 Litre pack is scheduled for tomorrow at 6:30 AM. Insulated doorstep delivery.
                  </p>
                  <span className="text-[9px] text-white/50 float-right mt-1 ml-2">08:16 PM</span>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[#081827] border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Type your milk order..."
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-hidden focus:border-[#D4AF37]"
                />
                <button
                  onClick={handleLaunchWhatsApp}
                  className="p-2.5 rounded-xl gold-gradient-bg text-[#071A2B] hover:brightness-110 transition-all cursor-pointer font-bold"
                  title="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Launcher Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#0B2239] to-[#071A2B] border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-mono font-bold text-[#F5D77F] uppercase tracking-wider block mb-2">
                Direct Dispatch Link
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFDF7] font-heading">
                One Click to Fresh Morning Milk
              </h3>

              <p className="text-sm text-[#F8F7F2]/80 mt-3 leading-relaxed">
                Connect with our neighborhood delivery coordinator directly. Send pauses, quantity upgrades, or holiday dates with zero hassle.
              </p>

              {/* Configurable Number Display with Gold Highlight */}
              <div className="my-6 bg-white/5 border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-white/50 block font-mono">Milora WhatsApp Number</span>
                  <span className="text-base font-bold font-mono text-[#F5D77F]">{whatsappNum}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              {/* Direct Launch CTA with Gold Gradient */}
              <button
                onClick={handleLaunchWhatsApp}
                className="w-full py-4 px-6 rounded-2xl font-bold text-base gold-gradient-bg text-[#071A2B] hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2.5 cursor-pointer border border-[#FFFDF7]/40"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Order on WhatsApp Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
