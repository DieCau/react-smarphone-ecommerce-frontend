import type { PreparedProducts } from '../../interfaces';
import { CardProduct } from '../products/CardProduct';

interface Props {
  title: string;
  products: PreparedProducts[];
}

// This component displays a grid of products with a title.
// It maps through the products array and renders a CardProduct component for each product.
// The grid is responsive, adjusting the number of columns based on the screen size.
// The title is displayed above the grid, styled with a larger font size for emphasis.
// The products are expected to have properties like id, name, price, colors, images,
// slug, and variants, which are used to populate the CardProduct component.
// The component is designed to be reusable, allowing different titles and product lists to be passed as props.
// The grid layout is achieved using Tailwind CSS classes, providing a clean and modern look.
export const ProductGrid = ({ title, products }: Props) => {
  return (
    <div className="my-32">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className='max-w-7xl mx-auto px-4'>
        <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              colors={product.colors}
              img={product.images[0]}
              slug={product.slug}
              variants={product.variants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
