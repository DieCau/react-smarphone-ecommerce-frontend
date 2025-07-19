// HomePage.tsx
import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { ProductGridSkeleton } from '../components/skeletons/ProductGridSkeleton';
import { prepareProducts } from '../helpers';
import { useHomeProducts } from '../hooks';

// HomePage
// Obtiene los productos recientes y populares de la página de inicio
// Utiliza el hook useHomeProducts para obtener los productos
// y el estado de carga.
// Luego, prepara los productos para ser mostrados en la cuadrícula de productos.
// Finalmente, renderiza la cuadrícula de productos con los productos recientes 

export const HomePage = () => {
  const { recentProducts, popularProducts, isLoading } = useHomeProducts();

  const preparedRecentProducts = prepareProducts(recentProducts);
  const preparedPopularProducts = prepareProducts(popularProducts);

  return (
    <div>
      <FeatureGrid />

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Nuevos Productos"
          products={preparedRecentProducts}
        />
      )}

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Productos Destacados"
          products={preparedPopularProducts}
        />
      )}

      <Brands />
    </div>
  );
};
