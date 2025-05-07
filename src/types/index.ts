
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  description: string;
  specs: {
    engine?: string;
    power?: string;
    torque?: string;
    weight?: string;
    topSpeed?: string;
    [key: string]: string | undefined;
  };
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
  inStock: boolean;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
}

export interface User {
  name: string;
  email: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
}

export interface Order {
  id: string;
  user: User;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}
