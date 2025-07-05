import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '../../constants/links';
import { Logo } from '../shared/Logo';
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from '../../actions';

export const Sidebar = () => {
	// This component renders the sidebar for the dashboard.
	// It includes navigation links and a logout button.
	const handleLogout = async () => {
		await signOut();
	};

	return (
		// The sidebar is styled with Tailwind CSS classes for a fixed position,
		// background color, and responsive design.
		// It contains a logo, navigation links, and a logout button.
		// The navigation links are generated from a constant array of links,
		// and each link is styled based on whether it is active or not.
		// The logout button is styled with a red background and includes an icon.
		// The sidebar is designed to be fixed on the left side of the screen,
		// providing easy access to navigation throughout the dashboard.
		// The sidebar is responsive, with different styles for mobile and larger screens.
		// The sidebar is designed to be user-friendly and visually appealing,
		// with clear navigation options and a prominent logout button.
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
