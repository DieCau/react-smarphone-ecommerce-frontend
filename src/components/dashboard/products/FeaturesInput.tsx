import type { Control, FieldErrors } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';
import { useState } from 'react';

interface Props {
	control: Control<ProductFormValues>;
	errors: FieldErrors<ProductFormValues>;
}

// Componente para el input de características del producto
// Permite agregar, eliminar y mostrar características del producto
// Utiliza useFieldArray de react-hook-form para manejar un array de características
// Cada característica se muestra como un elemento de lista con un botón para eliminar
// Al agregar una nueva característica, se limpia el input
// Si hay errores en el campo de características, se muestra un mensaje de error
// El input permite agregar características presionando Enter o haciendo clic en un botón
// Las características se muestran con un punto de color y el texto correspondiente
// El botón de eliminar característica muestra una "X" y elimina la característica al hacer clic
// El input tiene un estilo que cambia si hay errores, mostrando un borde rojo
// El input es de tipo texto y permite ingresar características como "256Gb de almacenamiento"	
export const FeaturesInput = ({ control, errors }: Props) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'features',
	});

	const [newFeature, setNewFeature] = useState('');

	const handleAddFeature = () => {
		if (newFeature.trim() === '') return;

		append({ value: newFeature });
		setNewFeature('');
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAddFeature();
		}
	};

	return (
		<div className='flex flex-col gap-2'>
			<label className='text-xs font-bold tracking-tight capitalize text-slate-900'>
				Características:
			</label>

			<ul className='space-y-3 pl-5'>
				{fields.map((field, index) => (
					<li
						key={field.id}
						className='flex items-center justify-between gap-2'
					>
						<div className='flex items-center gap-2'>
							<div className='bg-slate-500 h-2 w-2 rounded-full' />
							<span className='text-sm text-slate-600 font-medium'>
								{field.value}
							</span>
						</div>

						<button
							type='button'
							onClick={() => remove(index)}
							className='text-sm text-red-500 font-bold pr-2 hover:scale-110'
						>
							X
						</button>
					</li>
				))}
			</ul>

			<input
				type='text'
				placeholder='256Gb de almacenamiento'
				className={`border border-gray-300 py-1.5 text-sm rounded-md px-3 font-medium tracking-tighter text-slate-600 outline-none focus:outline-none ${
					errors.features ? 'border-red-500' : ''
				}`}
				autoComplete='off'
				value={newFeature}
				onChange={e => setNewFeature(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			{errors.features && (
				<p className='text-red-500 text-xs mt-1'>
					{errors.features.message}
				</p>
			)}
		</div>
	);
};
