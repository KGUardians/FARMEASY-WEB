import { Link } from 'react-router-dom';
import { cropData } from '../../mocks/mockData';
import { CropButton } from './CropButton';
import useCropStore from '../../store/cropStore';
import selectCropImage from '../../../public/selectCropFirst.svg';
import searchIcon from '../../../public/searchIcon.svg';

const SelectCard = () => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);

  return (
    <>
      <Link to="/determine" className="grid justify-items-center">
        <div className="flex justify-self-start">
          <img src={searchIcon} alt="searchIcon" />
          <p className="mx-1.5 font-semibold">내 작물 병충해 판별</p>
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
      </Link>
    </>
  );
};

export default SelectCard;
