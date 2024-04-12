import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cropData } from '../../mocks/mockData';
import { FiCamera } from 'react-icons/fi';
import { CropButton } from './CropButton';

const SelectCard = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    if (selectedCrop === itemId) {
      setSelectedCrop(null);
    } else {
      setSelectedCrop(itemId);
    }
  };

  const handleCameraClick = () => {
    if (selectedCrop) {
      navigate(`/determine/${selectedCrop}`);
      console.log(selectedCrop);
    } else {
      console.log('작물을 선택해주세요.');
    }
  };

  return (
    <Link to="/determine" className="grid justify-items-center">
      <div className="ml-2 justify-self-start">
        <p className="font-semibold">내 작물 병충해 판별</p>
      </div>
      <div className="grid w-full grid-cols-5 my-4">
        {cropData.map((item) => (
          <CropButton
            key={item.id}
            item={item}
            selectedCrop={selectedCrop}
            handleItemClick={handleItemClick}
          />
        ))}
      </div>
      <div className="flex items-center place-content-end justify-center w-[68px] h-[68px] rounded-full bg-[#ACCB7A] fixed top-[692px]">
        <button
          className="bg-transparent focus:outline-none"
          onClick={handleCameraClick}
        >
          <FiCamera className="w-[38px] h-[33px] text-white" />
        </button>
      </div>
    </Link>
  );
};

export default SelectCard;
