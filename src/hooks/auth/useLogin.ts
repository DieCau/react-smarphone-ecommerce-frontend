import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Este hook se utiliza para gestionar la funcionalidad de inicio de sesión del usuario.
// Utiliza el hook `useMutation` de `@tanstack/react-query` para
// realizar el inicio de sesión y gestionar el estado de carga.
// También utiliza el hook `useNavigate` de `react-router-dom` para
// navegar a la página de inicio tras iniciar sesión correctamente.
// Utiliza el hook `useQueryClient` de `@tanstack/react-query` para
// invalidar la consulta del usuario tras iniciar sesión correctamente.
// El hook devuelve un objeto con la función `mutate` para iniciar sesión
// y un booleano `isPending` que indica si la solicitud de inicio de sesión está en curso. 
// Si la solicitud falla, muestra un mensaje de error utilizando `toast`.
export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/');
    },
    onError: (err) => {
      toast.error(err.message, {
        position: 'top-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
