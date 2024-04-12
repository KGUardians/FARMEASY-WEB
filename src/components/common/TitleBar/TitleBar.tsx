import { IoChevronForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface TitleBarProps {
  title: string;
  to: string;
}

export const TitleBar = ({ title, to }: TitleBarProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-semibold">{title}</p>
      <Link to={to}></Link>
      <div className="flex items-center gap-1">
        <p className="text-sm font-light">더보기</p>
        <IoChevronForwardOutline />
      </div>
    </div>
  );
};
