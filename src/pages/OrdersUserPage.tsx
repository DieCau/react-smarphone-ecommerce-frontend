// OrdersUserPage.tsx
import { Link } from 'react-router-dom';
import { useOrders } from '../hooks';
import { Loader } from '../components/shared/Loader';
import { TableOrders } from '../components/orders/TableOrders';

// Component OrdersUserPage
// Custom Hook para obtener pedidos
// Devuelve un objeto con los datos y un estado de carga
// Si los datos aún no se han cargado, devolverá un array vacío
// Si los datos se han cargado, devolverá los pedidos
// El hook también gestiona el estado de carga
// y devuelve un indicador de carga mientras se obtienen los datos
// El hook se utiliza para obtener los pedidos del servidor
// y mostrarlos en una tabla
export const OrdersUserPage = () => {
  
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
