import { useQuery } from '@tanstack/react-query';
import { getProductBySlug } from '../../actions';

export const useProduct = (slug: string) => {
  // This hook is used to fetch a product by its slug.
  // It uses the `useQuery` hook from `@tanstack/react-query` to
  // perform the getProductBySlug action and manage the loading state.
  // The query key is set to ['product', slug] to uniquely identify this query. 
  // This ensures that the query is only executed once for each unique slug.
  // The queryFn is set to getProductBySlug, which is the action that fetches the product data. 
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
