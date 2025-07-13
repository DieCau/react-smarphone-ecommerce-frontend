import { useQuery } from '@tanstack/react-query';
import { getFilteredProducts } from '../../actions';

// Este hook se utiliza para obtener productos filtrados según la página y las marcas proporcionadas.
// Utiliza el hook `useQuery` de `@tanstack/react-query` para obtener los productos filtrados del servidor.
// La clave de consulta se establece en ['filteredProducts', page, brands] para identificar esta consulta de forma única.
// La función de consulta es `getFilteredProducts`, que obtiene los productos según la página y las marcas actuales.
// Devuelve un objeto que contiene los datos, el estado de carga y el número total de productos.
export const useFilteredProducts = ({
  page,
  brands,
}: {
  page: number;
  brands: string[];
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['filteredProducts', page, brands],
    queryFn: () => getFilteredProducts({ page, brands }),
    retry: false,
  });

  return {
    data: data?.data,
    isLoading,
    totalProducts: data?.count ?? 0,
  };
};
