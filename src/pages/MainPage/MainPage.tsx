import determineImage from '/image/linktodetermine.png';
import { Link } from 'react-router-dom';
import { Navbar } from '@components/common/Navbar/Navbar';
import { CommunitySection } from '@components/MainPage/CommunitySection';
import { FarmExperienceSection } from '@components/MainPage/FarmExperienceSection';
import { MarketSection } from '@components/MainPage/MarketSection';

const MainPage = () => {
  return (
    <section>
      <Navbar />

      <Link to="/determine">
        <img src={determineImage} alt="event" className="object-fill" />
      </Link>

      <div className="flex flex-col px-4 mt-4">
        <MarketSection />

        <FarmExperienceSection />

        <CommunitySection />
      </div>
    </section>
  );
};

export default MainPage;
