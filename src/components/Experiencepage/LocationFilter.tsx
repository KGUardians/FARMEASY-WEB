import { IoChevronDownOutline, IoLocationOutline } from 'react-icons/io5';

const LocationFilter = () => {
  return (
    <div className="flex w-full h-12 my-5 font-semibold border-2 rounded-full">
      <div className="flex items-center justify-between w-1/2 h-full p-4 rounded-l-full">
        <div className="flex items-center gap-2">
          <IoLocationOutline />
          <span>경기도</span>
        </div>
        <IoChevronDownOutline />
      </div>
      <div className="flex items-center justify-between w-1/2 h-full p-4 rounded-r-full">
        <span>수원시 영통구</span>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default LocationFilter;
