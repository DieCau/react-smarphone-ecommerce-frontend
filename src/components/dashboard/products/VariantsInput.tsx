import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { useFieldArray, useWatch } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';

// Esta interfaz define las propiedades del componente VariantsInput.
// Incluye control para gestionar el estado del formulario, errores para la validación 
// y un registro para registrar los campos del formulario con React Hook Form.
interface Props {
  control: Control<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
  register: UseFormRegister<ProductFormValues>;
}

const headersVariants = ['Stock', 'Precio', 'Capacidad', 'Color', ''];

// Este componente genera un formulario para gestionar variantes de producto.
// Permite a los usuarios añadir, eliminar y editar variantes de producto con campos de stock, precio, almacenamiento y color.
// Utiliza el método useFieldArray de React Hook Form para gestionar los campos dinámicos de las variantes.
// El componente también gestiona la selección de color y muestra errores de validación para cada variante.
// Está diseñado para utilizarse dentro de un formulario de gestión de productos más amplio.
// El componente utiliza TypeScript para la seguridad de tipos y define la interfaz Props para sus propiedades.
// También utiliza los métodos useState y useEffect de React para gestionar el estado local y los efectos secundarios.
// El método useWatch de React Hook Form se utiliza para observar los cambios en los campos color y colorName de cada variante, 
// lo que permite actualizaciones dinámicas de la interfaz de usuario según la entrada del usuario.
// El componente se diseña con clases CSS de Tailwind para un diseño coherente y adaptable.
// El componente se exporta como VariantsInput para su uso en otras partes de la aplicación.

export const VariantsInput = ({ control, errors, register }: Props) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'variants',
  });

  const [colorActive, setColorActive] = useState<boolean[]>([]);

  // Esta función se encarga de añadir una nueva variante al formulario.
  // Utiliza el método append de useFieldArray para agregar un nuevo objeto
  // con los campos predeterminados: stock, price, storage, color y colorName
  // Los valores predeterminados son: stock = 0, price = 0,
  // storage = '', color = '', colorName = ''
  // Esto permite al usuario añadir múltiples variantes de un producto
  // y gestionar sus propiedades de manera dinámica.
  // El uso de useFieldArray permite manejar dinámicamente un array de campos
  // en un formulario, facilitando la adición y eliminación de variantes.
  // El componente VariantsInput es parte de un formulario más grande
  // que gestiona los productos y sus variantes, permitiendo al usuario
  // personalizar las características de cada variante de un producto.
  // El componente utiliza TypeScript para definir los tipos de los valores del formulario
  // y asegurar la integridad de los datos introducidos por el usuario.
  // El componente VariantsInput es parte de un formulario más grande
  // que gestiona los productos y sus variantes, permitiendo al usuario
  // personalizar las características de cada variante de un producto.
  // El componente utiliza TypeScript para definir los tipos de los valores del formulario
  // y asegurar la integridad de los datos introducidos por el usuario.
  // El componente VariantsInput es parte de un formulario más grande
  // que gestiona los productos y sus variantes, permitiendo al usuario
  // personalizar las características de cada variante de un producto.
  // El componente utiliza TypeScript para definir los tipos de los valores del formulario
  // y asegurar la integridad de los datos introducidos por el usuario.
  const addVariant = () => {
    append({
      stock: 0,
      price: 0,
      storage: '',
      color: '',
      colorName: '',
    });
  };

  const removeVariant = (index: number) => {
    remove(index);
  };

  const toggleColorActive = (index: number) => {
    setColorActive((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  // Usar useWatch una sola vez para observar todos los valores del color y del colorName
  const colorValues = useWatch({
    control,
    name: fields.map((_, index) => `variants.${index}.color` as const),
  });

  const colorNameValues = useWatch({
    control,
    name: fields.map((_, index) => `variants.${index}.colorName` as const),
  });

  const getFirstError = (
    variantErros: FieldErrors<ProductFormValues['variants'][number]>
  ) => {
    if (variantErros) {
      const keys = Object.keys(variantErros) as (keyof typeof variantErros)[];
      if (keys.length > 0) {
        return variantErros[keys[0]]?.message;
      }
    }
  };

  useEffect(() => {
    setColorActive((prev) => fields.map((_, index) => prev[index] || false));
  }, [fields]);

  // El componente VariantsInput es un formulario que permite gestionar las variantes de un producto.
  // Utiliza useFieldArray de react-hook-form para manejar dinámicamente un array de campos
  // que representan las variantes del producto.
  // Cada variante tiene campos para stock, precio, capacidad de almacenamiento y color.
  // El componente también maneja la adición y eliminación de variantes,
  // así como la activación de un selector de color para cada variante.
  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-4 border-b border-slate-200 pb-6">
        <div className="grid grid-cols-5 gap-4 justify-start">
          {headersVariants.map((header, index) => (
            <p key={index} className="text-xs font-semibold text-slate-800">
              {header}
            </p>
          ))}
        </div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <div className="grid grid-cols-5 gap-4 items-center">
              <input
                type="number"
                placeholder="Stock"
                {...register(`variants.${index}.stock`, {
                  valueAsNumber: true,
                })}
                className="border rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none appearance-none"
              />

              <input
                type="number"
                step="0.01"
                placeholder="Precio"
                {...register(`variants.${index}.price`, {
                  valueAsNumber: true,
                })}
                className="border rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none appearance-none"
              />

              <input
                type="text"
                placeholder="64 GB"
                {...register(`variants.${index}.storage`)}
                className="border rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none appearance-none"
              />

              <div className="flex relative">
                {colorActive[index] && (
                  <div className="absolute bg-stone-100 rounded-md bottom-8 left-[40px] p-1 w-[100px] h-fit space-y-2">
                    <input
                      type="color"
                      {...register(`variants.${index}.color`)}
                      className="rounded-md px-3 py-1.5 w-full"
                    />

                    <input
                      type="text"
                      placeholder="Azul Marino"
                      {...register(`variants.${index}.colorName`)}
                      className="rounded-md px-3 py-1.5 w-full text-xs focus:outline-none font-semibold placeholder:font-normal"
                    />
                  </div>
                )}
                <button
                  className="border w-full h-8 cursor-pointer rounded text-xs font-medium flex items-center justify-center"
                  type="button"
                  onClick={() => toggleColorActive(index)}
                >
                  {colorValues[index] && colorNameValues[index] ? (
                    <span
                      className={`inline-block w-4 h-4 rounded-full bg-block`}
                      style={{
                        backgroundColor: colorValues[index],
                      }}
                    />
                  ) : (
                    'Añadir'
                  )}
                </button>
              </div>
            
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => removeVariant(index)}
                  className="p-1"
                >
                  <IoIosCloseCircleOutline size={20} />
                </button>
              </div>
            </div>

            {errors.variants && errors.variants[index] && (
              <p className="text-red-500 text-xs mt-1">
                {getFirstError(errors.variants[index])}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addVariant}
        className="px-4 py-2 text-slate-800 rounded-md text-sm font-semibold tracking-tight flex items-center gap-1 self-center hover:bg-slate-100"
      >
        <IoIosAddCircleOutline size={16} />
        Añadir Variante
      </button>

      {fields.length === 0 && errors.variants && (
        <p className="text-red-500 text-xs mt-1">
          Debes añadir al menos una variante
        </p>
      )}
    </div>
  );
};