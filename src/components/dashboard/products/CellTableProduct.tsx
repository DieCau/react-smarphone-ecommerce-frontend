interface Props {
	content: string;
}

export const CellTableProduct = ({ content }: Props) => {
	// This component renders a cell in a product table.
	// It displays the content passed as a prop.
	// The content is displayed with specific styling for better readability.
	return (
		<td className='p-4 font-medium tracking-tighter'>{content}</td>
	);
};
