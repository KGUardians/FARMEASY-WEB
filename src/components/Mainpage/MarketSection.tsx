import { marketData } from '../../mocks/mockData';
import emptyHeartIcon from '../../../public/emptyHeart.svg';
import filledHeartIcon from '../../../public/filledHeart.svg';
import { commaizeNumber } from '@toss/utils';
import { TitleBar } from '../common/TitleBar/TitleBar';

export const MarketSection = () => {
  return (
    <>
      <TitleBar title="농산물 거래" to="/" />

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
            <p className="font-semibold">
              {commaizeNumber(item.price)}원 / {item.weight}g
            </p>
            <p>{item.farmName}</p>
            <p className="text-[10px]">{item.place}</p>
          </div>
        ))}
      </div>
    </>
  );
};
