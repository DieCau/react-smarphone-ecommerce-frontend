import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TableProduct } from '../../components/dashboard';

// Este componente muestra la página de productos en el panel de administración.
// Incluye un enlace para crear un nuevo producto y muestra una tabla de productos existentes.
// El enlace usa un ícono y está diseñado para aparecer como un botón.
// El componente TableProduct se utiliza para mostrar la lista de productos en formato de tabla.
// Se espera que el componente se utilice en una ruta que muestre los productos en el panel de administración.
export const DashboardProductsPage = () => {
  
  return (
    <div className="h-full flex flex-col gap-2">
      <Link
        to="/dashboard/productos/new"
        className="bg-black text-white flex items-center self-end py-[6px] px-2 rounded-md text-sm gap-1 font-semibold"
      >
        <IoAddCircleOutline className="inline-block" />
        Nuevo Producto
      </Link>

      <TableProduct />
    </div>
  );
};
