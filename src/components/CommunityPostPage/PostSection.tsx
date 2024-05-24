import { CROP_LIST } from '@constants/CROP_LIST';
import { CommunityCropType } from '@type/crop';
import Input from '@components/common/Input/Input';
import Horizon from '@components/common/Line/Horizon';
import CommunityTypeSelector from '@components/common/CommunityTypeSelector/CommunityTypeSelector';
import { useState } from 'react';
import Button from '@components/common/Button/Button';

interface CropSelectorProps {
  onClick: (value: CommunityCropType | null) => void;
  selectedCrop: CommunityCropType | null;
}

const PostSection = ({ onClick, selectedCrop }: CropSelectorProps) => {
  const [mode, setMode] = useState<'free' | 'question'>('free');

  const changeMode = (value: string) => {
    if (value === '질문') setMode('question');
    else if (value === '자유게시판') setMode('free');
  };

  return (
    <>
      <form className="flex flex-col p-4 space-y-6">
        {/* 글 유형 선택 */}
        <div className="flex gap-5 items-center">
          <h1 className="font-bold">글 유형</h1>
          <div>
            <CommunityTypeSelector mode={mode} changeMode={changeMode} />
          </div>
        </div>

        {/* 작물 카테고리 선택 */}
        <div>
          <h1 className="font-bold mb-3">작물 카테고리</h1>

          <div className="grid grid-cols-7 items-center w-full h-12 gap-2 select-none scrollbar-hide">
            {CROP_LIST.map((crop, index) => (
              <div key={index}>
                <button
                  onClick={() => onClick(crop)}
                  className={`${
                    selectedCrop === crop
                      ? 'border-fp-green text-fp-green font-semibold'
                      : 'border-gray-500'
                  } h-6 text-xs border outline-none rounded-full w-11`}
                >
                  {crop.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 제목 */}
        <div>
          <h1 className="font-bold mb-3">제목</h1>
          <Input placeholder="제목을 입력해주세요." />
        </div>

        {/* 내용 */}
        <div>
          <h1 className="font-bold mb-3">내용</h1>
          <textarea
            className="w-full p-2 h-44 text-sm bg-gray-200 rounded-md outline-none"
            placeholder="내용을 입력해주세요."
          />
        </div>
        <Horizon color="darkgray" />
        <Button type="submit">작성하기</Button>
      </form>
    </>
  );
};

export default PostSection;
