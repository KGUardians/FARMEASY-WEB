import { Card } from '../../components/common/Card/Card';
import { communityData } from '../../mocks/mockData';
import {
  IoChevronForwardOutline,
  IoEyeOutline,
  IoHeartOutline,
} from 'react-icons/io5';

export const CommunityCard = () => {
  return (
    <Card>
      <div className="flex items-center justify-between pb-2">
        <h1 className="font-semibold">우리 같이 소통해요!</h1>
        <IoChevronForwardOutline />
      </div>
      {communityData.map((item, index) => (
        <>
          <div
            key={index}
            className="flex items-center justify-between text-xs py-1"
          >
            <p>{item.text}</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[0.5px]">
                <IoEyeOutline />
                <p>{item.view}</p>
              </div>
              <div className="flex items-center gap-[0.5px]">
                <IoHeartOutline />
                <p>{item.like}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-slate-200 my-1"></div>
        </>
      ))}
    </Card>
  );
};
