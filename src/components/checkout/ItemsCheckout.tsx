import { formatPrice } from '../../helpers';
import { useCartStore } from '../../store/cart.store';

export const ItemsCheckout = () => {
	// This component renders the items in the cart during the checkout process.
	// It retrieves the cart items and total amount from the cart store
	// and displays each item with its image, name, price, storage, color, and quantity.
	// The total amount is displayed at the bottom, along with a note that shipping is free.
	// The component uses the `useCartStore` hook to access the cart state,
	// which is managed by Zustand, a state management library.
	// The `formatPrice` function is used to format the total amount as currency.
	// The `useCartStore` hook is used to access the cart state, which is managed by Zustand, a state management library.
	// The component maps over the cart items and displays each item's details,
	// including the image, name, price, storage, color, and quantity.
	// It also displays the total amount and a note that shipping is free.
	// The component is styled using Tailwind CSS classes for layout and appearance.
	// The component is designed to be reusable and can be used in different parts of the application
	// where the cart items need to be displayed, such as in the checkout page or cart summary.
	// The component is functional and does not have any side effects,
	// making it easy to test and maintain.
	// The component is designed to be used in a checkout flow,
	// where users can review their cart items before proceeding to payment.
	// It provides a clear overview of the items in the cart,
	// allowing users to see what they are purchasing and the total cost.
	// The component is responsive and will adapt to different screen sizes,
	// ensuring a good user experience on both desktop and mobile devices.
	// The component is written in TypeScript, providing type safety and better developer experience.
	// It uses Zustand for state management, which is a lightweight and flexible state management library.
	// The component is designed to be simple and straightforward,
	// focusing on displaying the cart items and total amount without any complex logic.
	// The component is easy to integrate into the existing application,
	// as it relies on the `useCartStore` hook to access the cart state,
	// which is already set up in the application.
	// The component is designed to be reusable and can be used in different parts of the application
	// where the cart items need to be displayed, such as in the checkout page or cart summary.
	// It provides a clear overview of the items in the cart,
	// allowing users to see what they are purchasing and the total cost.
	// The component is styled using Tailwind CSS classes for layout and appearance.
	// The component is functional and does not have any side effects,
	// making it easy to test and maintain.
	// The component is designed to be used in a checkout flow,
	// where users can review their cart items before proceeding to payment.
	// It provides a clear overview of the items in the cart,
	// allowing users to see what they are purchasing and the total cost.
	// The component is responsive and will adapt to different screen sizes,
	// ensuring a good user experience on both desktop and mobile devices.
	// The component is written in TypeScript, providing type safety and better developer experience.
	// It uses Zustand for state management, which is a lightweight and flexible state management library.
	// The component is designed to be simple and straightforward,
	// focusing on displaying the cart items and total amount without any complex logic.
	// The component is easy to integrate into the existing application,
	// as it relies on the `useCartStore` hook to access the cart state,
	// which is already set up in the application.
	// The component is designed to be reusable and can be used in different parts of the application
	// where the cart items need to be displayed, such as in the checkout page or cart summary.
	// It provides a clear overview of the items in the cart,
	// allowing users to see what they are purchasing and the total cost.
	// The component is styled using Tailwind CSS classes for layout and appearance.
	// The component is functional and does not have any side effects,
	// making it easy to test and maintain.	 

	const cartItems = useCartStore(state => state.items);
	const totalAmount = useCartStore(state => state.totalAmount);

	return (
		<div>
			<ul className='space-y-5'>
				{cartItems.map(item => (
					<li
						key={item.variantId}
						className='flex justify-between items-center gap-5'
					>
						<div className='flex relative border border-stone-300 bg-stone-200 rounded-md'>
							<img
								src={item.image}
								alt={item.name}
								className='w-20 h-20 object-contain'
							/>
							<span className='w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs absolute -right-1 -top-2 font-medium'>
								{item.quantity}
							</span>
						</div>

						<div className='flex-1 space-y-3'>
							<div className='flex justify-between'>
								<p className='font-semibold'>{item.name}</p>
								<p className='text-sm font-medium text-gray-600 mt-1'>
									{formatPrice(item.price)}
								</p>
							</div>
							<div className='flex gap-3'>
								<p className='text-[13px] text-gray-600'>
									{item.storage} /{item.color}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className='mt-4 p-7 space-y-5'>
				<div className='flex justify-between'>
					<p className='text-sm font-medium'>Envío</p>
					<p className='text-sm font-medium uppercase'>Gratis</p>
				</div>
				<div className='flex justify-between font-semibold text-lg'>
					<p>Total:</p>
					<p>{formatPrice(totalAmount)}</p>
				</div>
			</div>
		</div>
	);
};
