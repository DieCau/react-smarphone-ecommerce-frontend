import { useNavigate } from 'react-router-dom';
import { formatDateLong, formatPrice, getStatus } from '../../helpers';
import type { OrderItemSingle } from '../../interfaces';

interface Props {
  orders: OrderItemSingle[];
}

const tableHeaders = ['ID', 'Fecha', 'Estado', 'Total'];

// Este componente muestra una tabla de pedidos con filas clicables que llevan a la página de detalles del pedido.
// Cada fila muestra el ID del pedido, la fecha de creación, el estado y el importe total.
// La tabla está diseñada con Tailwind CSS para una apariencia limpia y moderna.
// Los encabezados se definen en la matriz `tableHeaders` y los pedidos se pasan como una propiedad.
// El gancho `useNavigate` de React Router se utiliza para gestionar la navegación al hacer clic en una fila.
export const TableOrders = ({ orders }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      {/* Tabla de Pedidos */}
      <table className="text-sm w-full caption-bottom overflow-auto">
        <thead className="border-b border-gray-200 pb-3">
          <tr className="text-sm font-bold">
            {tableHeaders.map((header, index) => (
              <th key={index} className="h-12 px-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="[&_tr:last-child]:border-0">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate(`/account/pedidos/${order.id}`)}
            >
              <td className="p-4 font-medium tracking-tighter">{order.id}</td>
              <td className="p-4 font-medium tracking-tighter">
                {formatDateLong(order.created_at)}
              </td>
              <td className="p-4 font-medium tracking-tighter">
                {getStatus(order.status)}
              </td>
              <td className="p-4 font-medium tracking-tighter">
                {formatPrice(order.total_amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};