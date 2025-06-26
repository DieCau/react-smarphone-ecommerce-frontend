import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../actions';

export const useCustomer = (userId: string) => {

	// Fetch user data based on the provided userId
	// This hook will return the user data and loading state
	// It will only run if userId is truthy
	// and will not retry on failure.
	// It will refetch data when the window is focused.
	// The query key is ['customer', userId] to uniquely identify the query.
	// The query function is getUserData which fetches the user data from the server.
	// The return value is an object containing the data and isLoading state.
	const { data, isLoading } = useQuery({
		queryKey: ['customer', userId],
		queryFn: () => getUserData(userId),
		enabled: !!userId,
		retry: false,
		refetchOnWindowFocus: true,
	});

	return {
		data,
		isLoading,
	};
};
