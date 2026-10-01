import { CustomerOrder, Subscription, CustomerEnquiry, DeliveryRoute, Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-500ml',
    name: 'Milora Fresh Milk 500 ML',
    quantityLabel: '500 ML',
    volumeMl: 500,
    price: 33,
    description: 'Fresh milk packed for individual consumption, nuclear families, or bachelor households.',
    features: [
      'Collected fresh daily from reliable local dairy suppliers',
      'Food-grade leak-proof hygiene pouch with safety seal',
      'Doorstep delivery between 5:30 AM – 7:30 AM',
      'Zero preservatives, pure fresh handling'
    ]
  },
  {
    id: 'prod-1l',
    name: 'Milora Fresh Milk 1 Litre',
    quantityLabel: '1 Litre',
    volumeMl: 1000,
    price: 65,
    popular: true,
    description: 'Our flagship daily pack for family households, morning tea, coffee, and daily nutrition.',
    features: [
      'Example selling price: ₹65 / Litre',
      'Hygienically packed in food-grade material',
      'Insulated delivery bags ensure morning freshness',
      'Simple WhatsApp modification or pause anytime'
    ]
  }
];

const INITIAL_ORDERS: CustomerOrder[] = [
  {
    id: 'ORD-1001',
    customerName: 'Ananya Sharma',
    phone: '+91 98450 12345',
    address: 'Flat 402, Green Glen Layout, Bellandur',
    location: 'Outer Ring Road Area',
    productId: 'prod-1l',
    productName: 'Milora Fresh Milk 1 Litre',
    quantity: 2,
    totalAmount: 130,
    deliveryDate: new Date().toISOString().split('T')[0],
    deliverySlot: '6:00 AM – 7:00 AM',
    status: 'Delivered',
    paymentMethod: 'UPI on Delivery',
    orderType: 'Subscription',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'ORD-1002',
    customerName: 'Vikram Mehta',
    phone: '+91 97411 98765',
    address: 'House #14, 2nd Cross, Koramangala 4th Block',
    location: 'Koramangala',
    productId: 'prod-1l',
    productName: 'Milora Fresh Milk 1 Litre',
    quantity: 1,
    totalAmount: 65,
    deliveryDate: new Date().toISOString().split('T')[0],
    deliverySlot: '6:30 AM – 7:30 AM',
    status: 'Out for Delivery',
    paymentMethod: 'Cash on Delivery (COD)',
    orderType: '3-Day Trial',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'ORD-1003',
    customerName: 'Dr. Ramesh Kulkarni',
    phone: '+91 99002 33445',
    address: 'B-108, Prestige Palms, Whitefield',
    location: 'Whitefield',
    productId: 'prod-500ml',
    productName: 'Milora Fresh Milk 500 ML',
    quantity: 2,
    totalAmount: 66,
    deliveryDate: new Date().toISOString().split('T')[0],
    deliverySlot: '5:30 AM – 6:30 AM',
    status: 'Packed',
    paymentMethod: 'Monthly Billing',
    orderType: 'Subscription',
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  },
  {
    id: 'ORD-1004',
    customerName: 'Pooja Iyer',
    phone: '+91 98860 45678',
    address: 'Villa 22, Windmills Colony, Indiranagar',
    location: 'Indiranagar',
    productId: 'prod-1l',
    productName: 'Milora Fresh Milk 1 Litre',
    quantity: 1,
    totalAmount: 65,
    deliveryDate: new Date().toISOString().split('T')[0],
    deliverySlot: '6:00 AM – 7:00 AM',
    status: 'Confirmed',
    paymentMethod: 'UPI on Delivery',
    orderType: 'One-Time',
    createdAt: new Date(Date.now() - 1800000).toISOString()
  }
];

const INITIAL_SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'SUB-201',
    customerName: 'Ananya Sharma',
    phone: '+91 98450 12345',
    address: 'Flat 402, Green Glen Layout, Bellandur',
    location: 'Bellandur',
    quantityPerDay: 2,
    durationDays: 30,
    startDate: '2026-09-01',
    endDate: '2026-09-30',
    deliverySlot: '6:00 AM – 7:00 AM',
    status: 'Active',
    totalBill: 3900,
    createdAt: '2026-08-30T10:00:00Z'
  },
  {
    id: 'SUB-202',
    customerName: 'Dr. Ramesh Kulkarni',
    phone: '+91 99002 33445',
    address: 'B-108, Prestige Palms, Whitefield',
    location: 'Whitefield',
    quantityPerDay: 1,
    durationDays: 30,
    startDate: '2026-09-05',
    endDate: '2026-10-05',
    deliverySlot: '5:30 AM – 6:30 AM',
    status: 'Active',
    totalBill: 1950,
    createdAt: '2026-09-04T12:30:00Z'
  },
  {
    id: 'SUB-203',
    customerName: 'Karthik Raja',
    phone: '+91 96112 88990',
    address: '#45, 12th Main, HSR Layout Sector 2',
    location: 'HSR Layout',
    quantityPerDay: 1,
    durationDays: 7,
    startDate: '2026-09-28',
    endDate: '2026-10-04',
    deliverySlot: '6:30 AM – 7:30 AM',
    status: 'Active',
    totalBill: 455,
    createdAt: '2026-09-27T08:15:00Z'
  }
];

