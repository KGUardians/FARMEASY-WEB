import { experienceData } from '@mocks/mockData';
import { TitleBar } from '@components/common/TitleBar/TitleBar';
import ListItem from './ListItem';

export const FarmExperienceSection = () => {
  return (
    <div className="mt-10">
      <TitleBar title="농촌 체험" to="/experiencelist" />

      <div className="flex w-full gap-2 overflow-x-auto scrollbar-hide">
        {experienceData.map((item) => (
          <ListItem
            id={item.id}
            to="experience"
            image={item.url}
            like={false}
            type={item.title}
            farmName={item.farmName}
            place={item.place}
          />
        ))}
      </div>
    </div>
  );
};
