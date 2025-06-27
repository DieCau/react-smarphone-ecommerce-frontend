import { useQueries } from '@tanstack/react-query';
import { getRandomProducts, getRecentProducts } from '../../actions';

export const useHomeProducts = () => {
  // This hook is used to fetch recent and popular products for the home page.
  // It uses the `useQueries` hook from `@tanstack/react-query` to
  // perform multiple queries in parallel.
  // The first query fetches recent products, and the second query fetches popular products.
  // The query keys are set to 'recentProducts' and 'popularProducts' to uniquely
  // identify these queries.
  // The query functions are getRecentProducts and getRandomProducts respectively.  
  // The hook returns an array of query objects, where each object contains the query key, query function, and other relevant information.
  // The hook also returns a boolean isLoading and a boolean isError, which indicate whether the queries are still loading or if there was an error during the query.
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
