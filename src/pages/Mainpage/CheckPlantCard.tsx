import { Card } from '../../components/common/Card/Card';
import fruitIcon from '../../../public/fruit.svg';
import { IoChevronForwardOutline } from 'react-icons/io5';

export const CheckPlantCard = () => {
  return (
    <Card>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">내 작물 건강 확인하기</h1>
          <p className="text-xs">AI에게 내 작물의 건강을 확인받으세요!</p>
        </div>

        <img src={fruitIcon} alt="fruit" className="w-20" />
      </div>
      <div className="flex items-center mt-10 justify-between">
        <p className="text-xs">지금 확인하러 가기</p>
        <IoChevronForwardOutline />
      </div>
    </Card>
  );
};
