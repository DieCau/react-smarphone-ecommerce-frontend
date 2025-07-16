import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { AddressFormValues } from '../../lib/validators';

// Este componente se utiliza para generar un campo de entrada con
// información de dirección en un formulario de pago.
// Utiliza react-hook-form para la gestión del estado del formulario y
// la validación, lo que permite a los usuarios introducir su
// información de dirección.
interface Props {
  register: UseFormRegister<AddressFormValues>;
  errors: FieldErrors<AddressFormValues>;

  name: keyof AddressFormValues;
  className?: string;
  placeholder: string;
}

export const InputAddress = ({
  register,
  errors,
  name,
  className,
  placeholder,
}: Props) => {
  // Este componente genera un campo de entrada para los detalles de la dirección.
  // Utiliza react-hook-form para la gestión y validación del estado del formulario.
  // Incorpora la función de registro de react-hook-form, el objeto errors,
  // el nombre del campo y un className opcional para el estilo.
  // El componente genera un campo de entrada con el nombre especificado.
  // El objeto errors se utiliza para mostrar cualquier error de validación.
  // El marcador de posición se utiliza para dar una pista al usuario sobre qué introducir.
  // El componente también aplica un estilo condicional según la presencia de errores,
  // añadiendo un borde rojo si hay errores de validación en el campo.
  return (
    <>
      <div
        className={`border border-slate-200 rounded-md overflow-hidden py-2 ${
          errors[name] && 'border-red-500'
        } ${className}`}
      >
        <input
          type="text"
          className="w-full px-3 py-1 text-sm focus:outline-none"
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </>
  );
};
