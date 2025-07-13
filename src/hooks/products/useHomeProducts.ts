import { useQueries } from '@tanstack/react-query';
import { getRandomProducts, getRecentProducts } from '../../actions';

// Este hook se utiliza para obtener productos recientes y populares para la página de inicio.
// Utiliza el hook `useQueries` de `@tanstack/react-query` para realizar varias consultas en paralelo.
// La primera consulta obtiene productos recientes y la segunda, productos populares.
// Las claves de consulta se establecen en 'recentProducts' y 'popularProducts' para identificar estas consultas de forma única.
// Las funciones de consulta son getRecentProducts y getRandomProducts, respectivamente.
// El hook devuelve un array de objetos de consulta, donde cada objeto contiene la clave de consulta, la función de consulta y otra información relevante.
// El hook también devuelve los booleanos `isLoading` y `isError`, que indican si las consultas aún se están cargando 
// o si se produjo un error durante la consulta.
export const useHomeProducts = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['recentProducts'],
        queryFn: getRecentProducts,
      },
      {
        queryKey: ['popularProducts'],
        queryFn: getRandomProducts,
      },
    ],
  });

  const [recentProductsResult, popularProductsResult] = results; // [resultadoQuery1, resultadoQuery2]

  // Combinar los estados de las consultas
  const isLoading =
    recentProductsResult.isLoading || popularProductsResult.isLoading;
  const isError = recentProductsResult.isError || popularProductsResult.isError;

  return {
    recentProducts: recentProductsResult.data || [],
    popularProducts: popularProductsResult.data || [],
    isLoading,
    isError,
  };
};
