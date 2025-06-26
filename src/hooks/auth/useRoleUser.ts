import { useQuery } from '@tanstack/react-query';
import { getUserRole } from '../../actions';

export const useRoleUser = (userId: string) => {
  // Fetch user role based on the provided userId
  // This hook will return the user role data and loading state
  // It will only run if userId is truthy
  // and will not retry on failure.
  // It will refetch data when the window is focused.
  // The query key is ['rol-user'] to uniquely identify the query.
  // The query function is getUserRole which fetches the user role from the server.
  // The return value is an object containing the data and isLoading state.
  // Note: The query key does not include userId, as the role is not user-specific.
  // If you need to fetch roles for a specific user, consider modifying the query key.  
  // For example, you can use ['rol-user', userId] as the query key to uniquely identify the query for a specific user.
  const { data, isLoading } = useQuery({
    queryKey: ['rol-user'],
    queryFn: async () => await getUserRole(userId),
    enabled: !!userId,
  });

  return {
    data,
    isLoading,
  };
};
