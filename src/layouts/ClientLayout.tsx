import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from '../actions';
import { useRoleUser, useUser } from '../hooks';
import { useEffect } from 'react';
import { supabase } from '../supabase/client';
import { Loader } from '../components/shared/Loader';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const ClientLayout = () => {
  // Creando sesion
  // Obteniendo el usuario y su rol
  // Si el usuario no está autenticado, lo redirigimos a la página de inicio de sesión
  // Si el usuario es un administrador, mostramos el enlace al dashboard
  // Si el usuario es un cliente, mostramos el enlace a los pedidos
  // Si el usuario cierra sesión, lo redirigimos a la página de inicio
  // Mostramos un loader mientras se cargan los datos del usuario y su rol
  const { session, isLoading: isLoadingSession } = useUser();
  const { data: role, isLoading: isLoadingRole } = useRoleUser(
    session?.user.id as string
  );

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/login', { replace: true });
      }
    });
  }, [navigate]);

  if (isLoadingSession || isLoadingRole) return <Loader />;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Menú */}
      <nav className="flex justify-center gap-10 text-sm font-medium">
        <NavLink
          to="/account/pedidos"
          className={({ isActive }) =>
            `${isActive ? 'underline' : 'hover:underline'}`
          }
        >
          Pedidos
        </NavLink>

        {role === 'admin' && (
          <NavLink
            to="/dashboard/productos"
            className="flex items-center gap-1 hover:underline"
          >
            Dashboard
            <HiOutlineExternalLink size={16} className="inline-block" />
          </NavLink>
        )}

        <button className="hover:underline" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </nav>

      <main className="container mt-12 flex-1">
        <Outlet />
      </main>
    </div>
  );
};
