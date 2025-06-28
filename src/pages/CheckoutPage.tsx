import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cart.store';
import { FormCheckout } from '../components/checkout/FormCheckout';
import { ItemsCheckout } from '../components/checkout/ItemsCheckout';
import { useUser } from '../hooks';
import { Loader } from '../components/shared/Loader';
import { useEffect } from 'react';
import { supabase } from '../supabase/client';

// CheckPage
export const CheckoutPage = () => {
  // Obtiene el total de items en el carrito
  // Utiliza el store de Zustand para acceder al estado del carrito
  // y obtener el total de items en el carrito.
  // Si el total es 0, muestra un mensaje indicando que el carrito está vacío.
  // Si hay items en el carrito, muestra el formulario de checkout y los items del carrito
  // para que el usuario pueda revisar su compra antes de proceder al pago.
  // También maneja el estado de carga del usuario y redirige al usuario a la
  // página de login si no está autenticado.
  // Además, se asegura de que el usuario esté autenticado y redirige a la
  // página de login si no lo está.
  const totalItems = useCartStore((state) => state.totalItemsInCart);

  const { isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/login');
      }
    });
  }, [navigate]);

  if (isLoading) return <Loader />;

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px',
      }}
    >
      <header className="h-[100px] bg-white text-black flex items-center justify-center flex-col px-10 border-b border-slate-200">
        <Link
          to="/"
          className="text-4xl font-bold self-center tracking-tighter transition-all md:text-5xl md:self-start"
        >
          <p>
            Celulares
            <span className="text-cyan-600">Baratos</span>
          </p>
        </Link>
      </header>

      {/* Section Main  */}
      <main className="w-full h-full flex relative">
        {totalItems === 0 ? (
          <div
            className="flex flex-col items-center justify-center gap-5 w-full"
            style={{
              height: 'calc(100vh - 100px)',
            }}
          >
            <p className="text-sm font-medium tracking-tight">
              Su carro esta vacío
            </p>
            <Link
              to="/celulares"
              className="py-4 bg-black rounded-full text-white px-7 text-xs uppercase tracking-widest font-semibold"
            >
              Empezar a comprar
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full md:w-[50%] p-10">
              <FormCheckout />
            </div>

            <div
              className="bg-stone-100 w-[50%] sticky top-0 right-0 p-10 hidden md:block"
              style={{
                minHeight: 'calc(100vh - 100px)',
              }}
            >
              {/* Elementos del carrito */}
              <ItemsCheckout />
            </div>
          </>
        )}
      </main>
    </div>
  );
};
