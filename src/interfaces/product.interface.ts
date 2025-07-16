import type { JSONContent } from '@tiptap/react';
import type { Json } from '../supabase/supabase';

// Este archivo define las interfaces para las estructuras de datos relacionadas con el producto en la aplicación.
// Estas interfaces se utilizan para definir la estructura de los datos que se envían y reciben del servidor.
// Por ejemplo, la interfaz Producto define la estructura de un objeto de producto que se envía al servidor para su creación o actualización.
// La interfaz Producto se utiliza en el archivo product.service.ts para definir la estructura de los datos 
// que se envían al servidor para su creación o actualización.
// También se utiliza en el archivo product.component.tsx para definir la estructura de los datos que se reciben del servidor para su visualización.
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
