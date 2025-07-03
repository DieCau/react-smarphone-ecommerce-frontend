import {
  FaBoxOpen,
  FaCartShopping,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';

// This array contains the links for the navigation bar
// Each object in the array represents a link with an id, title, and href
// The id is used to uniquely identify each link, which can be useful for rendering lists in
// a React component
// The title is the text that will be displayed for the link
// The href is the URL that the link will navigate to when clicked
// This structure allows for easy rendering of navigation links in a component
// The links are used to navigate to different sections of the website, such as home, products
// and about us
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
    title: 'Sobre Nosotros',
    href: '/nosotros',
  },
];

// This array contains the social media links with their respective icons
// Each object in the array represents a social media platform with an id, title, href,
// and icon component
// The icons are imported from the react-icons library, specifically from the Font Awesome 6 set
// The icons used are Facebook, Twitter, Instagram, and TikTok
// The hrefs are the URLs to the respective social media platforms
// This structure allows for easy rendering of social media links in a component
// The icons are used to visually represent each social media platform, enhancing user experience
// The id is used to uniquely identify each link, which can be useful for rendering lists in
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
