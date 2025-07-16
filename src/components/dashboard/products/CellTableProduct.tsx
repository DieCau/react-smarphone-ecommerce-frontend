interface Props {
	content: string;
}

// Este componente representa una celda en una tabla de productos.
// Muestra el contenido pasado como propiedad.
// El contenido se muestra con un estilo específico para una mejor legibilidad.
export const CellTableProduct = ({ content }: Props) => {
	return (
		<td className='p-4 font-medium tracking-tighter'>{content}</td>
	);
};
