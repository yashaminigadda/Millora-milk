/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IntroCinematic } from './components/IntroCinematic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsStrip } from './components/StatsStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionFlow } from './components/SolutionFlow';
import { HowItWorks } from './components/HowItWorks';
import { OurMilk } from './components/OurMilk';
import { PackagingSection } from './components/PackagingSection';
import { BusinessModel } from './components/BusinessModel';
import { InvestmentSection } from './components/InvestmentSection';
import { CalculatorSection } from './components/CalculatorSection';
import { PricingExplanation } from './components/PricingExplanation';
import { TargetCustomers } from './components/TargetCustomers';
import { WhyMilora } from './components/WhyMilora';
import { MarketingStrategy } from './components/MarketingStrategy';
import { GrowthRoadmap } from './components/GrowthRoadmap';
import { SubscriptionSection } from './components/SubscriptionSection';
import { WhatsAppOrdering } from './components/WhatsAppOrdering';
import { CustomerTrust } from './components/CustomerTrust';
import { ComplianceSection } from './components/ComplianceSection';
import { BusinessTransparency } from './components/BusinessTransparency';
import { FutureVision } from './components/FutureVision';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { AdminDashboard } from './components/AdminDashboard';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Product } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenOrderModal = (product?: Product) => {
    setSelectedProduct(product || null);
    setIsOrderModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#17212B] font-sans antialiased selection:bg-[#7BCB9A]/30 selection:text-[#071A2B] milk-cursor">
      {/* Cinematic Opening on first load */}
      {showIntro && <IntroCinematic onComplete={() => setShowIntro(false)} />}

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 6. Hero Section */}
        <HeroSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 7. Live Business Snapshot */}
        <StatsStrip />

        {/* 8. The Problem */}
        <ProblemSection />

        {/* 9. Our Solution */}
        <SolutionFlow />

        {/* 10. How Milora Works */}
        <HowItWorks />

        {/* 11. Our Milk */}
        <OurMilk onSelectProduct={(prod) => handleOpenOrderModal(prod)} />

        {/* 12. Packaging Section */}
        <PackagingSection />

        {/* 13. Business Model */}
        <BusinessModel />

        {/* 14. ₹10,000 Starting Investment */}
        <InvestmentSection />

        {/* 15. 50-Litre Business Calculator */}
        <CalculatorSection />

        {/* 16. Why ₹65/Litre? */}
        <PricingExplanation />

        {/* 17. Target Customers */}
        <TargetCustomers />

        {/* 18. Why Choose Milora? */}
        <WhyMilora />

        {/* 19. Marketing Strategy */}
        <MarketingStrategy onStartTrial={() => handleOpenOrderModal()} />

        {/* 20. Growth Roadmap */}
        <GrowthRoadmap />

        {/* 21. Monthly Subscription */}
        <SubscriptionSection onSuccess={triggerToast} />

        {/* 22. WhatsApp Ordering */}
        <WhatsAppOrdering />

        {/* 23. Customer Trust */}
        <CustomerTrust />

        {/* 24. Safety & Compliance */}
        <ComplianceSection />

        {/* 25. Business Transparency */}
        <BusinessTransparency />

        {/* 26. Future Vision */}
        <FutureVision />

        {/* 27. FAQ */}
        <FaqSection />

        {/* 28. Contact */}
        <ContactSection onSuccess={triggerToast} />

        {/* 39. Final Call to Action */}
        <FinalCta
          onOpenOrderModal={() => handleOpenOrderModal()}
          onTalkToMilora={() => scrollToSection('contact')}
        />
      </main>

      {/* 29. Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Sticky Bottom Bar for Mobile (< 15% viewport height) */}
      <MobileStickyBar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProduct={selectedProduct}
        onOrderSuccess={triggerToast}
      />

      {/* Admin Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Floating Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-16 md:bottom-8 right-4 md:right-8 z-50 bg-[#071A2B] text-white p-4 rounded-2xl shadow-2xl border border-[#7BCB9A]/40 flex items-center gap-3 max-w-md animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-[#7BCB9A] shrink-0" />
          <p className="text-xs sm:text-sm font-medium leading-tight flex-1">
            {toastMessage}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 rounded-lg text-white/50 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
