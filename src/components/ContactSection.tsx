import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { saveEnquiry, getWhatsAppNumber } from '../services/storage';

interface ContactSectionProps {
  onSuccess: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    milkQuantity: '1 Litre Daily',
    deliveryPreference: 'Morning 6:00 AM – 7:00 AM',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappNum = getWhatsAppNumber();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      saveEnquiry({
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        milkQuantity: formData.milkQuantity,
        deliveryPreference: formData.deliveryPreference,
        message: formData.message || 'General milk enquiry'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess(`Thank you ${formData.name}! Your enquiry has been received. Our team will reach out shortly.`);
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const cleanNumber = whatsappNum.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hi Milora Milk, I am ${formData.name || 'a customer'} from ${formData.location || 'nearby'}. I would like to enquire about ${formData.milkQuantity} doorstep delivery.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7BCB9A] uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Neighbourhood Routes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Let’s Bring Fresh Milk Closer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            Whether you want milk delivered to your home or want to initiate a new morning route in your apartment community, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7BCB9A]/20 text-[#7BCB9A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#FFFDF7] font-heading">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-[#F8F7F2]/80 max-w-md mx-auto">
                  Our route coordinator has received your details and will connect with you on WhatsApp to confirm delivery timing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-white/80 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-white/80 block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-white/80 block mb-1.5">
                      Delivery Location / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Koramangala / HSR Layout"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-white/80 block mb-1.5">
                      Milk Quantity Required
                    </label>
                    <select
                      value={formData.milkQuantity}
                      onChange={(e) => setFormData({ ...formData, milkQuantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b243b] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                    >
                      <option value="500 ML Daily">500 ML Daily</option>
                      <option value="1 Litre Daily">1 Litre Daily</option>
                      <option value="2 Litres Daily">2 Litres Daily</option>
                      <option value="Commercial / Bulk (5L+)">Commercial / Bulk (5L+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/80 block mb-1.5">
                    Delivery Preference
                  </label>
                  <select
                    value={formData.deliveryPreference}
                    onChange={(e) => setFormData({ ...formData, deliveryPreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b243b] border border-white/10 text-white text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                  >
                    <option value="Early Morning 5:30 AM – 6:30 AM">Early Morning 5:30 AM – 6:30 AM</option>
                    <option value="Standard Morning 6:00 AM – 7:00 AM">Standard Morning 6:00 AM – 7:00 AM</option>
                    <option value="Breakfast Slot 6:30 AM – 7:30 AM">Breakfast Slot 6:30 AM – 7:30 AM</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/80 block mb-1.5">
                    Message / Apartment Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your apartment gate, door number, or custom request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                  />
                </div>

                {/* Submit Buttons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#7BCB9A] text-[#071A2B] hover:bg-[#6ec28f] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#7BCB9A]" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Operational Contact Hub
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7BCB9A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px]">Direct Telephone</span>
                    <span className="font-mono font-medium text-white">{whatsappNum}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7BCB9A]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px]">WhatsApp Official</span>
                    <span className="font-mono font-medium text-white">{whatsappNum}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7BCB9A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px]">Official Email</span>
                    <span className="font-medium text-white">hello@miloramilk.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7BCB9A]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white/50 block text-[11px]">Social Media</span>
                    <span className="font-medium text-white">@miloramilk</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#F8F7F2]/60">
                <p>Morning Delivery Window: 5:30 AM – 7:30 AM Daily</p>
                <p className="mt-1">Customer Support Hours: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
