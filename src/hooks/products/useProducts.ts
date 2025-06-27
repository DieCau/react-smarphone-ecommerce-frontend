import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../actions';

export const useProducts = ({ page = 1 }: { page?: number }) => {
  // This hook is used to fetch products from the server.
  // It uses the `useQuery` hook from `@tanstack/react-query` to fetch the products from the server.
  // The `queryKey` is used to identify the query and the `queryFn` is used to fetch the products from the server. 
  // The `staleTime` is used to set the time after which the query will be considered stale.
  // The `enabled` prop is used to enable or disable the query.
  // The `data` prop is used to store the data returned from the server.
  // The `isLoading` prop is used to check if the query is still loading. 
  // The `totalProducts` prop is used to store the total number of products.
  // The `products` prop is used to store the products returned from the server.

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
