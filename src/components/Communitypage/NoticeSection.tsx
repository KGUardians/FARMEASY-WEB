import {
  IoChevronForwardOutline,
  IoVolumeMediumOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const NoticeSection = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-between w-full h-10 px-5 py-3 bg-gray-200"
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center font-semibold">
          <IoVolumeMediumOutline className="size-6" />
          <span>공지사항</span>
        </div>

        <div className="text-sm text-gray-500"># 게시글 작성 요령 및 규칙</div>
      </div>
      <IoChevronForwardOutline />
    </Link>
  );
};

export default NoticeSection;
