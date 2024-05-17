import BottomBar from '@components/ExperienceInfopage/BottomBar';
import ExperienceDetailSection from '@components/ExperienceInfopage/ExperienceDetailSection';
import { CarouselDefault } from '@components/common/Carousel/Carousel';
import TopBar from '@components/common/TopBar/TopBar';
import { experienceInfoData } from '@mocks/mockData';

const ExperienceInfoPage = () => {
  const data = experienceInfoData;
  return (
    <section className="flex flex-col">
      <TopBar title="농촌체험" />

      <CarouselDefault url={data.url} />

      <ExperienceDetailSection data={data} />

      <BottomBar />
    </section>
  );
};

export default ExperienceInfoPage;
