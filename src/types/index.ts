export interface Product {
  id: string;
  name: string;
  quantityLabel: string;
  volumeMl: number;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface InvestmentSegment {
  id: string;
  title: string;
  amount: number;
  percentage: number;
  color: string;
  description: string;
  purpose: string;
  items: string[];
}

export interface CustomerOrder {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  location: string;
  productId: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  deliveryDate: string;
  deliverySlot: string;
  status: 'Pending' | 'Confirmed' | 'Packed' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  paymentMethod: 'Cash on Delivery (COD)' | 'UPI on Delivery' | 'Monthly Billing';
  orderType: 'One-Time' | '3-Day Trial' | 'Subscription';
  createdAt: string;
}

export interface Subscription {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  location: string;
  quantityPerDay: number; // e.g., 0.5 (500ml) or 1 (1 Litre)
  durationDays: 7 | 30;
  startDate: string;
  endDate: string;
  deliverySlot: string;
  status: 'Active' | 'Paused' | 'Completed';
  totalBill: number;
  createdAt: string;
}

export interface CustomerEnquiry {
  id: string;
  name: string;
  phone: string;
  location: string;
  milkQuantity: string;
  deliveryPreference: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Converted';
}

export interface DeliveryRoute {
  id: string;
  routeName: string;
  area: string;
  deliveryTime: string;
  totalHomes: number;
  litresAllocated: number;
  status: 'Active' | 'Completed' | 'Pending';
}

export interface CalculatorInputs {
  litresPerDay: number;
  purchaseCostPerLitre: number;
  packagingCostPerPack: number;
  deliveryCostPerDay: number;
  sellingPricePerLitre: number;
  operatingDays: number;
}

export interface CalculatorOutputs {
  dailyMilkCost: number;
  dailyPackagingCost: number;
  dailyDeliveryCost: number;
  totalDailyCost: number;
  dailyRevenue: number;
  estimatedDailyProfit: number;
  estimatedMonthlyProfit: number;
  monthlyRevenue: number;
  monthlyTotalCost: number;
  profitMarginPercent: number;
}
