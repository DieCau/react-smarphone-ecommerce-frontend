import { useState } from 'react';

interface Props {
  images: string[];
}

// This component displays a grid of images for a product.
// It allows users to click on thumbnails to view a larger version of the image.
// The active image is highlighted with a border, and the main image is displayed in a larger container.
// The component is designed to be responsive, adapting to different screen sizes.
// The images are expected to be passed as an array of strings, where each string is a URL to an image.
// The component uses Tailwind CSS for styling, providing a clean and modern look.
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
