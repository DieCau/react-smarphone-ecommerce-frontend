import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useLogin = () => {
  // This hook is used to handle user login functionality.
  // It uses the `useMutation` hook from `@tanstack/react-query` to
  // perform the sign-in action and manage the loading state.
  // It also uses the `useNavigate` hook from `react-router-dom` to
  // navigate to the home page after successful login.
  // It uses the `useQueryClient` hook from `@tanstack/react-query` to
  // invalidate the user query after successful login.
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
        position: 'bottom-right',
      });
    },
  });

  return {
    mutate,
    isPending,
  };
};
