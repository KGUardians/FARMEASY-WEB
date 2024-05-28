import { ExperienceInfoType } from '@type/experienceInfo';
import emptyHeart from '/emptyHeart.svg';
import Horizon from '@components/common/Line/Horizon';
import TabBar from '@components/common/TabBar/TabBar';
import { useState } from 'react';
import ApplyInfo from './ApplyInfo';
import ExperienceDetailInfo from './ExperienceDetailInfo';
import FarmInfo from './FarmInfo';

interface ExperienceDetailSectionProps {
  data: ExperienceInfoType;
}

const ExperienceDetailSection = ({ data }: ExperienceDetailSectionProps) => {
  const [view, setView] = useState<string>('모집조건');

  const tabTitles = ['모집조건', '상세정보', '농장정보'];

  const renderView = () => {
    switch (view) {
      case '모집조건':
        return (
          <ApplyInfo
            applicationPeriod={data.applicationPeriod}
            capacity={data.capacity}
          />
        );
      case '상세정보':
        return <ExperienceDetailInfo detail={data.detail} />;
      case '농장정보':
        return <FarmInfo locationInfo={data.locationInfo} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-6 mt-5">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{data.title}</h1>
          <img src={emptyHeart} alt="like" className="size-5" />
        </div>

        <p className="text-sm">{data.farmName}</p>

        <div className="flex flex-col gap-1 my-3 text-sm">
          <p>
            날짜:{' '}
            <span className="font-semibold text-fp-darkgreen">{data.date}</span>
          </p>
          <p>
            시간:{' '}
            <span className="font-semibold text-fp-darkgreen">
              {data.startTime} ~ {data.endTime}
            </span>
          </p>
        </div>
      </div>

      <Horizon color="black" />

      <div className="mt-4">
        <TabBar title={tabTitles} getter={view} setter={setView} />
      </div>

      {renderView()}
    </div>
  );
};

export default ExperienceDetailSection;
