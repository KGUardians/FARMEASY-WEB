import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

interface TopBarProps {
  title: string;
  right?: React.ReactNode;
}

const TopBar = ({ title, right }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between w-full h-16 px-3">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1">
        <IoChevronBackOutline className="size-5" />
        <span className="text-lg font-semibold">{title}</span>
      </button>

      {right}
    </header>
  );
};

export default TopBar;
