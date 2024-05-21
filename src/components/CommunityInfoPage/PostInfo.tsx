import Horizon from '@components/common/Line/Horizon';
import { postInfo } from '@type/post';

interface postInfoProps {
  data: postInfo;
}

const CommunityPostInfo = ({ data }: postInfoProps) => {
  return (
    <div className="">
      <div className="flex justify-between mt-7 mb-4">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <div className="flex items-center gap-2 text-xs font-light">
          <p>{data.like}</p>
          <p>{data.comments}</p>
        </div>
      </div>

      <div className="mb-14 font-light">{data.descript}</div>

      <div className="flex overflow-x-auto scrollbar-hide mb-6 gap-1">
        {data.url.map((item) => (
          <img
            className="rounded-md w-5/6 h-[324px] object-cover"
            src={item}
            alt={item}
          />
        ))}
      </div>

      <Horizon color="darkgray" />
    </div>
  );
};

export default CommunityPostInfo;
