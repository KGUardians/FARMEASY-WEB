import { CROP_LIST } from '@constants/CROP_LIST';
import { CommunityCropType } from '@type/crop';

interface CropSelectorProps {
  onClick: (value: CommunityCropType | null) => void;
  selectedCrop: CommunityCropType | null;
}

const CropSelector = ({ onClick, selectedCrop }: CropSelectorProps) => {
  return (
    <div className="flex items-center w-full h-12 gap-2 px-3 overflow-x-auto bg-gray-200 select-none scrollbar-hide">
      {CROP_LIST.map((crop, index) => (
        <div>
          <button
            key={index}
            onClick={() => onClick(crop)}
            className={`${
              selectedCrop === crop
                ? 'border-fp-green text-fp-green font-semibold'
                : 'border-gray-500'
            } h-6 text-xs border outline-none rounded-full w-11`}
          >
            {crop.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CropSelector;
