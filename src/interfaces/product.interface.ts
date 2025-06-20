import type { JSONContent } from '@tiptap/react';
import type { Json } from '../supabase/supabase';

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
