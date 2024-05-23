import Horizon from '@components/common/Line/Horizon';
import { getDateDistance, getDateDistanceText } from '@toss/date';
import { Link } from 'react-router-dom';
import thumbIcon from '/thumb.svg';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

interface BoardCardProps {
  to: number;
  title: string;
  text: string;
  url: string | null;
  date: string;
  view: number;
  like: number;
  comment: number;
}

const BoardCard = ({
  to,
  title,
  text,
  url,
  date,
  view,
  like,
  comment,
}: BoardCardProps) => {
  const nowDate = new Date();
  const writeDate = new Date(date);
  const dateDistance = getDateDistance(writeDate, nowDate);
  const dateDistanceText = getDateDistanceText(dateDistance, {
    hours: (t) => t.days < 1,
    minutes: (t) => t.hours < 1,
    seconds: (t) => t.minutes < 1,
  });

  return (
    <>
      <Link to={`/${to}`}>
        <div className="px-4 py-2">
          {/* 게시글 제목, 내용, 사진 */}
          <div className="flex justify-between h-[90px] gap-2">
            <div className={`${url ? 'w-4/5' : 'w-full'} flex flex-col gap-1`}>
              <h2 className="font-semibold truncate">{title}</h2>
              <p className="text-sm truncate">{text}</p>
            </div>
            {url! && (
              <img src={url} alt="image" className="rounded-lg size-20" />
            )}
          </div>

          {/* 게시글 등록 시간, 조회수, 좋아요 수, 댓글 수 */}
          <div className="flex items-center justify-between text-xs font-light">
            <div className="flex gap-1">
              <p>{dateDistanceText} 전</p>
              <p>· 조회 {view}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <img src={thumbIcon} alt="like" className="size-3" />
                <span>{like}</span>
              </div>
              <div className="flex items-center gap-1">
                <IoChatbubbleEllipsesOutline />
                <span>{comment}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Horizon color="darkgray" />
    </>
  );
};

export default BoardCard;
