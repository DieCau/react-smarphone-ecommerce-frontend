import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../actions';

// Obtener datos del usuario según el ID de usuario proporcionado
// Este hook devolverá los datos del usuario y el estado de carga.
// Solo se ejecutará si el ID de usuario es verdadero.
// y no se reintentará en caso de error.
// Volverá a obtener los datos cuando la ventana tenga el foco.
// La clave de consulta es ['customer', userId] para identificar la consulta de forma única.
// La función de consulta es getUserData, que obtiene los datos del usuario del servidor.
// El valor de retorno es un objeto que contiene los datos y el estado isLoading.
// El estado isLoading se establecerá en true mientras se obtengan los datos del servidor.

export const useCustomer = (userId: string) => {
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
