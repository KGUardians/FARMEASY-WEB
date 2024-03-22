import logo from '../../../../public/fullLogo.svg';
import { IoMenuOutline } from 'react-icons/io5';

export const Navbar = () => {
  return (
    <div className="sticky z-10 h-14 w-[400px] bg-white top-0 bg-opacity-90 pb-10">
      <div className="w-full h-1 bg-lime-600"></div>
      <div className="flex px-2 items-center justify-between">
        <img src={logo} alt="farmeasy" className="w-28 h-14" />
        <IoMenuOutline className="w-14 h-8" />
      </div>
    </div>
  );
};
