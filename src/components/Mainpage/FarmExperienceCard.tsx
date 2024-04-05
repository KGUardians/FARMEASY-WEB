import { Link } from 'react-router-dom';
import { Card } from '../common/Card/Card';
import { IoChevronForwardOutline } from 'react-icons/io5';
import farmerIcon from '/farmerWithCrop.svg';

const FarmExperienceCard = () => {
  return (
    <Link to="/">
      <Card>
        <div className="flex flex-col justify-between pt-2 pl-4 pr-1">
          <div className="flex flex-col gap-1 mt-2">
            <p className="font-semibold">농촌 체험</p>
            <p className="text-xs font-medium w-24">
              가족과 함께 추억을 만들어보세요!
            </p>
          </div>
          <img src={farmerIcon} alt="vegetable" className="w-16 self-end" />
        </div>

        <div className="grid content-center w-full h-12 bg-fp-green rounded-b-xl p-2">
          <div className="flex items-center gap-1 place-self-end">
            <p className="text-sm">지금 신청하기</p>
            <IoChevronForwardOutline />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FarmExperienceCard;
