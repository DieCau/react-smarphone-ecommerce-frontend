import type { JSONContent } from '@tiptap/react';
import { z } from 'zod';

// Define tu esquema para el formulario de registro de usuarios
export const userRegisterSchema = z.object({
  email: z.string().email('El correo electrónico no es válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  fullName: z.string().min(1, 'El nombre completo es requerido'),
  phone: z.string().optional(),
});

// Define tu esquema para el formulario de dirección
// Este esquema valida los campos de dirección, garantizando que no estén vacíos y tengan límites de longitud razonables.
// También permite campos opcionales como "addressLine2" y "postalCode".
// El campo de país es obligatorio y no puede ser una cadena vacía.
// Este esquema se puede usar para validar la dirección ingresada por el usuario en formularios. 
export const addressSchema = z.object({
  addressLine1: z
    .string()
    .min(1, 'La dirección es requerida')
    .max(100, 'La dirección no debe exceder los 100 carácteres'),
  addressLine2: z
    .string()
    .max(100, 'La dirección no debe exceder los 100 carácteres')
    .optional(),
  city: z
    .string()
    .min(1, 'La ciudad es requerida')
    .max(50, 'La ciudad no debe exceder los 50 carácteres'),
  state: z
    .string()
    .min(1, 'El estado es requerido')
    .max(50, 'El estado no debe exceder los 50 carácteres'),
  postalCode: z
    .string()
    .max(10, 'El código postal no debe exceder los 10 carácteres')
    .optional(),
  country: z.string().min(1, 'El país es requerido'),
});

// Tipos de exportación para los esquemas que se utilizarán en formularios u otros componentes
export type UserRegisterFormValues = z.infer<typeof userRegisterSchema>;
export type AddressFormValues = z.infer<typeof addressSchema>;

// Función para comprobar si el contenido de un objeto JSONContent está vacío
// Esta función comprueba si la matriz de contenido está vacía o si solo contiene párrafos vacíos.
// Devuelve verdadero si el contenido está vacío; de lo contrario, falso.
// Esto puede ser útil para validar el contenido del editor de texto enriquecido antes del envío.
// Puedes usar esta función para asegurarte de que el contenido del editor no esté vacío antes de enviarlo.
const isContentEmpty = (value: JSONContent): boolean => {
  if (!value || !Array.isArray(value.content) || value.content.length == 0) {
    return true;
  }

  return !value.content.some(
    (node) =>
      node.type === 'paragraph' &&
      node.content &&
      Array.isArray(node.content) &&
      node.content.some(
        (textNode) =>
          textNode.type === 'text' &&
          textNode.text &&
          textNode.text.trim() !== ''
      )
  );
};

// Define tu esquema para el formulario de producto
// Este esquema valida los detalles del producto, incluyendo nombre, marca, slug, características, descripción, variantes
// e imágenes. Garantiza que los campos obligatorios no estén vacíos y que el slug siga un formato específico.
// Se validan las características para garantizar que no estén vacías y se comprueba el contenido de la descripción
// mediante la función isContentEmpty. Las variantes deben tener al menos una entrada con información válida de stock, precio, almacenamiento, color y colorName.
// El campo de imágenes debe contener al menos una imagen.
export const productSchema = z.object({
  name: z.string().min(1, 'El nombre del producto es obligatorio'),
  brand: z.string().min(1, 'La marca del producto es obligatoria'),
  slug: z
    .string()
    .min(1, 'El slug del producto es obligatorio')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug inválido'),
  features: z.array(
    z.object({
      value: z.string().min(1, 'La característica no puede estar vacía'),
    })
  ),
  description: z.custom<JSONContent>((value) => !isContentEmpty(value), {
    message: 'La descripción no puede estar vacía',
  }),
  variants: z
    .array(
      z.object({
        id: z.string().optional(),
        stock: z.number(),
        price: z.number().min(0.01, 'El precio debe ser mayor a 0'),
        storage: z.string().min(1, 'El almacenamiento es requerido'),
        color: z
          .string()
          .regex(
            /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|(rgb|hsl)a?\(\s*([0-9]{1,3}\s*,\s*){2}[0-9]{1,3}\s*(,\s*(0|1|0?\.\d+))?\s*\))$/,
            'El color debe ser un valor válido en formato hexadecimal, RGB o HSL'
          ),
        colorName: z.string().min(1, 'El nombre del color es obligatorio'),
      })
    )
    .min(1, 'Debe haber al menos una variante'),
  images: z.array(z.any()).min(1, 'Debe haber al menos una imagen'),
});

// Exportar el tipo de los valores del formulario del producto
// Este tipo se infiere del productSchema y puede usarse en formularios u otros componentes
// Garantiza que los valores cumplan con las reglas de validación definidas en el esquema
export type ProductFormValues = z.infer<typeof productSchema>;
