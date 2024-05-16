import { IoChevronDownOutline, IoLocationOutline } from 'react-icons/io5';
import { Dispatch, SetStateAction } from 'react';
import { LocationFilterValue } from '@type/location';

interface LocationFilterProps extends LocationFilterValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LocationFilter = ({
  open,
  setOpen,
  DO,
  SI,
  GUNGU,
}: LocationFilterProps) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center w-full h-12 gap-4 p-4 my-5 font-semibold border-2 rounded-full cursor-pointer justify-evenly"
    >
      <IoLocationOutline className="size-6" />

      {DO ? (
        <>
          <div className="flex items-center justify-between w-1/2 h-full rounded-l-full">
            <span>{DO}</span>
            <IoChevronDownOutline />
          </div>

          <div className="flex items-center justify-between w-1/2 h-full rounded-r-full">
            <span>
              {SI} {GUNGU}
            </span>
            <IoChevronDownOutline />
          </div>
        </>
      ) : (
        <p className="w-full text-center">지역을 선택해보세요!</p>
      )}
    </button>
  );
};

export default LocationFilter;
