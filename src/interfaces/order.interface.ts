// Este archivo define interfaces TypeScript para manejar estructuras de datos relacionadas con pedidos en una aplicación cliente.
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

// Esta interfaz representa la estructura de un artículo de pedido en el contexto de un carrito de compras o un sistema de gestión de pedidos.
export interface OrderItemSingle {
  created_at: string;
  id: number;
  status: string;
  total_amount: number;
}

// Esta interfaz extiende OrderItemSingle para incluir detalles del cliente asociado al pedido.
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
