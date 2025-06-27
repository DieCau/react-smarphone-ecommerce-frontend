import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../actions';
import toast from 'react-hot-toast';

export const useDeleteProduct = () => {
  // This hook is used to delete a product.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the deleteProduct action and manage the loading state.
  // The queryClient is used to invalidate the 'products' query after a successful deletion.
  // The `mutate` function is used to trigger the deletion, and `isPending` indicates if the mutation is in progress.
  // On success, it invalidates the 'products query to refresh the product list.
  // On error, it logs the error and shows a toast notification.  
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      toast.success('Producto eliminado correctamente', {
        position: 'bottom-right',
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error('Ocurrió un error al eliminar el producto', {
        position: 'bottom-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
