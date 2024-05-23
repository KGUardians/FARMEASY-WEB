import { userInfo } from '@type/user';

interface userInfoProps {
  data: userInfo;
}

const CommunityInfo = ({ data }: userInfoProps) => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <img
        className="size-11 border rounded-full"
        src={data.avatar}
        alt={data.avatar}
      />

      <div>
        <p className="text-sm">{data.name}</p>
        <div className="flex items-center gap-1.5 mt-[1px] text-sm font-light">
          <p>15분 전</p>
          <div className="w-px h-px bg-black rounded-full" />
          <div className="flex gap-0.5">
            <p>조회</p>
            <p>31</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityInfo;
