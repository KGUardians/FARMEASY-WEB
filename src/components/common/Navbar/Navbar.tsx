import logo from '../../../../public/fullLogo.svg';
import { IoMenuOutline } from 'react-icons/io5';

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full my-3 bg-white h-14">
      <div className="flex items-center justify-between px-5">
        <img src={logo} alt="farmeasy" className="w-28 h-14" />
        <IoMenuOutline className="w-8 h-8 mt-3" />
      </div>
    </div>
  );
};
