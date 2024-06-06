import useCropStore from '@store/cropStore';
import { MouseEvent } from 'react';

interface CropButtonProps {
  item: {
    icons: string;
    name: string;
    value: string;
  };
}
export const CropButton = ({ item }: CropButtonProps) => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);
  const setSelectedCrop = useCropStore((state) => state.setSelectedCrop);

  const onItemClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedCrop(selectedCrop === item.value ? null : item.value);
  };

  return (
    <div className="grid mb-8 place-items-center">
      <button
        onClick={onItemClick}
        className={`flex rounded-[15px] items-center justify-center w-[52px] h-[52px] bg-gray-100 ${
          selectedCrop === item.value && 'outline outline-3 outline-fp-green'
        }`}
      >
        <img src={item.icons} alt={item.name} />
      </button>
      <p className="my-2 text-xs text-center">{item.name}</p>
    </div>
  );
};
