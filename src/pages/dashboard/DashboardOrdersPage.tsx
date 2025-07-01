import { TableOrdersAdmin } from '../../components/dashboard';
import { Loader } from '../../components/shared/Loader';
import { useAllOrders } from '../../hooks';

export const DashboardOrdersPage = () => {
  // This component displays a list of all orders in the admin dashboard.
  // It fetches the order data using a custom hook and displays it in a table format
  // using the TableOrdersAdmin component. It also shows a loading indicator while the data is
  // being fetched.
  const { data, isLoading } = useAllOrders();

  if (isLoading || !data) return <Loader />;

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Órdenes</h1>

      <TableOrdersAdmin orders={data} />
    </div>
  );
};
