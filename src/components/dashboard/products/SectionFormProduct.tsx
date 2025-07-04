import type { ReactNode } from 'react';

interface Props {
	className?: string;
	titleSection?: string;
	children: ReactNode;
}

export const SectionFormProduct = ({
	// Componente para la sección del formulario del producto
	// Permite mostrar un título y un contenido dentro de una sección con estilo
	// Recibe una clase opcional para personalizar el estilo
	// Recibe un título opcional para mostrar en la sección
	// Recibe los hijos (children) que se mostrarán dentro de la sección
	className,
	titleSection,
	children,
}: Props) => {
	return (
		<div
			className={`bg-white border border-gray-300 shadow-sm rounded-md flex flex-col gap-4 p-7 h-fit ${className}`}
		>
			{titleSection && (
				<h2 className='font-bold tracking-tight text-xl'>
					{titleSection}:
				</h2>
			)}
			{children}
		</div>
	);
};
