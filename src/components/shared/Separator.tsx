interface Props {
	className?: string;
}

export const Separator = ({ className }: Props) => {
	// Separator component to create a horizontal line
	// It can be used to visually separate sections in the UI
	
	return <div className={`bg-slate-200 h-px my-5 ${className}`} />;
};
