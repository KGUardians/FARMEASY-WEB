import selectCropImage from '/selectCropFirst.svg';
import searchIcon from '/searchIcon.svg';
import { cropData } from '@mocks/mockData';
import useCropStore from '@store/cropStore';
import { CropButton } from './CropButton';

const SelectCard = () => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);

  return (
    <>
      <div className="flex justify-self-start">
        <img src={searchIcon} alt="searchIcon" />
        <p className="mx-1.5 min-w-32 font-semibold">내 작물 병충해 판별</p>
        {selectedCrop ? (
          <></>
        ) : (
          <img src={selectCropImage} alt="selectCropFirst" />
        )}
      </div>
      <div className="grid w-full grid-cols-5 my-4">
        {cropData.map((item) => (
          <CropButton key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default SelectCard;
