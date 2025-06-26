// This file defines TypeScript interfaces for handling order-related data structures in a client application.
export interface OrderInput {
  address: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode?: string;
    country: string;
  };
  cartItems: {
    variantId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
}

// This interface represents the structure of an order item in the context of a shopping cart or order management system.
export interface OrderItemSingle {
  created_at: string;
  id: number;
  status: string;
  total_amount: number;
}

export interface OrderWithCustomer {
  id: number;
  status: string;
  total_amount: number;
  created_at: string;
  customers: {
    full_name: string;
    email: string;
  } | null;
}
