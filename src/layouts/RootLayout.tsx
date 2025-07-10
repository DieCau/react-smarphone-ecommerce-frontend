import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';
import { Newsletter } from '../components/home/Newsletter';
import { Sheet } from '../components/shared/Sheet';
import { useGlobalStore } from '../store/global.store';
import { NavbarMobile } from '../components/shared/NavbarMobile';

// Layout principal de la aplicación
// Contiene el Navbar, Footer, Banner y Newsletter
// El contenido principal se renderiza a través de Outlet
// El diseño es responsivo y utiliza Tailwind CSS para el estilo
// La fuente utilizada es Montserrat
// El menú activeNavMobile se utiliza para dispositivos móviles y pantallas pequeñas
// El Banner y el Newsletter solo se muestran en la página de inicio
// El Footer se muestra en todas las páginas
// El diseño es flexible y se adapta a diferentes tamaños de pantalla

export const RootLayout = () => {
  const { pathname } = useLocation();

  const isSheetOpen = useGlobalStore((state) => state.isSheetOpen);
  const activeNavMobile = useGlobalStore((state) => state.activeNavMobile);

  return (
    <div className="h-screen flex flex-col font-montserrat">
      <Navbar />

      {pathname === '/' && <Banner />}

      <main className='my-8 flex-1'> 
        <Outlet />
      </main>

      {pathname === '/' && <Newsletter />}

      {isSheetOpen && <Sheet />}

      {activeNavMobile && <NavbarMobile />}

      <Footer />
    </div>
  );
};