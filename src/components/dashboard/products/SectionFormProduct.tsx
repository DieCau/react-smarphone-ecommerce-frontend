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
	// Este componente se utiliza para crear una sección dentro del formulario del producto
	// Permite mostrar un título y un contenido dentro de una sección con estilo
	// La clase opcional permite personalizar el estilo de la sección
	// El título opcional se muestra en la sección si se proporciona
	// Los hijos (children) se renderizan dentro de la sección, permitiendo incluir cualquier
	// contenido necesario, como inputs, botones, etc.
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
