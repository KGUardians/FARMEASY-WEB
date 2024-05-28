import Horizon from '@components/common/Line/Horizon';

interface ApplyInfoProps {
  applicationPeriod: string;
  capacity: number;
}

const ApplyInfo = ({ applicationPeriod, capacity }: ApplyInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-7">
        <h1 className="text-lg font-semibold">모집조건</h1>

        <p className="flex gap-4 text-sm">
          모집기간 <span className="font-semibold">{applicationPeriod}</span>
        </p>

        <p className="flex gap-4 text-sm">
          모집인원 <span className="font-semibold">{capacity}명</span>
        </p>
      </div>
      <Horizon color="black" />
    </>
  );
};

export default ApplyInfo;
