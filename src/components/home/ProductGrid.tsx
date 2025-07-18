import type { PreparedProducts } from '../../interfaces';
import { CardProduct } from '../products/CardProduct';

interface Props {
  title: string;
  products: PreparedProducts[];
}

// Este componente muestra una cuadrícula de productos con un título.
// Se mapea a través de la matriz de productos y renderiza un componente CardProduct para cada producto.
// La cuadrícula es adaptable y ajusta el número de columnas según el tamaño de la pantalla.
// El título se muestra sobre la cuadrícula, con un tamaño de fuente más grande para resaltarlo.
// Se espera que los productos tengan propiedades como id, nombre, precio, colores, imágenes, slug y variantes, 
// que se utilizan para rellenar el componente CardProduct.
// El componente está diseñado para ser reutilizable, lo que permite pasar diferentes títulos y listas de productos como propiedades.
// El diseño de la cuadrícula se logra mediante clases CSS de Tailwind, lo que proporciona una apariencia limpia y moderna.

export const ProductGrid = ({ title, products }: Props) => {
  return (
    <div className="my-32">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className='max-w-7xl mx-auto px-4'>
        <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              colors={product.colors}
              img={product.images[0]}
              slug={product.slug}
              variants={product.variants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
