export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
  pricePerDay: number;
  stock: number;
  featured: boolean;
}

export interface CartItem {
  productId: string;
  days: number;
  startDate: string;
  endDate?: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: string;
}
