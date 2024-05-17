import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

interface TopBarProps {
  title: string;
}

const TopBar = ({ title }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center w-full h-16 px-3">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1">
        <IoChevronBackOutline />
        <span className="font-semibold">{title}</span>
      </button>
    </header>
  );
};

export default TopBar;
