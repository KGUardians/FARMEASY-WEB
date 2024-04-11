import CommunityCard from '../../components/Mainpage/CommunityCard';
import DetermineCard from '../../components/Mainpage/DetermineCard';
import FarmExperienceCard from '../../components/Mainpage/FarmExperienceCard';
import TradeCard from '../../components/Mainpage/TradeCard';

const MainPage = () => {
  return (
    <section className="px-6 grid gap-5 pt-5 pb-5">
      <DetermineCard />

      <div className="flex gap-2">
        <div className="w-1/2">
          <TradeCard />
        </div>
        <div className="w-1/2">
          <FarmExperienceCard />
        </div>
      </div>

      <CommunityCard />
    </section>
  );
};

export default MainPage;
