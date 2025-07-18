import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../../constants/links';
import { Logo } from '../shared/Logo';
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from '../../actions';

// Este componente representa la barra lateral del panel.
// Incluye enlaces de navegación y un botón para cerrar sesión.
// El componente utiliza la biblioteca react-router-dom para generar enlaces de navegación.
// El componente también utiliza la acción signOut para cerrar sesión del usuario.
// La barra lateral está diseñada para ser fija y se adapta a diferentes tamaños de pantalla.
// Utiliza clases de Tailwind CSS para el estilo y la disposición.
// El componente se exporta como Sidebar para su uso en otras partes de la aplicación.
// El componente Sidebar es parte de un sistema de navegación más amplio
// que permite a los usuarios navegar por diferentes secciones del panel de control.
// La barra lateral incluye un logotipo, enlaces de navegación y un botón de cierre de sesión.
// Los enlaces de navegación se generan a partir de un array constante de enlaces,
// y cada enlace se estiliza según si está activo o no.
// El botón de cierre de sesión está estilizado con un fondo rojo e incluye un icono.
// La barra lateral está diseñada para estar fija en el lado izquierdo de la pantalla,
// proporcionando un acceso fácil a la navegación a lo largo del panel de control.

export const Sidebar = () => {
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<div className='w-[120px] bg-stone-800 text-white flex flex-col gap-10 items-center p-5 fixed h-screen lg:w-[250px]'>
			<Logo isDashboard/>

			<nav className='w-full space-y-5 flex-1'>
				{dashboardLinks.map(link => (
					<NavLink
						key={link.id}
						to={link.href}
						className={({ isActive }) =>
							`flex items-center justify-center gap-3 pl-0 py-3 transition-all duration-300 rounded-md ${
								isActive
									? 'text-white bg-cyan-600'
									: 'hover:text-white hover:bg-cyan-600'
							} lg:pl-5 lg:justify-start`
						}
					>
						{link.icon}
						<p className='font-semibold hidden lg:block'>
							{link.title}
						</p>
					</NavLink>
				))}
			</nav>

			{/* The logout button is styled with a red background and includes an icon. */}
			{/* It triggers the signOut action when clicked, logging the user out of the dashboard. */}
			{/* The button is designed to be prominent and easily accessible, ensuring users can log out quickly. */}
			{/* The button is responsive, with different styles for mobile and larger screens. */}
			{/* The button is user-friendly, with clear text and an icon indicating the logout action. */}
			<button
				className='bg-red-500 w-full py-[10px] rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:underline'
				onClick={handleLogout}
			>
				<span className='hidden lg:block'>Cerrar sesión</span>
				<IoLogOutOutline size={20} className='inline-block' />
			</button>
		</div>
	);
};
