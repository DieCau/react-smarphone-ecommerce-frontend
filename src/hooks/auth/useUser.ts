import { useQuery } from '@tanstack/react-query';
import { getSession } from '../../actions';

export const useUser = () => {
  // This hook is used to fetch the current user's session data.
  // It uses the `useQuery` hook from `@tanstack/react-query` to
  // perform the getSession action and manage the loading state.
  // The query key is ['user'] to uniquely identify the query.
  // The `retry` option is set to false to prevent retries.
  // The `refetchOnWindowFocus` option is set to true to automatically
  // refetch the data when the window is focused.
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getSession,
    retry: false,
    refetchOnWindowFocus: true,
  });

  return {
    session: data?.session,
    isLoading,
  };
};
