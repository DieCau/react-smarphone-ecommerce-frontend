import { Link } from 'react-router-dom';

interface Props {
  isDashboard?: boolean;
}

export const Logo = ({ isDashboard }: Props) => {
  // Renderiza el logo de la aplicación
  // Si isDashboard es true, aplica un efecto de hover para escalar el logo
  // Utiliza el componente Link de react-router-dom para navegar a la página de inicio
  // Utiliza clases de Tailwind CSS para el estilo y diseño responsivo  
  return (
    <Link
      to="/"
      className={`text-2xl font-bold tracking-tighter transition-all ${
        isDashboard && 'hover:scale-105'
      }`}
    >
      <p className="hidden lg:block">
        Smart
        <span className="text-cyan-600">Phones</span>
      </p>

      <p className="flex text-4xl lg:hidden">
        <span className="-skew-x-6">S</span>
        <span className="text-cyan-600 skew-x-6">P</span>
      </p>
    </Link>
  );
};
