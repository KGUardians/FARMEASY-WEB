import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { MenuList } from '../../../constants/MenuList';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface SideMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideMenu = ({ open, setOpen }: SideMenuProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div
      className={`absolute inset-0 flex h-screen z-5 overflow-y-hidden ${
        open ? '-translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="w-2/5 h-full" onClick={() => setOpen(false)} />
      <div
        className={`w-3/5 h-full px-4 bg-white transition-transform ease-in-out duration-500 ${
          open ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center w-full mt-14 justify-evenly">
          <div className="flex items-center w-4/5 h-8 gap-2 p-2 bg-gray-200 rounded-full">
            <IoSearchOutline className="w-5 h-5" />
            <input type="text" className="w-full outline-none bg-inherit" />
          </div>
          <IoCloseOutline onClick={() => setOpen(false)} className="w-7 h-7" />
        </div>

        <div className="grid px-2 mt-10 font-semibold text-right gap-7">
          {MenuList.map((item) => (
            <Link key={item.id} to={item.to}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
