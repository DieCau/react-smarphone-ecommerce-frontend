import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../actions';
import toast from 'react-hot-toast';

// Este hook se usa para eliminar un producto.
// Utiliza el hook `useMutation` de `@tanstack/react-query` para ejecutar 
// la acción `deleteProduct` y gestionar el estado de carga.
// El `queryClient` se usa para invalidar la consulta `products` tras una eliminación exitosa.
// La función `mutate` se usa para activar la eliminación, e `isPending` indica si la mutación está en progreso.
// En caso de éxito, invalida la consulta `products` para actualizar la lista de productos.
// En caso de error, lo registra y muestra una notificación.
export const useDeleteProduct = () => {
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
        position: 'top-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
