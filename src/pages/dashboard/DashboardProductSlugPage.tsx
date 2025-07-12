import { FormProduct } from '../../components/dashboard';

// Este componente se utiliza para editar un producto en el panel de administración.
// Genera un formulario para editar los detalles del producto.
// El formulario se muestra con el título "Editar Producto".
// Se espera que se utilice en una ruta que proporcione el ID del producto en la URL.
// El componente importa el componente FormProduct desde el directorio 'components/dashboard'.
export const DashboardProductSlugPage = () => {
  return (
    <div>
      <FormProduct titleForm="Editar Producto" />
    </div>
  );
};
