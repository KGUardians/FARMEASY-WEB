import ExperienceDetailSection from '@components/ExperienceInfopage/ExperienceDetailSection';
import TopBar from '@components/common/TopBar/TopBar';
import { experienceInfoData } from '@mocks/mockData';

const ExperienceInfoPage = () => {
  return (
    <section>
      <TopBar title="농촌체험" />

      <div className="w-full h-[200px] bg-blue-gray-300"></div>

      <ExperienceDetailSection data={experienceInfoData} />
    </section>
  );
};

export default ExperienceInfoPage;
