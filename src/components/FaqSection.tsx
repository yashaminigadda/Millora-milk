import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. What is Milora Milk?',
      a: 'Milora Milk is a modern dairy delivery startup concept dedicated to bringing pure, hygienically packed fresh milk directly to customer doorsteps every morning with simple WhatsApp ordering and transparent local operations.'
    },
    {
      q: '2. How can I order?',
      a: 'You can place an order directly by clicking the "Order Milk" button on this website, filling out our quick order form, or sending a direct message to our WhatsApp coordination number with your required quantity and address.'
    },
    {
      q: '3. What quantities are available?',
      a: 'We offer two standard portions: 500 ML (ideal for individual needs, bachelors, or small requirements at ₹33) and 1 Litre (our standard family household pack at ₹65).'
    },
    {
      q: '4. How does delivery work?',
      a: 'Milk is collected at dawn from vetted local suppliers, packed safely in food-grade leakproof pouches, and placed in insulated delivery bags for doorstep delivery between 5:30 AM and 7:30 AM before morning breakfast.'
    },
    {
      q: '5. How does the ₹10,000 model work?',
      a: 'The ₹10,000 model demonstrates a lean capital allocation framework: ₹4,000 for milk working capital, ₹1,500 for insulated delivery bags, ₹1,000 for packaging and brand stickers, ₹1,000 for local marketing flyers, ₹1,000 for fuel logistics, and ₹1,500 as an emergency reserve.'
    },
    {
      q: '6. What is the 50-litre example?',
      a: 'The 50-litre example is an illustrative unit-economics model: 50 L/day purchased at an example ₹56/L (₹2,800), ₹2/pack packaging (₹100), ₹150 daily delivery cost (Total daily cost = ₹3,050), sold at ₹65/L (₹3,250 revenue), resulting in an estimated ₹200/day or ₹6,000/month operating profit.'
    },
    {
      q: '7. Is ₹65/litre the final price?',
      a: '₹65/L is an example benchmark price used to illustrate sustainable unit economics. Actual pricing may vary based on local milk procurement costs, neighborhood demographics, packaging choices, and prevailing regional market rates.'
    },
    {
      q: '8. How can I subscribe?',
      a: 'You can choose between 7-day and 30-day schedules in our "Monthly Subscription" section or message our WhatsApp team. You can easily pause, modify, or extend your subscription anytime without long-term contracts.'
    },
    {
      q: '9. How can I contact Milora?',
      a: 'You can reach out through our online contact enquiry form on this website, connect on WhatsApp (+91 98765 43210), or email hello@miloramilk.com for neighbourhood route queries and commercial partnerships.'
    },
    {
      q: '10. What food-safety requirements apply?',
      a: 'Milk is a regulated food item. Applicable statutory food-safety requirements, including FSSAI registration/licensing and temperature-controlled handling norms, must be verified and complied with before launching commercial deliveries.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFDF7] text-[#17212B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#071A2B] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7BCB9A]" />
            <span>Common Questions</span>
            <span aria-hidden="true">·</span>
            <span>Complete Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#071A2B]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our fresh milk sourcing, daily doorstep delivery, and startup model.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F8F7F2] border border-slate-200/90 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#071A2B] hover:text-[#071A2B] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-heading">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#071A2B] text-[#7BCB9A]' : 'bg-white text-slate-500'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
