import React from 'react';
import { Milk, Droplets, Instagram, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { getWhatsAppNumber } from '../services/storage';
import { MiloraLogo } from './MiloraLogo';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const whatsappNum = getWhatsAppNumber();

  return (
    <footer className="bg-[#05121e] text-white border-t border-[#D4AF37]/30 pt-16 pb-20 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Milora Logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group cursor-pointer">
              <MiloraLogo size="lg" />
            </a>

            <p className="text-sm text-[#F8F7F2]/80 max-w-sm leading-relaxed font-script text-base text-[#F5D77F]">
              Fresh Milk. Delivered to Your Door.
            </p>

            <p className="text-xs text-[#D4AF37] font-semibold font-mono tracking-wide">
              Small Investment. Big Dreams. · Pure Nutrition Everyday
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-colors"
                aria-label="Milora WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@miloramilk.com"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-colors"
                aria-label="Email Milora"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-colors"
                aria-label="Milora Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F7F2]/75">
              <li><a href="#our-milk" className="hover:text-[#D4AF37] transition-colors">Our Milk (500ml & 1L)</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</a></li>
              <li><a href="#business-model" className="hover:text-[#D4AF37] transition-colors">Business Model</a></li>
              <li><a href="#calculator" className="hover:text-[#D4AF37] transition-colors">50-Litre Calculator</a></li>
              <li><a href="#subscription" className="hover:text-[#D4AF37] transition-colors">Monthly Subscription</a></li>
            </ul>
          </div>

          {/* Company & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#F5D77F] uppercase tracking-wider">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F7F2]/75">
              <li><a href="#why-milora" className="hover:text-[#D4AF37] transition-colors">Why Milora</a></li>
              <li><a href="#investment" className="hover:text-[#D4AF37] transition-colors">₹10,000 Allocation</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Safety & FSSAI Standards</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Route Coordinator</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Milora Milk. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Illustrative Startup Business Model</span>
            <button
              onClick={onOpenAdmin}
              className="text-[#D4AF37] hover:underline cursor-pointer font-semibold"
            >
              Route Admin Dashboard
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
