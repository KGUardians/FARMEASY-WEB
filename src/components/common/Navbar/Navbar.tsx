import { useState } from 'react';
import logo from '../../../../public/fullLogo.svg';
import { IoMenuOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from './SideMenu';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative top-0 z-10 flex items-center justify-between w-full px-5 mb-3 bg-white select-none pt-7">
      <img
        src={logo}
        alt="farmeasy"
        className="cursor-pointer w-28 h-14"
        onClick={() => navigate('/')}
      />
      <div className="flex items-center gap-2">
        <button className="text-sm" onClick={() => navigate('/')}>
          로그인
        </button>
        <IoMenuOutline
          className="w-8 h-8 -mr-1 cursor-pointer"
          onClick={() => setIsOpen(true)} // 상태를 토글하도록 변경
        />
      </div>

      <SideMenu open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};
