import { useNavigate } from 'react-router-dom';
import { formatDateLong, formatPrice, getStatus } from '../../helpers';
import type { OrderItemSingle } from '../../interfaces';

interface Props {
  orders: OrderItemSingle[];
}

const tableHeaders = ['ID', 'Fecha', 'Estado', 'Total'];

// This component displays a table of orders with clickable rows that navigate to the order details page.
// Each row shows the order ID, creation date, status, and total amount.
// The table is styled with Tailwind CSS for a clean and modern look.
// The headers are defined in the `tableHeaders` array, and the orders are passed as a prop.
// The `useNavigate` hook from React Router is used to handle navigation when a row is clicked.
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
