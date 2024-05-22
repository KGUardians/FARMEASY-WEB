import { userInfo } from '@type/user';
import { useState } from 'react';
import kebab from '/kebab.svg';
import { GoThumbsup } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface userInfoProps {
  data: userInfo;
}

const Comments = ({ data }: userInfoProps) => {
  const [commentsSort, setCommentsSort] = useState<string>('최신순');

  const handleSortClick = (sort: string) => {
    setCommentsSort(sort);
  };

  return (
    <div>
      <div className="flex justify-between my-4">
        <div className="flex gap-1.5 text-lg font-semibold">
          <h1>댓글</h1>
          <p>1</p>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <button
            onClick={() => handleSortClick('최신순')}
            className={commentsSort === '최신순' ? 'font-bold' : ''}
          >
            최신순
          </button>
          <button
            onClick={() => handleSortClick('공감순')}
            className={commentsSort === '공감순' ? 'font-bold' : ''}
          >
            공감순
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start gap-2 mb-5">
        <div className="flex gap-2">
          <img
            className="w-11 h-11 border rounded-full"
            src={data.avatar}
            alt={data.avatar}
          />

          <div>
            <div className="flex items-center gap-4">
              <p className="text-sm">{data.name}</p>
              <p className="text-sm font-extralight">15분 전</p>
            </div>

            <p className="my-1">저도 같은 문제로 고민중이에요 ㅠㅠ</p>

            <div className="flex gap-4 font-light text-sm">
              <div className="flex gap-1 cursor-pointer">
                <GoThumbsup className='w-5 h-5'/>
                <p>좋아요</p>
                <p>1</p>
              </div>

              <div className="flex gap-1 cursor-pointer">
                <IoChatbubbleEllipsesOutline className='w-5 h-5 transform scale-x-[-1]'/>
                <p>답글쓰기</p>
              </div>

            </div>
          </div>
        </div>
        <img className="ml-auto cursor-pointer" src={kebab} alt={kebab} />
      </div>
    </div>
  );
};

export default Comments;
