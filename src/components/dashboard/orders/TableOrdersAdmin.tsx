import { useNavigate } from 'react-router-dom';
import { formatDateLong, formatPrice } from '../../../helpers';
import type { OrderWithCustomer } from '../../../interfaces';
import { useChangeStatusOrder } from '../../../hooks';

const tableHeaders = ['Cliente', 'Fecha', 'Estado', 'Total'];

const statusOptions = [
  { value: 'Pending', label: 'Pendiente' },
  { value: 'Paid', label: 'Pagado' },
  { value: 'Shipped', label: 'Enviado' },
  { value: 'Delivered', label: 'Entregado' },
];

interface Props {
  orders: OrderWithCustomer[];
}

// Este componente muestra una tabla de pedidos para los usuarios administradores.
// Muestra el nombre, el correo electrónico, la fecha del pedido, el estado y el importe total del cliente.
// El estado se puede cambiar mediante un menú desplegable.
// Al hacer clic en un pedido, se accede a la página de detalles del pedido.
// El componente utiliza enlaces personalizados para cambiar el estado del pedido y dar formato a las fechas y los precios.

export const TableOrdersAdmin = ({ orders }: Props) => {
  const navigate = useNavigate();

  const { mutate } = useChangeStatusOrder();

  const handleStatusChange = (id: number, status: string) => {
    mutate({ id, status });
  };

  return (
    <div className="relative w-full h-full">
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
              className="cursor-pointer hover:bg-gray-200 transition-colors duration-200"
              onClick={() => navigate(`/dashboard/ordenes/${order.id}`)}
            >
              <td className="p-4 font-medium tracking-tighter flex flex-col gap-1">
                <span className="font-semibold">
                  {order.customers?.full_name}
                </span>
                <span>{order.customers?.email}</span>
              </td>
              <td className="p-4 font-medium tracking-tighter">
                {formatDateLong(order.created_at)}
              </td>
              <td className="p-4 font-medium tracking-tighter">
                <select
                  value={order.status}
                  onClick={(e) => e.stopPropagation()}
                  className="border border-gray-300 p-2 rounded"
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  {statusOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
