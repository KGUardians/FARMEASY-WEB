import { Card } from '../../components/common/Card/Card';
import farmerIcon from '../../../public/farmer.svg';
import { IoChevronForwardOutline } from 'react-icons/io5';

export const MarketCard = () => {
  return (
    <Card>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">내가 키운 작물 등록하기</h1>
          <p className="text-xs">작물을 등록하여 판매해보세요!</p>
        </div>

        <img src={farmerIcon} alt="farmer" className="w-24" />
      </div>
      <div className="flex items-center mt-10 justify-between">
        <p className="text-xs">지금 등록하러 가기</p>
        <IoChevronForwardOutline />
      </div>
    </Card>
  );
};
