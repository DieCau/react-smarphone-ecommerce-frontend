import { useQuery } from '@tanstack/react-query';
import { getOrderById } from '../../actions';

export const useOrderAdmin = (id: number) => {
  // This hook is used to fetch a specific order by its ID for admin purposes.
  // It uses the `useQuery` hook from `@tanstack/react-query` to
  // perform the getOrderById action and manage the loading state.
  // The query key is ['order', 'admin', id] to uniquely identify the query.
  // The query function is getOrderById which fetches the order from the server.
  // It returns an object containing the data and isLoading state.
  const { data, isLoading } = useQuery({
    queryKey: ['order', 'admin', id],
    queryFn: () => getOrderById(id),
    enabled: !!id,
    retry: false,
  });

  return {
    data,
    isLoading,
  };
};
