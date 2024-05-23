import ExperienceInfoSection from '@components/ExperienceApplypage/ExperienceInfoSection';
import InputApplyInfoSection from '@components/ExperienceApplypage/InputApplyInfoSection';
import TopBar from '@components/common/TopBar/TopBar';
import { experienceInfoData } from '@mocks/mockData';
import { Suspense } from 'react';

const ExperienceApplyPage = () => {
  const data = experienceInfoData;
  return (
    <section>
      <TopBar title="농촌체험 지원" />

      <div className="px-4">
        <Suspense fallback={<div>스켈레톤</div>}>
          <ExperienceInfoSection data={data} />
        </Suspense>

        <InputApplyInfoSection />
      </div>
    </section>
  );
};

export default ExperienceApplyPage;
