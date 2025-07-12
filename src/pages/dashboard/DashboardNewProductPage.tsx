import { FormProduct } from '../../components/dashboard';

// Esta página se utiliza para agregar un nuevo producto.
// Representa el componente FormProduct con un título "Agregar Producto".
// El componente FormProduct gestiona la lógica del 
// formulario para agregar un producto.
// y se importa desde el directorio de componentes/panel.

export const DashboardNewProductPage = () => {

  return (
    <div>
      <FormProduct titleForm="Agregar Producto" />
    </div>
  );
};
