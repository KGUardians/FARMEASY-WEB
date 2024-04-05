import { Link } from 'react-router-dom';
import { Card } from '../common/Card/Card';
import { IoChevronForwardOutline } from 'react-icons/io5';
import farmerIcon from '/farmer.svg';

const DetermineCard = () => {
  return (
    <Link to="/">
      <Card>
        <div className="flex justify-between pt-4 pl-4">
          <div className="flex flex-col gap-1 mt-2">
            <p className="font-semibold">내 작물 건강 확인하기</p>
            <p className="text-xs font-medium">
              AI에게 내 작물의 건강을 확인 받으세요!
            </p>
          </div>
          <img src={farmerIcon} alt="farmer" className="" />
        </div>

        <div className="grid content-center w-full h-12 bg-fp-green rounded-b-xl p-2">
          <div className="flex items-center gap-1 place-self-end">
            <p className="text-sm">지금 확인하러하기</p>
            <IoChevronForwardOutline />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DetermineCard;
