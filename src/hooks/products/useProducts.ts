import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../actions';

// Este hook se usa para obtener productos del servidor.
// Utiliza el hook `useQuery` de `@tanstack/react-query` para obtener los productos del servidor.
// La propiedad `queryKey` se usa para identificar la consulta y la propiedad `queryFn` para obtener los productos del servidor.
// El atributo `staleTime` se usa para establecer el tiempo después del cual la consulta se considerará obsoleta.
// La propiedad `enabled` se usa para habilitar o deshabilitar la consulta.
// La propiedad `data` se usa para almacenar los datos devueltos por el servidor.
// La propiedad `isLoading` se usa para comprobar si la consulta sigue cargándose.
// La propiedad `totalProducts` se usa para almacenar el número total de productos.
// La propiedad `products` se usa para almacenar los productos devueltos por el servidor.
export const useProducts = ({ page = 1 }: { page?: number }) => {

  const { data, isLoading } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    staleTime: 1000 * 60 * 5, // 1 hora
  });

  return {
    products: data?.products,
    isLoading,
    totalProducts: data?.count ?? 0,
  };
};
