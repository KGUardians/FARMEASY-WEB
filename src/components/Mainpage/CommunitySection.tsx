import { communityData } from '@mocks/mockData';
import emptyHeartIcon from '/emptyHeart.svg';
import Horizon from '@components/common/Line/Horizon';
import { TitleBar } from '@components/common/TitleBar/TitleBar';

export const CommunitySection = () => {
  return (
    <div className="mt-10">
      <TitleBar title="게시판" to="/" />

      <div className="mt-5">
        {communityData.map((item) => (
          <>
            <div
              key={item.id}
              className="flex items-center justify-between text-xs"
            >
              <p>{item.text}</p>
              <div className="flex flex-row items-center w-10 gap-1">
                <img src={emptyHeartIcon} alt="like" />
                <p>{item.like}</p>
              </div>
            </div>
            <Horizon />
          </>
        ))}
      </div>
    </div>
  );
};
