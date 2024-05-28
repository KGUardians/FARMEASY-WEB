import { ExperienceInfo } from '@type/farmList';
import FarmCard from './FarmCard';

interface FarmListProps {
  farmList: ExperienceInfo[];
}

const FarmListSection = ({ farmList }: FarmListProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-items-center">
      {farmList.map((item) => (
        <FarmCard
          key={item.id}
          url={item.url}
          farmName={item.farmName}
          like={item.like}
          title={item.title}
          location={item.place}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default FarmListSection;
