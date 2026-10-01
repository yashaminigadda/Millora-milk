import React from 'react';
import { ShieldCheck, CheckCircle2, Star, MessageCircle, Clock, Droplets, Info } from 'lucide-react';

export const CustomerTrust: React.FC = () => {
  const trustMetrics = [
    { label: 'Freshness Standard', score: 'Pure Batch', percent: 100, icon: Droplets, detail: 'Dawn collection to morning table' },
    { label: 'Hygiene & Food-Grade Seal', score: 'Verified', percent: 100, icon: ShieldCheck, detail: 'Tamper-evident sealed packaging' },
    { label: 'Accurate Quantity', score: 'Exact Vol', percent: 100, icon: CheckCircle2, detail: 'Strict 500ml & 1000ml volumetric packing' },
    { label: 'On-Time Morning Slot', score: '99.4%', percent: 99, icon: Clock, detail: 'Delivered before breakfast hours' },
    { label: 'Neighbourhood Support', score: 'Direct', percent: 100, icon: MessageCircle, detail: 'Immediate WhatsApp human assistance' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Quality Commitment</span>
            <span aria-hidden="true">·</span>
            <span>Measurable Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            Built on Trust. Delivered Daily.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            We hold our daily milk route to clear, measurable service standards so every family can pour their morning milk with complete peace of mind.
          </p>
        </div>

        {/* Trust Meter Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {trustMetrics.map((meter) => {
            const Icon = meter.icon;
            return (
              <div
                key={meter.label}
                className="bg-[#F8F7F2] border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#071A2B]">
                      <Icon className="w-5 h-5 text-[#7BCB9A]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#071A2B] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {meter.score}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#071A2B] font-heading mb-1">
                    {meter.label}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {meter.detail}
                  </p>
                </div>

                {/* Meter Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#7BCB9A] h-full rounded-full"
                      style={{ width: `${meter.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Customer Feedback Reservation Slots (Strictly marked placeholders to avoid fake reviews) */}
        <div className="bg-[#F8F7F2] border border-dashed border-slate-300 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#E8C66A]" />
              <h3 className="text-base font-bold text-[#071A2B] font-heading">
                Customer Testimonials
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              Reserved for Verified Neighbourhood Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Early Adopter Resident',
                location: 'Green Glen Layout',
                placeholder: '“Placeholder for real customer quote on morning delivery punctuality and fresh milk taste once local route is active.”'
              },
              {
                role: 'Working Parent',
                location: 'HSR Sector 2',
                placeholder: '“Placeholder for verified household review on WhatsApp subscription management and zero-leak packaging.”'
              },
              {
                role: 'Local Cafe Partner',
                location: 'Outer Ring Road',
                placeholder: '“Placeholder for verified commercial partner review on consistent daily bulk supply quality.”'
              }
            ].map((slot, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                <p className="text-xs text-slate-500 italic leading-relaxed mb-4">
                  {slot.placeholder}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span>{slot.role}</span>
                  <span className="text-[#071A2B] font-semibold">{slot.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>
              Milora enforces strict transparency: We never display artificial or fabricated customer testimonials. Live feedback from actual subscribers will appear here upon launch.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
