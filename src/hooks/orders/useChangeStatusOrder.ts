import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateOrderStatus } from '../../actions';
import toast from 'react-hot-toast';

export const useChangeStatusOrder = () => {
  // This hook is used to change the status of an order.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the updateOrderStatus action and manage the loading state.
  // It also uses the `useQueryClient` hook from `@tanstack/react-query` to
  // invalidate the orders query after successful status update.
  // It returns an object with the mutate function and the isPending state.
  // The mutate function is used to trigger the updateOrderStatus action,
  // and the isPending state is used to display a loading indicator.
  // The `useQueryClient` hook is used to invalidate the orders query after
  // successful status update.
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders', 'admin'],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error('No se pudo actualizar el estado de la orden', {
        position: 'bottom-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
