import { useQuery } from '@tanstack/react-query';
import { getProductBySlug } from '../../actions';

// Utiliza el hook `useQuery` de `@tanstack/react-query` para ejecutar la acción `getProductBySlug` y gestionar el estado de carga.
// La clave de consulta se establece en ['product', slug] para identificar esta consulta de forma única. Esto garantiza que la consulta solo se ejecute una vez por cada slug único.
// La función `queryFn` se establece en `getProductBySlug`, que es la acción que obtiene los datos del producto.
// El hook devuelve el producto obtenido, así como los estados `isLoading` e `isError` para gestionar la interfaz de usuario.
// El parámetro `slug` es el identificador único del producto que se está consultando
// y se pasa a la función de consulta para obtener el producto específico.
// El hook también incluye una opción `retry: false` para evitar reintentos automáticos en caso de error.
export const useProduct = (slug: string) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug),
    retry: false,
  });

  return {
    product,
    isError,
    isLoading,
  };
};
