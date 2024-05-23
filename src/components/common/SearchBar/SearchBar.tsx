import { IoSearchOutline } from 'react-icons/io5';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clickButton: () => void;
}

const SearchBar = ({ clickButton, ...rest }: SearchBarProps) => {
  return (
    <div className="flex items-center w-full h-12 gap-2 p-3 bg-gray-200 rounded-lg">
      <IoSearchOutline
        onClick={clickButton}
        className="text-gray-700 cursor-pointer size-6"
      />
      <input
        type="text"
        {...rest}
        className="w-full h-full placeholder-gray-700 bg-gray-200 outline-none"
      />
    </div>
  );
};

export default SearchBar;
