import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link
      to="/"
      className={`text-2xl font-bold transition-all tracking-tighter`}
    >
      <p className="hidden lg:block">
        Smart
        <span className="text-cyan-500">Phones</span>
      </p>
      <p className='flex text-4xl lg:hidden'>
        <span className='-skew-x-6'>S</span>
        <span className='text-cyan-500 skew-x-6'>P</span>
      </p>
    </Link>
  );
};
