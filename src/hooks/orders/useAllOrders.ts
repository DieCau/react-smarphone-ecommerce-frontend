import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../../actions';

export const useAllOrders = () => {
  // This hook is used to fetch all orders for the admin.
  // It uses the `useQuery` hook from `@tanstack/react-query` to
  // perform the getAllOrders action and manage the loading state.
  // The query key is ['orders', 'admin'] to uniquely identify the query.
  // The query function is getAllOrders which fetches the orders from the server.
  // It returns an object containing the data and isLoading state.
  // The query will automatically refetch when the window is focused. 
  const { data, isLoading } = useQuery({
    queryKey: ['orders', 'admin'],
    queryFn: getAllOrders,
  });

  return {
    data,
    isLoading,
  };
};
