import { useForm } from 'react-hook-form';
import { InputAddress } from './InputAddress';
import type { AddressFormValues } from '../../lib/validators';

import { addressSchema } from '../../lib/validators';

import { zodResolver } from '@hookform/resolvers/zod';
import { ItemsCheckout } from './ItemsCheckout';
import { useCreateOrder } from '../../hooks';
import { useCartStore } from '../../store/cart.store';
import { ImSpinner2 } from 'react-icons/im';

// Formulario con el esquema de direcciones
// Configurar la gestión del estado del formulario
// usando react-hook-form y zod para la validación.
// El formulario incluye campos para detalles de la dirección,
// métodos de envío e información de pago.
// También gestiona la creación de pedidos y la gestión del carrito
// usando hooks personalizados y una tienda de carrito global.
// Si la creación del pedido está pendiente, se muestra un indicador de carga.
// Una vez creado el pedido correctamente, se limpia el carrito.
export const FormCheckout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const { mutate: createOrder, isPending } = useCreateOrder();

  const cleanCart = useCartStore((state) => state.cleanCart);
  const cartItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);

  // Preparar los datos de entrada del pedido asignando los artículos del carrito 
  // al formato requerido, incluyendo el importe total y la dirección.
  // Luego, se ejecuta la mutación createOrder con los datos preparados.
  // Si la creación del pedido está pendiente, muestre un indicador de carga.
  // La entrada del pedido incluye la dirección, los artículos del carrito y el importe total.
  const onSubmit = handleSubmit((data) => {
    const orderInput = {
      address: data,
      cartItems: cartItems.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
    };

    createOrder(orderInput, {
      onSuccess: () => {
        cleanCart();
      },
    });
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-3 h-screen items-center justify-center">
        <ImSpinner2 className="animate-spin h-10 w-10" />

        <p className="text-sm font-medium">Estamos procesando tu pedido</p>
      </div>
    );
  }

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-normal">Entrega</h3>

          <InputAddress
            register={register}
            errors={errors}
            name="addressLine1"
            placeholder="Dirección Principal"
          />

          <InputAddress
            register={register}
            errors={errors}
            name="addressLine2"
            placeholder="Dirección adicional (Opcional)"
          />

          <InputAddress
            register={register}
            errors={errors}
            name="city"
            placeholder="Ciudad"
          />

          <InputAddress
            register={register}
            errors={errors}
            name="state"
            placeholder="Provincia"
          />

          <InputAddress
            register={register}
            errors={errors}
            name="postalCode"
            placeholder="Código Postal (Opcional)"
          />

          <select
            className="border border-slate-200 rounded-md p-3"
            {...register('country')}
          >
            <option value="Argentina">Argentina</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Métodos de envío</p>

          <div className="flex justify-between items-center text-sm border border-slate-600 bg-stone-100 py-4 rounded-md px-6">
            <span className="font-normal">Standard</span>
            <span className="font-semibold">Gratis</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center text-sm border border-slate-600 bg-stone-100 py-4 rounded-ss-md rounded-se-md px-6">
            <span>Depósito Bancario</span>
          </div>

          <div className="bg-stone-100 text-[13px] p-5 space-y-0.5 border border-gray-200 rounded-es-md rounded-ee-md">
            <p>Compra a traves de transferencia bancaria</p>
            <p>BANCO NACION ARGENTINA</p>
            <p>Razón Social: SmartPhones</p>
            <p>RUT-PF: 123456789000</p>
            <p>Tipo de cuenta: Corriente</p>
            <p>Número de cuenta: 1234567890</p>
            <p>
              La información será compartida nuevamente una vez que se haya
              finalizado la compra
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-3xl">Resumen del pedido</h3>

          <ItemsCheckout />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3.5 font-bold tracking-wide rounded-md mt-2"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};
