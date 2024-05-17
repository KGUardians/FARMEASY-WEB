import ExperienceInfoSection from '@components/ExperienceApplypage/ExperienceInfoSection';
import InputApplyInfoSection from '@components/ExperienceApplypage/InputApplyInfoSection';
import TopBar from '@components/common/TopBar/TopBar';
import { experienceInfoData } from '@mocks/mockData';

const ExperienceApplyPage = () => {
  const data = experienceInfoData;
  return (
    <section>
      <TopBar title="농촌체험 지원" />

      <div className="px-4">
        <ExperienceInfoSection data={data} />

        <InputApplyInfoSection />
      </div>
    </section>
  );
};

export default ExperienceApplyPage;
