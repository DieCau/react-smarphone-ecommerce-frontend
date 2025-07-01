import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TableProduct } from '../../components/dashboard';

export const DashboardProductsPage = () => {
  // This component renders the products page in the admin dashboard.
  // It includes a link to create a new product and displays a table of existing products.
  // The link uses an icon and is styled to appear as a button.
  // The TableProduct component is used to display the list of products in a table format.
  // The component is expected to be used in a route that displays the products in the admin dashboard.
  
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
