import { EditorContent, type JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import type { Json } from '../../supabase/supabase';

interface Props {
  content: JSONContent | Json;
}

// This component displays the product description using Tiptap editor.
// It initializes the editor with the provided content and renders it in a styled container.
// The content is displayed in a read-only mode, with specific styles applied for better readability.
// The description is presented in a visually appealing format, with a title and proper spacing.
// The editor is configured to be non-editable, ensuring that users can only view the description
// without making any changes. The content is expected to be in JSON format compatible with Tiptap.
// The component is designed to be reusable for different products by passing the content as a prop.
export const ProductDescription = ({ content }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content as JSONContent,
    editable: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base max-w-none',
      },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8 underline">
        Descripción
      </h2>
      <EditorContent editor={editor} />
    </div>
  );
};
