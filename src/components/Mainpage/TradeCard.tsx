import { Link } from 'react-router-dom';
import { Card } from '../common/Card/Card';
import { IoChevronForwardOutline } from 'react-icons/io5';
import vegetableIcon from '/vegetable.svg';

const TradeCard = () => {
  return (
    <Link to="/">
      <Card>
        <div className="flex flex-col justify-between pt-2 pl-4 pr-1">
          <div className="flex flex-col gap-1 mt-2">
            <p className="font-semibold">농산물 거래</p>
            <p className="text-xs font-medium w-24">
              방금 재배한 작물을 구매해보세요!
            </p>
          </div>
          <img src={vegetableIcon} alt="vegetable" className="w-16 self-end" />
        </div>

        <div className="grid content-center w-full h-12 bg-fp-green rounded-b-xl p-2">
          <div className="flex items-center gap-1 place-self-end">
            <p className="text-sm">지금 구경하기</p>
            <IoChevronForwardOutline />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TradeCard;
