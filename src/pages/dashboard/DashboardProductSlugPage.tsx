import { FormProduct } from '../../components/dashboard';

export const DashboardProductSlugPage = () => {
  // This component is used to edit a product in the admin dashboard.
  // It renders a form for editing the product details.
  // The form is displayed with the title "Editar Producto".
  // It is expected to be used in a route that provides the product ID in the URL.
  // The component imports the FormProduct component from the 'components/dashboard' directory.
   
  return (
    <div>
      <FormProduct titleForm="Editar Producto" />
    </div>
  );
};
