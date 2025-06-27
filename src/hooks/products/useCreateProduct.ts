import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useCreateProduct = () => {
  // This hook is used to create a new product.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the createProduct action and manage the loading state.
  // The mutation function is createProduct which sends the product data to the server.
  // It returns an object containing the mutate function and isPending state.   
  // The mutate function is used to trigger the createProduct action when called.
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      navigate('/dashboard/productos');
    },
    onError: (error) => {
      toast.error('Ocurrió un error al crear el producto');
      console.log(error);
    },
  });

  return {
    mutate,
    isPending,
  };
};
