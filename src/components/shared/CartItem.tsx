import { LuMinus, LuPlus } from 'react-icons/lu';
import { formatPrice } from '../../helpers';
import { useCartStore } from '../../store/cart.store';

export interface ICartItem {
  variantId: string;
  productId: string;
  name: string;
  color: string;
  storage: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  item: ICartItem;
}

export const CartItem = ({ item }: Props) => {
  // Actions from the cart store
  // removeItem is used to remove an item from the cart
  // updateQuantity is used to update the quantity of an item in the cart
  // Both are functions that update the state of the cart store 
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = () => {
    updateQuantity(item.variantId, item.quantity + 1);
  };

  const decrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.variantId, item.quantity - 1);
    }
  };

  return (
    // This component renders a single cart item with its details and actions
    // It displays the product image, name, price, storage, color, and quantity controls
    // It also provides a button to remove the item from the cart
    // The increment and decrement functions are used to update the quantity of the item
    // The removeItem function is called when the user clicks on the "Eliminar" button
    // The component is styled using Tailwind CSS classes for layout and appearance
    // The item prop is an object that contains the details of the cart item
    // The component is used in the Cart component to display the list of items in the cart
    // The component is responsive and adjusts its layout based on the available space
    // The component uses the formatPrice helper function to format the price of the item
    // The component is reusable and can be used in different parts of the application
    // The component is typed with TypeScript to ensure type safety and better developer experience
    // The component is exported as a named export for use in other components
    // The component is a functional component that receives props and returns JSX
    <li className="flex justify-between items-center gap-5">
      <div className="flex">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-contain"
        />
      </div>

      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm font-medium text-gray-600 mt-1">
            {formatPrice(item.price)}
          </p>
        </div>

        <div className="flex gap-3">
          <p className="text-[13px] text-gray-600">
            {item.storage} / {item.color}
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-5 px-2 py-1 border border-slate-200 w-fit rounded-full">
            <button onClick={decrement} disabled={item.quantity === 1}>
              <LuMinus size={15} />
            </button>
            <span className="text-slate-500 text-sm">{item.quantity}</span>
            <button onClick={increment}>
              <LuPlus size={15} />
            </button>
          </div>

          <button
            className="underline font-medium text-[10px]"
            onClick={() => removeItem(item.variantId)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};
