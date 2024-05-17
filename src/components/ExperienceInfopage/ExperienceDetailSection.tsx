import { ExperienceInfoType } from '@type/experienceInfo';
import emptyHeart from '/emptyHeart.svg';

interface ExperienceDetailSectionProps {
  data: ExperienceInfoType;
}

const ExperienceDetailSection = ({ data }: ExperienceDetailSectionProps) => {
  return (
    <div className="px-6 mt-5">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{data.title}</h1>
          <img src={emptyHeart} alt="like" className="size-5" />
        </div>

        <p className="text-sm">{data.farmName}</p>

        <div className="text-sm">
          <p>
            날짜:{' '}
            <span className="font-semibold text-fp-darkgreen">{data.date}</span>
          </p>
          <p>
            시간:{' '}
            <span className="font-semibold text-fp-darkgreen">
              {data.capacity}명
            </span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailSection;
