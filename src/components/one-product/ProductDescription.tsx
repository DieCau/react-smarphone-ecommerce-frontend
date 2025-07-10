import { EditorContent, type JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import type { Json } from '../../supabase/supabase';

interface Props {
  content: JSONContent | Json;
}

// Este componente muestra la descripción del producto mediante el editor Tiptap.
// Inicializa el editor con el contenido proporcionado y lo renderiza en un contenedor con estilo.
// El contenido se muestra en modo de solo lectura, con estilos específicos para una mejor legibilidad.
// La descripción se presenta en un formato visualmente atractivo, con título y espaciado adecuado.
// El editor está configurado para no ser editable, lo que garantiza que los usuarios solo puedan ver la descripción sin realizar cambios. 
// Se espera que el contenido esté en formato JSON compatible con Tiptap.
// El componente está diseñado para ser reutilizable para diferentes productos, pasando el contenido como propiedad.

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
    <div className="container mx-auto p-4 mt-12">
      <h2 className="text-2xl font-bold text-center mb-8 underline">
        Descripción
      </h2>
      <EditorContent editor={editor} />
    </div>
  );
};
