import { useState } from 'react';
import { FaEllipsis } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDeleteProduct, useProducts } from '../../../hooks';
import { Loader } from '../../shared/Loader';
import { formatDate, formatPrice } from '../../../helpers';
import { Pagination } from '../../shared/Pagination';
import { CellTableProduct } from './CellTableProduct';

const tableHeaders = [
  '',
  'Nombre',
  'Variante',
  'Precio',
  'Stock',
  'Fecha de creación',
  '',
];

// Este componente genera una tabla de productos con sus detalles.
// Permite a los usuarios seleccionar variantes, eliminar productos y navegar a páginas de edición.
// Utiliza enlaces personalizados para obtener productos y gestionar su eliminación.
export const TableProduct = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: number;
  }>({});
  const [page, setPage] = useState(1);

  const { products, isLoading, totalProducts } = useProducts({
    page,
  });
  const { mutate, isPending } = useDeleteProduct();

  const handleMenuToggle = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

// Esta función gestiona el cambio de la variante seleccionada de un producto.
// Actualiza el estado con el índice de la variante seleccionada para el ID del producto dado.
// Se utiliza para mostrar los detalles correctos de la variante en la tabla.
// El índice de la variante seleccionada se almacena en el objeto de estado `selectedVariants`.
// La clave es el ID del producto y el valor es el índice de la variante seleccionada.
// Esto permite al usuario cambiar entre diferentes variantes de un producto.
// Cuando el usuario selecciona una variante diferente del menú desplegable, se llama a esta función para actualizar el estado.
// La variante seleccionada se utiliza para mostrar la información correcta de precio y stock en la tabla.
  const handleVariantChange = (productId: string, variantIndex: number) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variantIndex,
    });
  };

  const handleDeleteProduct = (id: string) => {
    mutate(id);
    setOpenMenuIndex(null);
  };

  if (!products || isLoading || !totalProducts || isPending) return <Loader />;

  return (
    // This component renders a table of products with their details.
    // It allows users to select variants, delete products, and navigate to edit pages.
    // It uses custom hooks to fetch products and handle deletion.
    // The table displays product images, names, selected variants, prices, stock,
    // creation dates, and action buttons for editing and deleting products.
    // The `useProducts` hook fetches the products data and handles pagination.
    // The `useDeleteProduct` hook handles the deletion of a product when the user
    // clicks the delete button in the menu.
    // The `formatPrice` and `formatDate` functions are used to format the
    // price and date values for better readability.
    // The `CellTableProduct` component is used to render the content of each cell
    // in the table, providing a consistent style for product names, prices, and dates
    <div className="flex flex-col flex-1 border border-gray-200 rounded-lg p-5 bg-white">
      <h1 className="font-bold text-xl">Productos</h1>

      <p className="text-sm mt-1 mb-8 font-regular text-gray-500">
        Gestiona tus productos y mira las estadísticas de tus ventas
      </p>

      {/* Tabla */}
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
          <tbody>
            {products.map((product, index) => {
              const selectedVariantIndex = selectedVariants[product.id] ?? 0;
              const selectedVariant =
                product.variants[selectedVariantIndex] || {};

              return (
                <tr key={index}>
                  <td className="p-4 align-middle sm:table-cell">
                    <img
                      src={
                        product.images[0] ||
                        'https://ui.shadcn.com/placeholder.svg'
                      }
                      alt="Imagen Product"
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 aspect-square rounded-md object-contain"
                    />
                  </td>
                  <CellTableProduct content={product.name} />
                  <td className="p-4 font-medium tracking-tighter">
                    <select
                      className="border border-gray-300 rounded-md p-1 w-full"
                      onChange={(e) =>
                        handleVariantChange(product.id, Number(e.target.value))
                      }
                      value={selectedVariantIndex}
                    >
                      {product.variants.map((variant, variantIndex) => (
                        <option key={variant.id} value={variantIndex}>
                          {variant.color_name} - {variant.storage}
                        </option>
                      ))}
                    </select>
                  </td>
                  <CellTableProduct
                    content={formatPrice(selectedVariant?.price)}
                  />
                  <CellTableProduct
                    content={(selectedVariant.stock || 0).toString()}
                  />
                  <CellTableProduct content={formatDate(product.created_at)} />
                  <td className="relative">
                    <button
                      className="text-slate-900"
                      onClick={() => handleMenuToggle(index)}
                    >
                      <FaEllipsis />
                    </button>
                    {openMenuIndex === index && (
                      <div
                        className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-xl z-10 w-[120px]"
                        role="menu"
                      >
                        <Link
                          to={`/dashboard/productos/editar/${product.slug}`}
                          className="flex items-center gap-1 w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                        >
                          Editar
                          <HiOutlineExternalLink
                            size={13}
                            className="inline-block"
                          />
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Controles de paginación */}
      <Pagination page={page} setPage={setPage} totalItems={totalProducts} />
    </div>
  );
};
