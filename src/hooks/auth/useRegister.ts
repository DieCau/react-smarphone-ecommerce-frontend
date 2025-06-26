import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../actions';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useRegister = () => {
  // This hook is used to handle user registration.
  // It uses the useMutation hook from react-query to perform the sign-up action.
  // It also uses useNavigate from react-router-dom to redirect the user after successful registration.
  // It also uses useQueryClient from react-query to invalidate the user query after successful registration.
  // It returns an object with the mutate function and the isPending state.
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
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
