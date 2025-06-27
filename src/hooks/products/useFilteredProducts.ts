import { useQuery } from '@tanstack/react-query';
import { getFilteredProducts } from '../../actions';

export const useFilteredProducts = ({
  page,
  brands,
}: {
  page: number;
  brands: string[];
}) => {
  // This hook is used to fetch filtered products based on the provided page and brands.
  // It uses the `useQuery` hook from `@tanstack/react-query` to fetch the filtered products from the server.
  // The query key is set to ['filteredProducts', page, brands] to uniquely identify this query.
  // The query function is getFilteredProducts which fetches the products based on the current page and brands.
  // It returns an object containing the data, isLoading state, and totalProducts count.
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
