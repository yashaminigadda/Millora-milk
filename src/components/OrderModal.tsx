import React, { useState } from 'react';
import { X, Check, Droplets, ArrowRight, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Product, CustomerOrder } from '../types';
import { INITIAL_PRODUCTS, saveOrder, getWhatsAppNumber } from '../services/storage';
import { MiloraLogo } from './MiloraLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  onOrderSuccess: (msg: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  onOrderSuccess
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || 'prod-1l'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [orderType, setOrderType] = useState<CustomerOrder['orderType']>('One-Time');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('6:00 AM – 7:00 AM');
  const [paymentMethod, setPaymentMethod] = useState<CustomerOrder['paymentMethod']>('UPI on Delivery');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentProduct = INITIAL_PRODUCTS.find(p => p.id === selectedProductId) || INITIAL_PRODUCTS[1];
  const unitPrice = currentProduct.price;
  const multiplier = orderType === '3-Day Trial' ? 3 : 1;
  const totalAmount = unitPrice * quantity * multiplier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      saveOrder({
        customerName,
        phone,
        address,
        location: address.split(',')[0] || 'Local Area',
        productId: currentProduct.id,
        productName: currentProduct.name,
        quantity: quantity * multiplier,
        totalAmount,
        deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
        deliverySlot,
        status: 'Confirmed',
        paymentMethod,
        orderType
      });

      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5D77F', '#4EAB6E', '#071A2B']
      });

      setIsSubmitting(false);
      onOrderSuccess(`Order confirmed for ${quantity}x ${currentProduct.name} (${orderType})! Scheduled for tomorrow morning.`);
      onClose();
    }, 400);
  };

  const handleWhatsAppInstant = () => {
    const whatsappNum = getWhatsAppNumber().replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hi Milora Milk, I would like to order ${quantity}x ${currentProduct.name} (${orderType}) for delivery at ${address || 'my address'}.`
    );
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#FFFDF7] text-[#13202E] w-full max-w-xl rounded-3xl border-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header with Gold Accents */}
        <div className="bg-gradient-to-r from-[#071A2B] via-[#0B2239] to-[#071A2B] text-white p-6 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <MiloraLogo variant="icon" size="sm" />
            <div>
              <span className="text-xs font-mono font-bold text-[#F5D77F] uppercase tracking-wider block">
                Doorstep Morning Delivery
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading mt-0.5 text-white">
                Order Fresh Milora Milk
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Order Type Tabs */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
              Select Order Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('One-Time')}
                className={`py-2.5 px-3 text-xs font-bold rounded-2xl border transition-all cursor-pointer ${
                  orderType === 'One-Time'
                    ? 'bg-[#071A2B] text-white border-[#071A2B] shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Daily / One-Time
              </button>
              <button
                type="button"
                onClick={() => setOrderType('3-Day Trial')}
                className={`py-2.5 px-3 text-xs font-bold rounded-2xl border transition-all cursor-pointer ${
                  orderType === '3-Day Trial'
                    ? 'gold-gradient-bg text-[#071A2B] border-[#D4AF37] font-black shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                3-Day Trial Pack ✨
              </button>
            </div>
          </div>

          {/* Product Portion Selector */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
              Choose Product
            </label>
            <div className="grid grid-cols-2 gap-3">
              {INITIAL_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedProductId === prod.id
                      ? 'bg-white border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/20 shadow-xs'
                      : 'bg-[#F8F7F2] border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#071A2B]">
                      {prod.quantityLabel}
                    </span>
                    <span className="text-sm font-black text-[#071A2B] font-mono">
                      ₹{prod.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate font-medium">{prod.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between p-3.5 bg-[#F8F7F2] rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#071A2B] block">Packs per Day</span>
              <span className="text-[11px] text-slate-500">How many packs each morning?</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-sm font-bold text-slate-700 flex items-center justify-center hover:bg-slate-100 cursor-pointer"
              >
                -
              </button>
              <span className="w-6 text-center font-mono font-black text-base text-[#071A2B]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-sm font-bold text-slate-700 flex items-center justify-center hover:bg-slate-100 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Customer Form Inputs */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
              />
            </div>

            <input
              type="text"
              required
              placeholder="Door / Flat No., Apartment Name, Street Address *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-hidden focus:border-[#D4AF37]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select
                value={deliverySlot}
                onChange={(e) => setDeliverySlot(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-[#D4AF37]"
              >
                <option value="5:30 AM – 6:30 AM">5:30 AM – 6:30 AM (Early Slot)</option>
                <option value="6:00 AM – 7:00 AM">6:00 AM – 7:00 AM (Standard Slot)</option>
                <option value="6:30 AM – 7:30 AM">6:30 AM – 7:30 AM (Breakfast Slot)</option>
              </select>

              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as CustomerOrder['paymentMethod'])}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-[#D4AF37]"
              >
                <option value="UPI on Delivery">UPI QR on Delivery</option>
                <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                <option value="Monthly Billing">Monthly Settlement</option>
              </select>
            </div>
          </div>

          {/* Pricing & Bill Summary with Gold Accent */}
          <div className="bg-[#F8F7F2] p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
            <div>
              <span className="text-slate-500 block font-medium">Total Payable:</span>
              <span className="font-bold text-[#071A2B]">{orderType === '3-Day Trial' ? '3 Days Total' : 'Tomorrow Morning'}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black font-mono text-[#071A2B]">
                ₹{totalAmount}
              </span>
              <span className="text-[10px] text-[#4EAB6E] block font-bold">Free Doorstep Delivery</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm gold-gradient-bg text-[#071A2B] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md border border-[#FFFDF7]/40"
            >
              <span>{isSubmitting ? 'Confirming...' : 'Confirm Order'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleWhatsAppInstant}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-[#071A2B] text-white hover:bg-[#0c2842] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/30"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>Instant WhatsApp Order</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
