import { MarketSection } from '../../components/Mainpage/MarketSection';
import { FarmExperienceSection } from '../../components/Mainpage/FarmExperienceSection';
import { CommunitySection } from '../../components/Mainpage/CommunitySection';

const MainPage = () => {
  return (
    <section>
      <div className="w-[400px] h-[240px] bg-fp-green"></div>

      <div className="flex flex-col px-4 mt-4">
        <MarketSection />

        <FarmExperienceSection />

        <CommunitySection />
      </div>
    </section>
  );
};

export default MainPage;
