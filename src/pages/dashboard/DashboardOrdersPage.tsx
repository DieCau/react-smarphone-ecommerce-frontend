import { TableOrdersAdmin } from '../../components/dashboard';
import { Loader } from '../../components/shared/Loader';
import { useAllOrders } from '../../hooks';

// Este componente muestra una lista de todos los pedidos en el panel de administración.
// Obtiene los datos de los pedidos mediante un custom hook y los muestra en formato de tabla.
// Mediante el componente TableOrdersAdmin, también muestra un indicador de carga mientras se obtienen los datos.
export const DashboardOrdersPage = () => {
  const { data, isLoading } = useAllOrders();

  if (isLoading || !data) return <Loader />;

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Órdenes</h1>

      <TableOrdersAdmin orders={data} />
    </div>
  );
};
