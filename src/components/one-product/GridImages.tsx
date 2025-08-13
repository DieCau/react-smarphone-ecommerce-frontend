// Este componente muestra una cuadrícula de imágenes de un producto.
// Permite a los usuarios hacer clic en las miniaturas para ver una versión más grande de la imagen.
// La imagen activa se resalta con un borde y la imagen principal se muestra en un contenedor más grande.
// El componente está diseñado para ser adaptable a diferentes tamaños de pantalla.
// Las imágenes se envían como un array de cadenas, donde cada cadena es la URL de una imagen.
// El componente utiliza Tailwind CSS para el estilo, lo que proporciona una apariencia limpia y moderna.
import { useState } from 'react';

interface Props {
  images: string[];
}

export const GridImages = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 relative">
      <div className="bg-[#f2f2f2] h-[500px] p-4">
        <img
          src={activeImage}
          alt="Imagen de Producto"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex mt-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={`w-16 h-16 p-1 border ${
              activeImage === image ? 'border-black' : 'border-transparent'
            } rounded-lg hover:border-black focus:outline-none`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-ful object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
