import { formatPrice } from '../../helpers';
import { useCartStore } from '../../store/cart.store';

export const ItemsCheckout = () => {
// Este componente renderiza los artículos del carrito durante el proceso de pago.
// Obtiene los artículos del carrito y el importe total de la tienda del carrito.
// Muestra cada artículo con su imagen, nombre, precio, almacenamiento, color y cantidad.
// El importe total se muestra en la parte inferior, junto con una nota que indica que el envío es gratuito.
// El componente utiliza el hook `useCartStore` para acceder al estado del carrito, administrado por Zustand, una biblioteca de gestión de estados.
// La función `formatPrice` se utiliza para formatear el importe total como moneda.
// El hook `useCartStore` se utiliza para acceder al estado del carrito, administrado por Zustand, una biblioteca de gestión de estados.
// El componente mapea los artículos del carrito y muestra los detalles de cada artículo, incluyendo la imagen, el nombre, el precio, el almacenamiento, el color y la cantidad.
// También muestra el importe total y una nota que indica que el envío es gratuito.
// El diseño y la apariencia del componente se diseñan con clases CSS de Tailwind. El componente está diseñado para ser reutilizable y puede usarse en diferentes partes de la aplicación, donde se deben mostrar los artículos del carrito, como en la página de pago o en el resumen del carrito.
// El componente está diseñado para usarse en un flujo de pago, donde los usuarios pueden revisar los artículos de su carrito antes de pagar.
// Utiliza Zustand para la gestión de estados, una biblioteca de gestión de estados ligera y flexible.

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
