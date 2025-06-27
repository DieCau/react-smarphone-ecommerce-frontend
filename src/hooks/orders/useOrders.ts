import { useQuery } from '@tanstack/react-query';
import { getOrdersByCustomerId } from '../../actions';

export const useOrders = () => {
  // Fetch orders for a specific customer
  // This hook uses the getOrdersByCustomerId function to retrieve orders
  // and returns the data and loading state.
  // The queryKey is set to 'orders' to uniquely identify this query.
  // The retry option is set to false to prevent retries on failure.
  // Adjust the queryKey and queryFn as necessary for your application.
  // Ensure that getOrdersByCustomerId is defined to accept the necessary parameters.
  // This example assumes that getOrdersByCustomerId does not require any parameters.
  // If it does, you may need to modify the hook to accept those parameters.
  // Example: const { data, isLoading } = useOrders(customerId);
  const { data, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrdersByCustomerId,
    retry: false,
  });

  return {
    data,
    isLoading,
  };
};
