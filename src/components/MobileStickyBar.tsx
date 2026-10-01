import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { getWhatsAppNumber } from '../services/storage';

interface MobileStickyBarProps {
  onOpenOrderModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenOrderModal }) => {
  const whatsappNum = getWhatsAppNumber().replace(/[^0-9]/g, '');

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNum}?text=Hi%20Milora%2C%20I%20want%20to%20order%20milk.`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#071A2B]/95 backdrop-blur-md border-t border-[#D4AF37]/40 p-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 rounded-2xl bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#D4AF37]/40 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={onOpenOrderModal}
          className="flex-2 py-3 px-4 rounded-2xl gold-gradient-bg text-[#071A2B] font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#D4AF37]/25 active:scale-95 transition-all border border-[#FFFDF7]/40"
        >
          <span>Order Fresh Milk</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
