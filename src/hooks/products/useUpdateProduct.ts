import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../actions';
import type { ProductInput } from '../../interfaces';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Este hook se usa para actualizar un producto.
// Utiliza el hook `useMutation` de `@tanstack/react-query` para ejecutar la acción `updateProduct` y gestionar el estado de carga.
// QueryClient se usa para invalidar la consulta `products` tras una actualización exitosa.
// La función `mutate` se usa para activar la actualización, e `isPending` indica si la mutación está en curso.
// En caso de éxito, invalida la consulta `products` para actualizar la lista de productos.
// En caso de error, lo registra y muestra una notificación.
// El hook devuelve un objeto que contiene la función `mutate` y el estado `isPending`.
// La función `mutate` se puede llamar con los datos actualizados del producto para activar la operación de actualización.
// El estado `isPending` se puede usar para mostrar un indicador de carga mientras la actualización está en curso. 

export const useUpdateProduct = (productId: string) => {
  
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
