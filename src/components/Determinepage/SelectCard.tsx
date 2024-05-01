import { Link } from 'react-router-dom';
import { cropData } from '../../mocks/mockData';
import { CropButton } from './CropButton';

const SelectCard = () => {
  return (
    <>
      <Link to="/determine" className="grid justify-items-center">
        <div className="justify-self-start">
            <p className="font-semibold">내 작물 병충해 판별</p>
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
