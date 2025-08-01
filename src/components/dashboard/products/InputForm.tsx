import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';

// Importamos los tipos necesarios de react-hook-form y el tipo ProductFormValues
interface Props {
  className?: string;

  label: string;
  placeholder?: string;
  type: string;
  name: keyof ProductFormValues;
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
  required?: boolean;
}

// Componente para un input de formulario
export const InputForm = ({
  className,
  label,
  placeholder,
  type,
  name,
  register,
  errors,
  required,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label
          htmlFor={name}
          className="text-xs font-bold tracking-tight capitalize text-slate-900"
        >
          {label}:
        </label>

        {required && (
          <span
            className={`${
              required && 'text-red-500 text-sm mr-3'
            } font-bold self-end`}
          >
            *
          </span>
        )}
      </div>

      <div
        className={`border border-gray-300 rounded-md overflow-hidden gap-5 items-center ${
          errors[name] ? 'border-red-500' : ''
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          className={`py-1.5 text-sm px-3 font-medium tracking-tighter w-full text-slate-600 outline-none focus:outline-none ${className}`}
          autoComplete="off"
          {...register(name)}
        />
      </div>
    </div>
  );
};
