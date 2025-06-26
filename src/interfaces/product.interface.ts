import type { JSONContent } from '@tiptap/react';
import type { Json } from '../supabase/supabase';

// This file defines the interfaces for product-related data structures in the application.
// These interfaces are used to define the structure of data that is sent to and received from the server.
// For example, the Product interface defines the structure of a product object that is sent to the server for creation or update.
// The Product interface is used in the product.service.ts file to define the structure of the data that is sent to the server for creation or update.
// The Product interface is also used in the product.component.tsx file to define the structure of the data that is received from the server for display.
export interface Color {
  name: string;
  color: string;
  price: number;
}

export interface VariantProduct {
  id: string;
  stock: number;
  price: number;
  storage: string;
  color: string;
  color_name: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string;
  features: string[];
  description: Json;
  images: string[];
  created_at: string;
  variants: VariantProduct[];
}

export interface PreparedProducts {
  id: string;
  name: string;
  brand: string;
  slug: string;
  features: string[];
  description: Json;
  images: string[];
  created_at: string;
  price: number;
  colors: {
    name: string;
    color: string;
  }[];
  variants: VariantProduct[];
}

export interface ProductInput {
  name: string;
  brand: string;
  slug: string;
  features: string[];
  description: JSONContent;
  images: File[];
  variants: VariantInput[];
}

export interface VariantInput {
  id?: string;
  stock: number;
  price: number;
  color: string;
  storage: string;
  colorName: string;
}
