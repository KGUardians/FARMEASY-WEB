import { CheckPlantCard } from './CheckPlantCard';
import { CommunityCard } from './CommunityCard';
import { MarketCard } from './MarketCard';
import { RegisterCard } from './RegisterCard';

const MainPage = () => {
  return (
    <section className="px-6 grid gap-5 pt-5 pb-5">
      <CheckPlantCard />

      <MarketCard />

      <RegisterCard />

      <CommunityCard />
    </section>
  );
};

export default MainPage;
