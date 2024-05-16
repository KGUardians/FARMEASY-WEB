import shovelIcon from '../../../public/shovel.svg';
import { experienceData } from '../../mocks/mockData';
import LocationFilter from '../../components/Experiencepage/LocationFilter';
import FarmListSection from '../../components/Experiencepage/FarmListSection';
import { useState } from 'react';
import { LocationFilterValue } from '../../types/location';
import { Navbar } from '../../components/common/Navbar/Navbar';

const ExperienceListPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<LocationFilterValue>({
    DO: '경기도',
    SI: '수원시',
    GUNGU: '영통구',
  });

  return (
    <div className="relative">
      <Navbar />

      <div className="px-5">
        <div className="flex items-center gap-2 mt-4">
          <img src={shovelIcon} alt="shovel" />
          <h1 className="text-lg font-semibold">농촌체험</h1>
        </div>

        <LocationFilter
          open={open}
          setOpen={setOpen}
          DO={location.DO}
          SI={location.SI}
          GUNGU={location.GUNGU}
        />

        <FarmListSection farmList={experienceData} />
      </div>
    </div>
  );
};

export default ExperienceListPage;
