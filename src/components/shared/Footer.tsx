import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../constants/links';

export const Footer = () => {
  // This component renders the footer of the application
  // It includes the logo, subscription form, policies, and social media links
  // The footer is styled using Tailwind CSS classes for layout and appearance
  // The subscription form allows users to enter their email to receive exclusive promotions
  // The policies section provides links to the product page, privacy policy, and terms of use
  // The social media links section includes icons that link to the respective social media pages
  // The footer is responsive and adjusts its layout based on the available space
  // The component is exported as a named export for use in other components
  // The component is a functional component that returns JSX
  // The component uses the Link component from react-router-dom for navigation to the product page
  // The component uses the BiChevronRight icon from react-icons/bi for the arrow icon in the subscription form
  // The component uses the socialLinks constant from the constants/links file for the social media links
  // The component uses the Link component from react-router-dom for 
  return (
    <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap">
      <Link
        to="/"
        className={`text-2xl font-bold tracking-tighter transition-all text-white flex-1`}
      >
        SmartPhones
      </Link>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Suscríbete</p>
        <p className="text-xs font-medium">Recibe promociones exclusivas</p>

        <div className="border border-gray-800 flex items-center gap-2 px-3 py-2 rounded-full">
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none"
          />

          <button className="text-slate-200">
            <BiChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Políticas</p>

        <nav className="flex flex-col gap-2 text-xs font-medium">
          <Link to="/celulares">Productos</Link>
          <Link to="#" className="text-slate-300 hover:text-white">
            Políticas de privacidad
          </Link>
          <Link to="#" className="text-slate-300 hover:text-white">
            Términos de uso
          </Link>
        </nav>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter">Síguenos</p>

        <p className="text-xs leading-6">
          No te pierdas las novedades que SmartPhones tiene para ti.
        </p>

        <div className="flex">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 border border-gray-8000 w-full h-full py-3.5 flex items-center justify-center transition-all hover:bg-white hover:text-gray-950"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
