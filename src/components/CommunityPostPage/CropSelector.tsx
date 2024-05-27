import { CROP_LIST } from '@constants/CROP_LIST';
import { CommunityCropType } from '@type/crop';
import { PostData } from '@type/postData';
import { UseFormRegister } from 'react-hook-form';

interface CropSelectorProps {
  register: UseFormRegister<PostData>;
  selected: CommunityCropType | undefined;
  onSelect: (value: CommunityCropType) => void;
}

const CropSelector = ({ register, selected, onSelect }: CropSelectorProps) => {
  return (
    <div>
      <h1 className="font-bold mb-3">작물 카테고리</h1>

      <input type="hidden" {...register('cropType')} value={selected?.value} />

      <div className="grid grid-cols-7 items-center w-full h-12 gap-2 select-none scrollbar-hide">
        {CROP_LIST.map((crop, index) => (
          <div key={index}>
            <button
              onClick={() => onSelect(crop)}
              className={`${
                selected?.value === crop.value
                  ? 'border-fp-green text-fp-green font-semibold'
                  : 'border-gray-500'
              } h-6 text-xs border outline-none rounded-full w-11`}
            >
              {crop.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropSelector;
