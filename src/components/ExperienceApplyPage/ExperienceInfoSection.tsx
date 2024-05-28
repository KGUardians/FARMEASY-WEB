import Horizon from '@components/common/Line/Horizon';
import { ExperienceInfoType } from '@type/experienceInfo';

interface ExperienceInfoSectionProps {
  data: ExperienceInfoType;
}

const ExperienceInfoSection = ({ data }: ExperienceInfoSectionProps) => {
  return (
    <div className="p-4">
      <h1 className="my-8 text-lg font-semibold">지원내용</h1>

      <div className="flex flex-col gap-3">
        <div className="flex">
          <p className="w-20">농장명</p>
          <p>{data.farmName}</p>
        </div>

        <div className="flex">
          <p className="w-20">체험날짜</p>
          <p className="font-semibold text-fp-darkgreen">{data.date}</p>
        </div>

        <div className="flex">
          <p className="w-20">체험시간</p>
          <p className="font-semibold text-fp-darkgreen">
            {data.startTime} ~ {data.endTime}
          </p>
        </div>
      </div>

      <Horizon color="darkgray" className="mt-10" />
    </div>
  );
};

export default ExperienceInfoSection;
