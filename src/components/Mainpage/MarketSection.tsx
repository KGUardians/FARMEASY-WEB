import { marketData } from '@mocks/mockData';
import { TitleBar } from '@components/common/TitleBar/TitleBar';
import ListItem from './ListItem';

export const MarketSection = () => {
  return (
    <>
      <TitleBar title="농산물 거래" to="/" />

      <div className="flex w-full gap-2 overflow-x-auto scrollbar-hide">
        {marketData.map((item) => (
          <ListItem
            id={item.id}
            to="market"
            type={item.type}
            image={item.url}
            like={false}
            price={item.price}
            weight={item.weight}
            farmName={item.farmName}
            place={item.place}
          />
        ))}
      </div>
    </>
  );
};
