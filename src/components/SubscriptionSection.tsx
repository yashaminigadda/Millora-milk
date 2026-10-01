import React, { useState } from 'react';
import { Calendar, Clock, Check, ArrowRight, ShieldCheck, Sparkles, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveSubscription } from '../services/storage';

interface SubscriptionSectionProps {
  onSuccess: (message: string) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ onSuccess }) => {
  const [portion, setPortion] = useState<'500ml' | '1l'>('1l');
  const [duration, setDuration] = useState<7 | 30>(30);
  const [deliverySlot, setDeliverySlot] = useState<string>('6:00 AM – 7:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pricing math: 500ml = ₹33, 1L = ₹65
  const pricePerUnit = portion === '500ml' ? 33 : 65;
  const quantityPerDay = portion === '500ml' ? 0.5 : 1.0;
  const totalLitres = quantityPerDay * duration;
  const estimatedBill = pricePerUnit * duration;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const today = new Date();
      const end = new Date(today);
      end.setDate(today.getDate() + duration);

      saveSubscription({
        customerName: name,
        phone,
        address,
        location: address.split(',')[0] || 'Local Area',
        quantityPerDay,
        durationDays: duration,
        startDate: today.toISOString().split('T')[0],
        endDate: end.toISOString().split('T')[0],
        deliverySlot,
        status: 'Active',
        totalBill: estimatedBill
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F5D77F', '#4EAB6E', '#071A2B']
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccess(`Subscription request for ${name} (${portion.toUpperCase()}, ${duration} Days) successfully scheduled!`);
    }, 400);
  };

  return (
    <section id="subscription" className="py-20 md:py-28 bg-[#FFFDF7] text-[#13202E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Kicker */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-[#996515] font-bold">Automated Morning Supply</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#071A2B]">Pause & Modify Anytime</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            Your Milk, Every Day.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Choose your daily portion and preferred duration. We deliver pure fresh milk to your doorstep without daily follow-ups.
          </p>
        </div>

        {/* Subscription Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-7 bg-[#F8F7F2] border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-md">
            
            {/* Step 1: Select Portion */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                01. Choose Daily Volume
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPortion('500ml')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    portion === '500ml'
                      ? 'bg-white border-2 border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/20'
                      : 'bg-white/70 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#071A2B]">
                      <Droplets className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071A2B]">500 ML / Day</h4>
                      <p className="text-xs text-slate-500">₹33 per pack</p>
                    </div>
                  </div>
                  {portion === '500ml' && <Check className="w-5 h-5 text-[#D4AF37]" />}
                </button>

                <button
                  type="button"
                  onClick={() => setPortion('1l')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    portion === '1l'
                      ? 'bg-white border-2 border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/20'
                      : 'bg-white/70 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#071A2B] flex items-center justify-center text-white">
                      <Droplets className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071A2B]">1 Litre / Day</h4>
                      <p className="text-xs text-slate-500">₹65 per pack (Standard)</p>
                    </div>
                  </div>
                  {portion === '1l' && <Check className="w-5 h-5 text-[#D4AF37]" />}
                </button>
              </div>
            </div>

            {/* Step 2: Select Duration */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                02. Select Subscription Duration
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDuration(7)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    duration === 7
                      ? 'bg-[#071A2B] text-[#D4AF37] border-2 border-[#D4AF37] shadow-md font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base font-bold font-mono block">7 Days</span>
                  <span className="text-xs opacity-80">1-Week Routine</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDuration(30)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    duration === 30
                      ? 'bg-[#071A2B] text-[#D4AF37] border-2 border-[#D4AF37] shadow-md font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base font-bold font-mono block">30 Days</span>
                  <span className="text-xs opacity-80">Full Month Habit</span>
                </button>
              </div>
            </div>

            {/* Step 3: Preferred Delivery Window */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                03. Morning Delivery Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['5:30 AM – 6:30 AM', '6:00 AM – 7:00 AM', '6:30 AM – 7:30 AM'].map(slot => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setDeliverySlot(slot)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      deliverySlot === slot
                        ? 'bg-white border-2 border-[#D4AF37] text-[#071A2B] shadow-xs'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Information Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
              <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                04. Delivery Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Apartment / Flat / Door Number & Street *"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
                />
              </div>

              {isSuccess ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-emerald-900 text-xs sm:text-sm font-bold">
                  ✓ Subscription Request Received! We will send a confirmation message on WhatsApp with your first morning delivery schedule.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-base gold-gradient-bg text-[#071A2B] hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 cursor-pointer border border-[#FFFDF7]/40"
                >
                  <span>{isSubmitting ? 'Scheduling...' : 'Start Subscription'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

          {/* Right: Summary Card with Gold Accents */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#0B2239] to-[#071A2B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/50 relative">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#F5D77F] uppercase tracking-wider font-mono">
                    Subscription Summary
                  </span>
                  <h3 className="text-2xl font-bold text-[#FFFDF7] font-heading mt-1">
                    {portion === '500ml' ? '500 ML Daily' : '1 Litre Daily'}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/50 block font-mono">Duration</span>
                  <span className="text-lg font-bold font-mono text-[#D4AF37]">{duration} Days</span>
                </div>
              </div>

              <div className="space-y-4 font-mono-data text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">Total Milk Volume</span>
                  <span className="font-semibold text-white">{totalLitres} Litres</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">Delivery Timing</span>
                  <span className="font-semibold text-white">{deliverySlot}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-[#F8F7F2]/75">Delivery Charges</span>
                  <span className="font-bold text-[#4EAB6E]">FREE (Included)</span>
                </div>

                <div className="flex justify-between py-3 border-t border-white/20 text-base font-bold">
                  <span className="text-[#F5D77F]">Estimated Total Bill</span>
                  <span className="text-3xl font-black gold-gradient-text">₹{estimatedBill.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-[#F8F7F2]/75">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>No upfront online payment required (UPI / COD on delivery)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pause or resume subscription anytime via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
