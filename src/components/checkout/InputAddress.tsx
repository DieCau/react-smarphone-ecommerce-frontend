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
	// This component renders an input field for address details
	// using react-hook-form for form state management and validation.	
	// It takes in the register function from react-hook-form, the errors object, 
	// the name of the field, and an optional className for styling.
	// The component renders an input field with the specified name, 
	// and the errors object is used to display any validation errors.
	// The placeholder is used to provide a hint to the user about what to enter.
	// The component also applies conditional styling based on the presence of errors,
	// adding a red border if there are validation errors for the field.
	return (
		<>
			<div
				className={`border border-slate-200 rounded-md overflow-hidden py-2 ${
					errors[name] && 'border-red-500'
				} ${className}`}
			>
				<input
					type='text'
					className='w-full px-3 py-1 text-sm focus:outline-none'
					placeholder={placeholder}
					{...register(name)}
				/>
			</div>
			{errors[name] && (
				<p className='text-red-500 text-xs'>{errors[name].message}</p>
			)}
		</>
	);
};
