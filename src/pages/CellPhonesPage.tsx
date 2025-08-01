// CellPhonesPage.tsx
import { useState } from 'react';
import { CardProduct } from '../components/products/CardProduct';
import { ContainerFilter } from '../components/products/ContainerFilter';
import { prepareProducts } from '../helpers';
import { useFilteredProducts } from '../hooks';
import { Pagination } from '../components/shared/Pagination';

// Estados para la paginación y los filtros
// Aquí se pueden agregar más filtros si es necesario
// Por ejemplo, filtros por precio, características, etc.
// Por ahora, solo se implementa el filtro por marcas
// y la paginación de productos.
// Este es el componente CellPhonesPage
// Muestra una lista de celulares filtrados por marcas
// y paginados. Utiliza el hook useFilteredProducts
// para obtener los productos filtrados y paginados.
// También utiliza el componente CardProduct para mostrar
// cada celular y el componente ContainerFilter para
// filtrar por marcas. La paginación se maneja con el
// componente Pagination, que permite navegar entre
// las diferentes páginas de productos.

export const CellPhonesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">Celulares</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* FILTROS */}
        <ContainerFilter
          setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
        />

        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center h-[500px]">
            <p className="text-2xl">Cargando...</p>
          </div>
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
              {preparedProducts.map((product) => (
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

            {/* TODO: Paginación */}
            <Pagination
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
