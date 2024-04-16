import { MarketSection } from '../../components/Mainpage/MarketSection';
import { FarmExperienceSection } from '../../components/Mainpage/FarmExperienceSection';
import { CommunitySection } from '../../components/Mainpage/CommunitySection';
import determineImage from '../../../public/image/linktodetermine.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <section>
      <Link to="/determine">
        <img
          src={determineImage}
          alt="event"
          className="object-cover w-[400px] h-[240px]"
        />
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
