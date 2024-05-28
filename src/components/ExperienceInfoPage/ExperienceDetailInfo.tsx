import Horizon from '@components/common/Line/Horizon';

interface ExperienceDetailInfoProps {
  detail: string;
}

const ExperienceDetailInfo = ({ detail }: ExperienceDetailInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-7">
        <h1 className="text-lg font-semibold">상세정보</h1>

        <p className="text-sm">{detail}</p>
      </div>
      <Horizon color="black" />
    </>
  );
};

export default ExperienceDetailInfo;
