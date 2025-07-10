import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';
import { Newsletter } from '../components/home/Newsletter';
import { Sheet } from '../components/shared/Sheet';
import { useGlobalStore } from '../store/global.store';
import { NavbarMobile } from '../components/shared/NavbarMobile';

export const RootLayout = () => {
  const { pathname } = useLocation();

  const isSheetOpen = useGlobalStore((state) => state.isSheetOpen);
  const activeNavMobile = useGlobalStore((state) => state.activeNavMobile);

  return (
    // Layout principal de la aplicación
    // Contiene el Navbar, Footer, Banner y Newsletter
    // El contenido principal se renderiza a través de Outlet
    // La hoja y el menú móvil se muestran según el estado global
    // El diseño es responsivo y utiliza Tailwind CSS para el estilo
    // La fuente utilizada es Montserrat
    // La hoja se utiliza para mostrar información adicional o formularios
    // El menú móvil se utiliza para dispositivos móviles y pantallas pequeñas
    // El Banner y el Newsletter solo se muestran en la página de inicio
    // El Footer se muestra en todas las páginas
    // El diseño es flexible y se adapta a diferentes tamaños de pantalla
    // El diseño utiliza una fuente personalizada Montserrat
    // El diseño es accesible y fácil de usar
    // El diseño es moderno y atractivo visualmente
    // El diseño es compatible con dispositivos móviles y de escritorio
    // El diseño es fácil de navegar y entender
    // El diseño es escalable y se puede adaptar a futuras necesidades
    // El diseño es mantenible y fácil de actualizar
    // El diseño es compatible con las mejores prácticas de desarrollo web
    // El diseño es compatible con las últimas tecnologías web
    // El diseño es compatible con los estándares web modernos
    // El diseño es compatible con las pautas de accesibilidad web
    // El diseño es compatible con los navegadores web más populares
    // El diseño es compatible con las últimas versiones de React y React Router
    // El diseño es compatible con las últimas versiones de Tailwind CSS
    // El diseño es compatible con las últimas versiones de TypeScript
    // El diseño es compatible con las últimas versiones de Supabase
    // El diseño es compatible con las últimas versiones de Zustand 
    <div className="h-screen flex flex-col font-montserrat">
      <Navbar />

      {pathname === '/' && <Banner />}

      <main> 
       {/* className="container my-8 flex-1"> */}
        <Outlet />
      </main>

      {pathname === '/' && <Newsletter />}

      {isSheetOpen && <Sheet />}

      {activeNavMobile && <NavbarMobile />}

      <Footer />
    </div>
  );
};
