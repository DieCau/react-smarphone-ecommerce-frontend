import { FormProduct } from '../../components/dashboard';

export const DashboardNewProductPage = () => {
  // This page is used to add a new product
  // It renders the FormProduct component with a title
  // "Agregar Producto" (Add Product)
  // The FormProduct component handles the form logic for adding a product
  // and is imported from the components/dashboard directory
  return (
    <div>
      <FormProduct titleForm="Agregar Producto" />
    </div>
  );
};
