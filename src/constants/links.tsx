import {
  FaBoxOpen,
  FaCartShopping,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';

// Este array contiene los enlaces para la barra de navegación.
// Cada objeto de la matriz representa un enlace con un ID, un título y un href.
// El ID se usa para identificar de forma única cada enlace, lo cual puede ser útil para renderizar listas en un componente de React.
// El título es el texto que se mostrará para el enlace.
// El href es la URL a la que se dirigirá el enlace al hacer clic.
// Esta estructura facilita la renderización de enlaces de navegación en un componente.
// Los enlaces se usan para navegar a diferentes secciones del sitio web, como Inicio, Celulares, y Nosotros.

export const navbarLinks = [
  {
    id: 1,
    title: 'Inicio',
    href: '/',
  },
  {
    id: 2,
    title: 'Celulares',
    href: '/celulares',
  },
  {
    id: 3,
    title: 'Nosotros',
    href: '/nosotros',
  },
];
// Este array contiene los enlaces de RRSS con sus respectivos íconos.
// Cada objeto del array representa una plataforma de redes sociales con un id, un título, un href y un componente de ícono.
// Los íconos se importan de la biblioteca React-icons, específicamente del conjunto Font Awesome 6.
// Los íconos utilizados son Facebook, Twitter, Instagram y TikTok.
// Los href son las URL de las respectivas plataformas de redes sociales.
// Esta estructura facilita la representación de enlaces de redes sociales en un componente.
// Los íconos se utilizan para representar visualmente cada plataforma de redes sociales, mejorando la experiencia del usuario.
// El id se utiliza para identificar de forma única cada enlace, lo que puede ser útil para representar listas en React.
// Los enlaces se usan para navegar a las páginas correspondientes en las plataformas de redes sociales al hacer clic.

export const socialLinks = [
  {
    id: 1,
    title: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    title: 'Twitter',
    href: 'https://www.twitter.com',
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    title: 'Instagram',
    href: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    title: 'Tiktok',
    href: 'https://www.tiktok.com',
    icon: <FaTiktok />,
  },
];

// Este array contiene los enlaces del dashboard de administración.
// Cada objeto del array representa una sección del dashboard con un id, un título, un href y un ícono.
// Los íconos se importan de la biblioteca React-icons, específicamente del conjunto Font Awesome 6.
// Los íconos utilizados son para representar productos y órdenes.
// Los href son las URL a las que se dirigirá el enlace al hacer clic.
// Esta estructura facilita la representación de enlaces de navegación en el dashboard de administración.
// Los íconos se utilizan para representar visualmente cada sección del dashboard, mejorando la experiencia del usuario.
// El id se utiliza para identificar de forma única cada enlace, lo que puede ser útil para renderizar listas en React.
// Los enlaces se usan para navegar a las páginas correspondientes en el dashboard al hacer clic.
// Este enfoque modular permite una fácil adición o eliminación de secciones en el dashboard sin afectar el resto del código.

export const dashboardLinks = [
  {
    id: 1,
    title: 'Productos',
    href: '/dashboard/productos',
    icon: <FaBoxOpen size={25} />,
  },
  {
    id: 2,
    title: 'Ordenes',
    href: '/dashboard/ordenes',
    icon: <FaCartShopping size={25} />,
  },
];
