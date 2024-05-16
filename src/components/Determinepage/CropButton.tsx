import useCropStore from '@store/cropStore';
import { MouseEvent } from 'react';

interface CropButtonProps {
  item: {
    id: number;
    icons: string;
    title: string;
  };
}

export const CropButton = ({ item }: CropButtonProps) => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);
  const setSelectedCrop = useCropStore((state) => state.setSelectedCrop);

  const onItemClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // 작물 취소 불가능
    // setSelectedCrop(item.id);
    setSelectedCrop(selectedCrop === item.id ? null : item.id);
  };

  return (
    <div key={item.id} className="grid mb-8 place-items-center">
      <button
        onClick={onItemClick}
        className={`flex rounded-[15px] items-center justify-center w-[52px] h-[52px] bg-neutral-100 hover:outline hover:outline-gray-200 ${
          selectedCrop === item.id && 'outline outline-3 outline-fp-green'
        }`}
      >
        <img src={item.icons} alt={item.title} />
      </button>
      <p className="my-2 text-xs text-center">{item.title}</p>
    </div>
  );
};
