// Una lista de marcas para mostrar en la página de inicio.
const brands = [
  {
    image: './img/brands/apple-logo.webp',
    alt: 'Apple',
  },
  {
    image: './img/brands/samsung-logo.webp',
    alt: 'Samsung',
  },
  {
    image: '/img/brands/xiomi.com.png',
    alt: 'Xiaomi',
  },
  {
    image: '/img/brands/realme-free.png',
    alt: 'Realme',
  },
  {
    image: '/img/brands/huawei-logo.png',
    alt: 'Huawei',
  },

  {
    image: '/img/brands/honor-logo.png',
    alt: 'Honor',
  },
];

// Este componente muestra una lista de marcas disponibles en la tienda.
// Incluye un título, una descripción y una cuadrícula de logotipos de marcas.
export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-16 pb-12">
      <h2 className="font-bold text-2xl">Marcas que disponemos</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo más moderno en tecnología y los últimos modelos de celulares
        disponibles
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