const INITIAL_ENQUIRIES: CustomerEnquiry[] = [
  {
    id: 'ENQ-301',
    name: 'Suresh Nambiar (Cafe Brew)',
    phone: '+91 98440 55667',
    location: 'HSR Sector 1',
    milkQuantity: '15 Litres Daily',
    deliveryPreference: 'Daily at 5:00 AM',
    message: 'We run a speciality coffee counter and need fresh reliable morning supply.',
    createdAt: '2026-09-29T14:20:00Z',
    status: 'Contacted'
  },
  {
    id: 'ENQ-302',
    name: 'Deepa Hegde',
    phone: '+91 97312 44556',
    location: 'Sarjapur Road',
    milkQuantity: '1 Litre Daily',
    deliveryPreference: '6:00 AM doorstep delivery',
    message: 'Looking for a clean morning subscription for a family of 4.',
    createdAt: '2026-09-30T09:10:00Z',
    status: 'New'
  }
];

const INITIAL_ROUTES: DeliveryRoute[] = [
  {
    id: 'RT-1',
    routeName: 'Route Alpha: HSR & Sector 1-4',
    area: 'HSR Layout',
    deliveryTime: '5:30 AM – 6:45 AM',
    totalHomes: 22,
    litresAllocated: 26,
    status: 'Active'
  },
  {
    id: 'RT-2',
    routeName: 'Route Beta: Bellandur & Outer Ring Road',
    area: 'Bellandur & Green Glen',
    deliveryTime: '6:45 AM – 7:45 AM',
    totalHomes: 18,
    litresAllocated: 24,
    status: 'Active'
  }
];

export const DB_KEYS = {
  ORDERS: 'milora_orders_db',
  SUBSCRIPTIONS: 'milora_subscriptions_db',
  ENQUIRIES: 'milora_enquiries_db',
  ROUTES: 'milora_routes_db',
  CONFIG_WHATSAPP: 'milora_whatsapp_number'
};

export const DEFAULT_WHATSAPP_NUMBER = '+91 98765 43210';

export function getStoredOrders(): CustomerOrder[] {
  try {
    const raw = localStorage.getItem(DB_KEYS.ORDERS);
    return raw ? JSON.parse(raw) : INITIAL_ORDERS;
  } catch {
    return INITIAL_ORDERS;
  }
}

export function saveOrder(order: Omit<CustomerOrder, 'id' | 'createdAt'>): CustomerOrder {
  const current = getStoredOrders();
  const newOrder: CustomerOrder = {
    ...order,
    id: `ORD-${1000 + current.length + 1}`,
    createdAt: new Date().toISOString()
  };
  const updated = [newOrder, ...current];
  try {
    localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(updated));
  } catch {
    // fallback
  }
  return newOrder;
}

export function updateOrderStatus(orderId: string, status: CustomerOrder['status']): void {
  const current = getStoredOrders();
  const updated = current.map(o => o.id === orderId ? { ...o, status } : o);
  try {
    localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(updated));
  } catch {
    // fallback
  }
}

export function getStoredSubscriptions(): Subscription[] {
  try {
    const raw = localStorage.getItem(DB_KEYS.SUBSCRIPTIONS);
    return raw ? JSON.parse(raw) : INITIAL_SUBSCRIPTIONS;
  } catch {
    return INITIAL_SUBSCRIPTIONS;
  }
}

export function saveSubscription(sub: Omit<Subscription, 'id' | 'createdAt'>): Subscription {
  const current = getStoredSubscriptions();
  const newSub: Subscription = {
    ...sub,
    id: `SUB-${200 + current.length + 1}`,
    createdAt: new Date().toISOString()
  };
  const updated = [newSub, ...current];
  try {
    localStorage.setItem(DB_KEYS.SUBSCRIPTIONS, JSON.stringify(updated));
  } catch {
    // fallback
  }
  return newSub;
}

export function getStoredEnquiries(): CustomerEnquiry[] {
  try {
    const raw = localStorage.getItem(DB_KEYS.ENQUIRIES);
    return raw ? JSON.parse(raw) : INITIAL_ENQUIRIES;
  } catch {
    return INITIAL_ENQUIRIES;
  }
}

export function saveEnquiry(enquiry: Omit<CustomerEnquiry, 'id' | 'createdAt' | 'status'>): CustomerEnquiry {
  const current = getStoredEnquiries();
  const newEnq: CustomerEnquiry = {
    ...enquiry,
    id: `ENQ-${300 + current.length + 1}`,
    status: 'New',
    createdAt: new Date().toISOString()
  };
  const updated = [newEnq, ...current];
  try {
    localStorage.setItem(DB_KEYS.ENQUIRIES, JSON.stringify(updated));
  } catch {
    // fallback
  }
  return newEnq;
}

export function getStoredRoutes(): DeliveryRoute[] {
  try {
    const raw = localStorage.getItem(DB_KEYS.ROUTES);
    return raw ? JSON.parse(raw) : INITIAL_ROUTES;
  } catch {
    return INITIAL_ROUTES;
  }
}

export function getWhatsAppNumber(): string {
  try {
    return localStorage.getItem(DB_KEYS.CONFIG_WHATSAPP) || DEFAULT_WHATSAPP_NUMBER;
  } catch {
    return DEFAULT_WHATSAPP_NUMBER;
  }
}

export function saveWhatsAppNumber(num: string): void {
  try {
    localStorage.setItem(DB_KEYS.CONFIG_WHATSAPP, num);
  } catch {
    // fallback
  }
}
