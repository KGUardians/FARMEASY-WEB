import { Card } from '../common/Card/Card';
import Horizon from '../common/Line/Horizon';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { communityData } from '../../mocks/mockData';
import { IoHeartOutline } from 'react-icons/io5';

const CommunityCard = () => {
  const last: number = communityData.length - 1;

  return (
    <Card>
      <div className="flex items-center justify-between p-4 w-full h-12 rounded-t-xl bg-fp-green">
        <p className="font-semibold text-white">최근 커뮤니티 게시글</p>
        <IoChevronForwardOutline color="white" />
      </div>

      <div className="px-4 py-2">
        {communityData.map((item, index) => (
          <>
            <div
              key={item.id}
              className="flex items-center justify-between text-xs py-2"
            >
              <p>{item.text}</p>
              <div className="flex items-center gap-0.5 w-9">
                <IoHeartOutline />
                <span>{item.like}</span>
              </div>
            </div>

            {last !== index && <Horizon />}
          </>
        ))}
      </div>
    </Card>
  );
};

export default CommunityCard;
