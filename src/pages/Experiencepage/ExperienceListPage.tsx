import shovelIcon from '../../../public/shovel.svg';
import { experienceData } from '../../mocks/mockData';
import LocationFilter from '../../components/Experiencepage/LocationFilter';
import FarmListSection from '../../components/Experiencepage/FarmListSection';

const ExperienceListPage = () => {
  return (
    <div className="px-5">
      <div className="flex items-center gap-2 mt-4">
        <img src={shovelIcon} alt="shovel" />
        <h1 className="text-lg font-semibold">농촌체험</h1>
      </div>

      <LocationFilter />

      <FarmListSection farmList={experienceData} />
    </div>
  );
};

export default ExperienceListPage;
