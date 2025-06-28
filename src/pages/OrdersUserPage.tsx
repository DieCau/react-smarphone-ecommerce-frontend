import { Link } from 'react-router-dom';
import { useOrders } from '../hooks';
import { Loader } from '../components/shared/Loader';
import { TableOrders } from '../components/orders/TableOrders';

// Component OrdersUserPage
export const OrdersUserPage = () => {
  // Custom hook to fetch orders
  // It returns an object with the data and a loading state
  // If the data is not yet loaded, it will return an empty array
  // If the data is loaded, it will return the orders
  // The hook also handles the loading state
  // and returns a loading spinner while the data is being fetched
  // The hook is used to fetch the orders from the server
  // and display them in a table
  
  const { data: orders, isLoading } = useOrders();

  if (isLoading || !orders) return <Loader />;

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-2">
        <h1 className="text-3xl font-bold">Pedidos</h1>
        <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] flex justify-center items-center mt-1">
          {orders.length}
        </span>
      </div>

      {orders.length === 0 ? (
        <>
          <p className="text-slate-600 text-[13px]">
            Todavía no has hecho ningún pedido
          </p>
          <Link
            to="/celulares"
            className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full px-8"
          >
            Empezar a comprar
          </Link>
        </>
      ) : (
        <TableOrders orders={orders} />
      )}
    </div>
  );
};
