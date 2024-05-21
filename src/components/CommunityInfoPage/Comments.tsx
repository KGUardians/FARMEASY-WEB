import { userInfo } from '@type/user';
import kebab from '/kebab.svg';

interface userInfoProps {
  data: userInfo;
}

const Comments = ({ data }: userInfoProps) => {
  return (
    <div>
      <div className="flex justify-between my-4">
        <div className="flex gap-1.5 text-lg font-semibold">
          <h1>댓글</h1>
          <p>1</p>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <p>공감순</p>
          <p>최신순</p>
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
              <div className="flex gap-1">
                <p>좋아요</p>
                <p>1</p>
              </div>

              <p>답글쓰기</p>
            </div>
          </div>
        </div>
        <img className="ml-auto" src={kebab} alt="kebab" />
      </div>
    </div>
  );
};

export default Comments;
