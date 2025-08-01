import { Link } from 'react-router-dom';

// Este componente representa un banner en la página de inicio.
// Incluye una imagen de fondo, un título, un subtítulo y un botón de llamada a la acción.
// El banner está diseñado para ser atractivo y destacar las ofertas de celulares.
// Utiliza Tailwind CSS para el estilo y la disposición.
// El componente se exporta como Banner para su uso en otras partes de la aplicación.

export const Banner = () => {
  return (
    <div className="relative bg-gray-500 text-white">
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 h-full"
        style={{ backgroundImage: 'url(/img/img_Banner-2.jpg)' }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
          Los mejores celulares del 2025
        </h1>

        <p className="text-lg mb-8 lg:text-2xl">
          Descubre las ofertas exclusivas y las últimas novedades en celulares
        </p>

        <Link
          to="/celulares"
          className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Ver celulares
        </Link>
      </div>
    </div>
  );
};
