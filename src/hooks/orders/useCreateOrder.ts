import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useCreateOrder = () => {
  // This hook is used to create a new order.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the createOrder action and manage the loading state.
  // The `useQueryClient` hook is used to access the query client for invalidating
  // queries after a successful mutation.
  // The `useNavigate` hook from `react-router-dom` is used to navigate to
  // the thank you page after the order is created.
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
      navigate(`/checkout/${data.id}/thank-you`);
    },
    onError: (error) => {
      toast.error(error.message, {
        position: 'bottom-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
