import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  TrendingUp,
  Package,
  Users,
  Layers,
  IndianRupee,
  Clock,
  CheckCircle2,
  RefreshCw,
  Phone,
  MapPin,
  FileText,
  Settings,
  ChevronRight,
  Plus
} from 'lucide-react';
import { CustomerOrder, Subscription, CustomerEnquiry, DeliveryRoute } from '../types';
import {
  getStoredOrders,
  getStoredSubscriptions,
  getStoredEnquiries,
  getStoredRoutes,
  updateOrderStatus,
  getWhatsAppNumber,
  saveWhatsAppNumber
} from '../services/storage';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'subscriptions' | 'routes' | 'enquiries' | 'settings'>('orders');
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [enquiries, setEnquiries] = useState<CustomerEnquiry[]>([]);
  const [routes, setRoutes] = useState<DeliveryRoute[]>([]);
  const [whatsappConfig, setWhatsappConfig] = useState<string>('');
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      refreshData();
      setWhatsappConfig(getWhatsAppNumber());
    }
  }, [isOpen]);

  const refreshData = () => {
    setOrders(getStoredOrders());
    setSubscriptions(getStoredSubscriptions());
    setEnquiries(getStoredEnquiries());
    setRoutes(getStoredRoutes());
  };

  if (!isOpen) return null;

  // Calculated Metrics
  const totalLitresToday = 50; // benchmark daily operational volume
  const todayRevenue = 3250; // 50L * ₹65
  const todayExpenses = 3050; // Milk ₹2800 + Packaging ₹100 + Delivery ₹150
  const estimatedDailyProfit = todayRevenue - todayExpenses; // ₹200
  const pendingDeliveries = orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length;

  const handleStatusChange = (orderId: string, newStatus: CustomerOrder['status']) => {
    updateOrderStatus(orderId, newStatus);
    refreshData();
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveWhatsAppNumber(whatsappConfig);
    setSavedNotice('WhatsApp number updated successfully!');
    setTimeout(() => setSavedNotice(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#071A2B] text-white w-full max-w-6xl rounded-3xl border border-white/15 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Admin Header */}
        <div className="p-5 sm:p-6 bg-[#0b243b] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7BCB9A] text-[#071A2B] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                  Milora Operations & Route Portal
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7BCB9A]/20 text-[#7BCB9A] font-semibold">
                  LIVE DB
                </span>
              </div>
              <p className="text-xs text-[#F8F7F2]/70">
                Supabase Architecture & Morning Dispatch Hub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refreshData}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top KPIs Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 sm:p-6 bg-[#051624] border-b border-white/10 text-xs font-mono-data">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Today's Volume</span>
            <span className="text-lg font-bold text-white">{totalLitresToday} Litres</span>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Today's Revenue</span>
            <span className="text-lg font-bold text-[#7BCB9A]">₹{todayRevenue.toLocaleString()}</span>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Daily Expenses</span>
            <span className="text-lg font-bold text-[#E8C66A]">₹{todayExpenses.toLocaleString()}</span>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Est. Daily Profit</span>
            <span className="text-lg font-bold text-[#7BCB9A]">₹{estimatedDailyProfit}</span>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Active Subscribers</span>
            <span className="text-lg font-bold text-white">{subscriptions.length}</span>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[#F8F7F2]/50 block text-[10px]">Pending Deliveries</span>
            <span className="text-lg font-bold text-[#E8C66A]">{pendingDeliveries}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'orders', label: `Orders (${orders.length})` },
            { id: 'subscriptions', label: `Subscriptions (${subscriptions.length})` },
            { id: 'routes', label: `Delivery Routes (${routes.length})` },
            { id: 'enquiries', label: `Enquiries (${enquiries.length})` },
            { id: 'settings', label: 'Route Settings' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3 transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#7BCB9A] text-[#7BCB9A]'
                  : 'border-transparent text-[#F8F7F2]/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#F8F7F2]/60">
                <span>Supabase Table: `orders`</span>
                <span>Update status in real time to simulate delivery dispatch</span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-xs font-mono-data">
                  <thead className="bg-white/10 text-white font-bold">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Item & Vol</th>
                      <th className="p-3">Slot</th>
                      <th className="p-3">Bill</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {orders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-bold text-[#E8C66A]">{ord.id}</td>
                        <td className="p-3">
                          <div className="font-sans font-bold text-white">{ord.customerName}</div>
                          <div className="text-[10px] text-white/50">{ord.phone}</div>
                          <div className="text-[10px] text-white/70 truncate max-w-[180px]">{ord.address}</div>
                        </td>
                        <td className="p-3">
                          <div>{ord.productName}</div>
                          <span className="text-[10px] text-[#7BCB9A]">Qty: {ord.quantity}</span>
                        </td>
                        <td className="p-3 text-white/80">{ord.deliverySlot}</td>
                        <td className="p-3 font-bold text-white">₹{ord.totalAmount}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              ord.status === 'Delivered'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : ord.status === 'Out for Delivery'
                                ? 'bg-amber-500/20 text-amber-300'
                                : ord.status === 'Packed'
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-blue-500/20 text-blue-300'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <select
                            value={ord.status}
                            onChange={(e) => handleStatusChange(ord.id, e.target.value as any)}
                            className="bg-[#0b243b] text-white border border-white/20 rounded-lg px-2 py-1 text-[11px] focus:outline-hidden"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Packed">Packed</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: SUBSCRIPTIONS */}
          {activeTab === 'subscriptions' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#F8F7F2]/60">
                <span>Supabase Table: `subscriptions`</span>
                <span>Active 7-day & 30-day morning schedules</span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-xs font-mono-data">
                  <thead className="bg-white/10 text-white font-bold">
                    <tr>
                      <th className="p-3">Sub ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Daily Volume</th>
                      <th className="p-3">Duration</th>
                      <th className="p-3">Schedule Slot</th>
                      <th className="p-3">Total Bill</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {subscriptions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-white/5">
                        <td className="p-3 font-bold text-[#7BCB9A]">{sub.id}</td>
                        <td className="p-3">
                          <div className="font-sans font-bold text-white">{sub.customerName}</div>
                          <div className="text-[10px] text-white/50">{sub.phone} · {sub.location}</div>
                        </td>
                        <td className="p-3">{sub.quantityPerDay} Litre / day</td>
                        <td className="p-3">{sub.durationDays} Days ({sub.startDate} to {sub.endDate})</td>
                        <td className="p-3 text-white/80">{sub.deliverySlot}</td>
                        <td className="p-3 font-bold text-[#E8C66A]">₹{sub.totalBill}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                            {sub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ROUTES */}
          {activeTab === 'routes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#F8F7F2]/60">
                <span>Supabase Table: `delivery_routes`</span>
                <span>Neighbourhood cluster dispatch</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {routes.map((rt) => (
                  <div key={rt.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white font-sans text-base">{rt.routeName}</h4>
                      <span className="px-2 py-0.5 rounded bg-[#7BCB9A]/20 text-[#7BCB9A] text-xs font-mono font-bold">
                        {rt.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs font-mono-data pt-2">
                      <div className="bg-white/5 p-2 rounded-xl">
                        <span className="text-white/50 block text-[10px]">Area</span>
                        <span className="font-bold text-white">{rt.area}</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl">
                        <span className="text-white/50 block text-[10px]">Volume</span>
                        <span className="font-bold text-[#7BCB9A]">{rt.litresAllocated} L</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl">
                        <span className="text-white/50 block text-[10px]">Homes</span>
                        <span className="font-bold text-white">{rt.totalHomes} Homes</span>
                      </div>
                    </div>

                    <div className="text-xs text-white/70 flex items-center gap-1.5 pt-2">
                      <Clock className="w-3.5 h-3.5 text-[#E8C66A]" />
                      <span>Delivery Time Window: {rt.deliveryTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#F8F7F2]/60">
                <span>Supabase Table: `enquiries`</span>
                <span>Inbound prospective customer and cafe leads</span>
              </div>

              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white font-sans">{enq.name}</span>
                        <span className="text-xs font-mono text-[#E8C66A]">{enq.phone}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                          {enq.status}
                        </span>
                      </div>
                      <p className="text-xs text-white/80">{enq.message}</p>
                      <div className="text-[11px] text-[#7BCB9A] mt-1">
                        Req: {enq.milkQuantity} · Slot: {enq.deliveryPreference} · {enq.location}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enq.name)}%2C%20Milora%20Milk%20team%20here%20regarding%20your%20morning%20delivery%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#7BCB9A] text-[#071A2B] text-xs font-bold hover:bg-[#68b887] transition-colors shrink-0"
                    >
                      Connect on WhatsApp →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SETTINGS */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-6 max-w-xl">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                  <Settings className="w-4 h-4 text-[#7BCB9A]" />
                  <span>Configurable Business Settings</span>
                </h4>

                <div>
                  <label className="text-xs text-white/70 block mb-1.5">
                    Official WhatsApp Ordering Number
                  </label>
                  <input
                    type="text"
                    value={whatsappConfig}
                    onChange={(e) => setWhatsappConfig(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b243b] border border-white/20 text-white font-mono text-sm focus:outline-hidden focus:border-[#7BCB9A]"
                  />
                  <span className="text-[11px] text-white/40 mt-1 block">
                    This phone number is dynamically used for all customer WhatsApp dispatch links across the entire website.
                  </span>
                </div>

                {savedNotice && (
                  <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-medium">
                    ✓ {savedNotice}
                  </div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#7BCB9A] text-[#071A2B] font-bold text-xs hover:bg-[#6ec28f] cursor-pointer"
                >
                  Save Configuration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
