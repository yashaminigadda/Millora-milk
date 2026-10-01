import React, { useState } from 'react';
import { MessageSquare, CheckCheck, Milk, Shield, Home, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Place Your Order',
      tagline: 'Instant WhatsApp or Web',
      desc: 'Customer orders through WhatsApp or website with preferred volume (500ml or 1L) and morning delivery slot.',
      icon: MessageSquare,
      highlight: 'Zero complex app installs',
      time: 'Evening / Previous Day'
    },
    {
      num: '02',
      title: 'Order Confirmed',
      tagline: 'Instant Automated Route Tagging',
      desc: 'Milora confirms quantity and delivery details, locking in your morning delivery slot on the local neighbourhood route.',
      icon: CheckCheck,
      highlight: 'Delivery schedule locked',
      time: 'Instant Response'
    },
    {
      num: '03',
      title: 'Milk Sourced',
      tagline: 'Reliable Local Partner',
      desc: 'Fresh milk is collected at dawn from verified, vetted local suppliers and ethical dairy partners.',
      icon: Milk,
      highlight: 'Pure fresh batch collection',
      time: '4:30 AM – 5:00 AM'
    },
    {
      num: '04',
      title: 'Packed Safely',
      tagline: 'Food-Grade Hygiene Standard',
      desc: 'Milk is inspected and packed using suitable food-grade, leak-proof packaging with tamper-evident sealing.',
      icon: Shield,
      highlight: 'Hygienic sealed pouches',
      time: '5:00 AM – 5:30 AM'
    },
    {
      num: '05',
      title: 'Delivered Home',
      tagline: 'Direct Doorstep Arrival',
      desc: 'Milk reaches the customer’s doorstep in insulated bags before morning tea time.',
      icon: Home,
      highlight: 'Fresh milk ready for breakfast',
      time: '5:30 AM – 7:30 AM'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7BCB9A] uppercase tracking-wider mb-3">
            <span>5 Simple Steps</span>
            <span aria-hidden="true">·</span>
            <span>Reliable Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            How Milora Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            From evening WhatsApp confirmation to your doorstep before the kettle boils. Here is our 5-step daily routine.
          </p>
        </div>

        {/* 5-Step Process Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step List Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-white/15 to-white/5 border-[#7BCB9A] shadow-lg'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-mono transition-colors ${
                        isActive
                          ? 'bg-[#7BCB9A] text-[#071A2B]'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#FFFDF7] font-heading">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#F8F7F2]/60 mt-0.5">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#7BCB9A] translate-x-1' : 'text-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Step Deep Dive Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7BCB9A]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#E8C66A] tracking-wider uppercase">
                    STEP {steps[activeStepIndex].num} / 05
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFDF7] font-heading mt-1">
                    {steps[activeStepIndex].title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-white/50 block">Timing Window</span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#7BCB9A]">
                    {steps[activeStepIndex].time}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#F8F7F2]/90 leading-relaxed mb-8">
                {steps[activeStepIndex].desc}
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7BCB9A]/20 flex items-center justify-center text-[#7BCB9A] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white uppercase tracking-wide">
                      Standard
                    </h5>
                    <p className="text-xs text-[#F8F7F2]/75 mt-0.5">
                      {steps[activeStepIndex].highlight}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8C66A]/20 flex items-center justify-center text-[#E8C66A] shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white uppercase tracking-wide">
                      Quality Check
                    </h5>
                    <p className="text-xs text-[#F8F7F2]/75 mt-0.5">
                      Verified handling & cold chain protection
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress bar along bottom */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Progress: {((activeStepIndex + 1) / 5) * 100}%</span>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStepIndex
                          ? 'w-6 bg-[#7BCB9A]'
                          : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
