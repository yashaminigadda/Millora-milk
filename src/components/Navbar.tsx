import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MiloraLogo } from './MiloraLogo';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Milk', href: '#our-milk' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Why Milora', href: '#why-milora' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#071A2B]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-xl py-3 text-white'
            : 'bg-[#071A2B] text-white py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single element wordmark with official Cow+Leaf emblem */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <MiloraLogo size="md" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links with gold hover */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Hidden admin trigger for business operations */}
            <button
              onClick={onOpenAdmin}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F5D77F] hover:text-white bg-white/5 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              title="Open Startup Business & Delivery Management Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Admin Portal</span>
            </button>

            {/* Primary CTA with Premium Gold Finish */}
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#071A2B] gold-gradient-bg hover:brightness-110 active:scale-95 rounded-xl transition-all shadow-md shadow-[#D4AF37]/25 whitespace-nowrap cursor-pointer border border-[#FFFDF7]/40"
            >
              <span>Order Milk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-[#D4AF37] rounded-xl bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden pt-20 bg-[#071A2B]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              Navigation
            </p>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-[#D4AF37] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#F5D77F] bg-white/5 border border-[#D4AF37]/30 rounded-xl"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Open Admin Dashboard</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#071A2B] gold-gradient-bg rounded-xl shadow-lg"
            >
              <span>Order Fresh Milk Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
