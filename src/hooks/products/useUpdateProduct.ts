import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../actions';
import type { ProductInput } from '../../interfaces';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useUpdateProduct = (productId: string) => {
  // This hook is used to update a product.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the updateProduct action and manage the loading state.
  // The queryClient is used to invalidate the 'products' query after a successful update.
  // The `mutate` function is used to trigger the update, and `isPending` indicates if the mutation is in progress.
  // On success, it invalidates the 'products' query to refresh the product list.
  // On error, it logs the error and shows a toast notification.
  // The hook returns an object containing the `mutate` function and the `isPending` state.
  // The `mutate` function can be called with the updated product data to trigger the update operation.
  // The `isPending` state can be used to show a loading indicator while the update is in progress.
  // Example usage:
  // const { mutate, isPending } = useUpdateProduct(productId);
  // mutate({ name: 'New Product Name', price: 100 });  
  
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ProductInput) => updateProduct(productId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      toast.success('Producto actualizado', {
        position: 'bottom-right',
      });
      navigate('/dashboard/productos');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Ocurrió un error al actualizar el producto', {
        position: 'bottom-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
