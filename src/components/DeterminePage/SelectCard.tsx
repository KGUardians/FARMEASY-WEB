import selectCropImage from '/selectCropFirst.svg';
import searchIcon from '/searchIcon.svg';
import useCropStore from '@store/cropStore';
import { CropButton } from '../common/Button/CropButton';
import { CROP_LIST } from '@constants/CROP_LIST';

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
        {CROP_LIST.map((item) => (
          <CropButton key={item.value} item={item} />
        ))}
      </div>
    </>
  );
};

export default SelectCard;
