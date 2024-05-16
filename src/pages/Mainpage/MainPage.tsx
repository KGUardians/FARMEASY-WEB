import { MarketSection } from '../../components/Mainpage/MarketSection';
import { FarmExperienceSection } from '../../components/Mainpage/FarmExperienceSection';
import { CommunitySection } from '../../components/Mainpage/CommunitySection';
import determineImage from '../../../public/image/linktodetermine.png';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar/Navbar';

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
