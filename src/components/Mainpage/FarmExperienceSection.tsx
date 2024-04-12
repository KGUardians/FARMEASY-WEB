import { marketData } from '../../mocks/mockData';
import emptyHeartIcon from '../../../public/emptyHeart.svg';
import filledHeartIcon from '../../../public/filledHeart.svg';
import { TitleBar } from '../common/TitleBar/TitleBar';

export const FarmExperienceSection = () => {
  return (
    <div className="mt-10">
      <TitleBar title="농촌 체험" to="/" />

      <div className="flex w-full gap-2 overflow-x-auto scrollbar-hide">
        {marketData.map((item) => (
          <div key={item.id} className="flex flex-col gap-0.5 mt-3 text-xs">
            <img
              src={item.url}
              alt={item.url}
              className="rounded-md min-w-[100px] h-[100px] object-cover"
            />
            <div className="flex justify-between mt-1">
              <p className="text-xs">{item.type}</p>
              {item.like ? (
                <img src={filledHeartIcon} alt="like" />
              ) : (
                <img src={emptyHeartIcon} alt="unlike" />
              )}
            </div>

            <p>{item.farmName}</p>
            <p className="text-[10px]">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
