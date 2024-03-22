import { Card } from '../../components/common/Card/Card';
import harvestingIcon from '../../../public/harvesting.svg';
import { IoChevronForwardOutline } from 'react-icons/io5';

export const RegisterCard = () => {
  return (
    <Card>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">농촌 체험 모집하기</h1>
          <p className="text-xs">내 밭에 사람들을 초대해보세요!</p>
        </div>

        <img src={harvestingIcon} alt="harvest" className="w-20" />
      </div>
      <div className="flex items-center mt-10 justify-between">
        <p className="text-xs">지금 등록하러 가기</p>
        <IoChevronForwardOutline />
      </div>
    </Card>
  );
};
