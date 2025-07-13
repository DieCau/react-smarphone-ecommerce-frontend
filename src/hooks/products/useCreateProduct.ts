import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Este hook se usa para crear un nuevo producto.
// Utiliza el hook `useMutation` de `@tanstack/react-query` para ejecutar 
// la acción `createProduct` y gestionar el estado de carga.
// La función `mutate`, que envía los datos del producto al servidor, es `createProduct`.
// Devuelve un objeto que contiene la función `mutate` y el estado `isPending`.
// La función `mutate` se usa para activar la acción `createProduct` al llamarla.
export const useCreateProduct = () => {
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
