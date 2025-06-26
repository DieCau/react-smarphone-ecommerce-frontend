import { useQuery } from '@tanstack/react-query';
import { getOrderById } from '../../actions';

export const useOrder = (orderId: number) => {
  // This hook is used to fetch a specific order by its ID.
  // It uses the `useQuery` hook from `@tanstack/react-query` to
  // perform the getOrderById action and manage the loading and error states.
  // The query key is ['order', orderId] to uniquely identify the query.
  // The query function is getOrderById which fetches the order from the server.
  // It returns an object containing the data, isLoading state, and isError state.
  const { data, isLoading, isError } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
    retry: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
