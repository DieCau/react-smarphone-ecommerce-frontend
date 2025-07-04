import { type JSONContent, EditorContent, useEditor, type Editor as EditorType } from '@tiptap/react';
import type { FieldErrors, UseFormSetValue } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, type ReactNode } from 'react';
interface Props {
	setValue: UseFormSetValue<ProductFormValues>;
	errors: FieldErrors<ProductFormValues>;
	initialContent?: JSONContent;
}

// Componente para la barra de menú del editor
// Contiene botones para cambiar el formato del texto (encabezados, negrita,
// cursiva, tachado)
// Recibe el editor como prop para poder interactuar con él
// Si el editor no está disponible, no renderiza nada
// Los botones cambian de estilo si el formato está activo
// Cada botón llama a un comando del editor para cambiar el formato del texto
// El botón de encabezado cambia el nivel del encabezado (H1, H2, H3)
// Los botones de negrita, cursiva y tachado alternan su estado
// El estilo de los botones cambia según si el formato está activo o no	
export const MenuBar = ({
	editor,
}: {
	editor: EditorType | null;
}) => {
	const buttonClass = (isActive: boolean) =>
		`w-8 h-7 grid place-items-center  border text-sm rounded transition-all ${
			isActive
				? 'border-blue-500 bg-blue-100 text-blue-700'
				: 'border-gray-300 bg-white text-gray-600 hover:bg-gray-100'
		}`;

	if (!editor) {
		return null;
	}

	return (
		<div className='flex flex-wrap gap-3'>
			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 1 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 1 })
				)}
				type='button'
			>
				H1
			</button>

			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 2 })
				)}
				type='button'
			>
				H2
			</button>

			<button
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				}
				className={buttonClass(
					editor.isActive('heading', { level: 3 })
				)}
				type='button'
			>
				H3
			</button>

			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={buttonClass(editor.isActive('bold'))}
				type='button'
			>
				N
			</button>

			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={buttonClass(editor.isActive('italic'))}
				type='button'
			>
				K
			</button>

			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={buttonClass(editor.isActive('strike'))}
				type='button'
			>
				S
			</button>
		</div>
	);
};

export const Editor = ({
	setValue,
	errors,
	initialContent,
}: Props) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: initialContent || '',
		onUpdate: ({ editor }) => {
			// Aquí actualizamos el valor del campo 'description.content en el formulario
			const content = editor.getJSON();
			setValue('description', content, { shouldValidate: true });
		},
		editorProps: {
			attributes: {
				class:
					'focus:outline-none min-h-[150px] prose prose-sm sm:prose-base',
			},
		},
	});

	useEffect(() => {
		if (initialContent && editor) {
			editor.commands.setContent(initialContent);
		}
	}, [initialContent, editor]);

	return (
		<div className='space-y-3'>
			<MenuBar editor={editor} />

			<EditorContent editor={editor} />

			{errors.description && (
				<p className='text-red-500 text-xs mt-1'>
					{(errors.description.message as ReactNode) ||
						'Debe escribir una descripción'}
				</p>
			)}
		</div>
	);
};
