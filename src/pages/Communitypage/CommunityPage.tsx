import BoardListSection from '@components/Communitypage/BoardListSection';
import NoticeSection from '@components/Communitypage/NoticeSection';
import CropSelector from '@components/Communitypage/CropSelector';
import CommunityTypeSelector from '@components/common/CommunityTypeSelector/CommunityTypeSelector';
import Horizon from '@components/common/Line/Horizon';
import SearchBar from '@components/common/SearchBar/SearchBar';
import TopBar from '@components/common/TopBar/TopBar';
import { boardListSimpleData } from '@mocks/mockData';
import { useCropTypeStore } from '@store/cropTypeStore';
import { BoardSimpleType, boardType } from '@type/community';
import { useState } from 'react';

const CommunityPage = () => {
  const [mode, setMode] = useState<boardType>('free');
  const [boardList, setBoardList] =
    useState<BoardSimpleType[]>(boardListSimpleData);

  const [searchText, setSearchText] = useState<string>('');

  const selectedCropType = useCropTypeStore((state) => state.selectedType);
  const setSelectedCropType = useCropTypeStore(
    (state) => state.setSelectedType,
  );

  const changeMode = (value: string) => {
    if (value === '질문') setMode('question');
    else if (value === '자유게시판') setMode('free');
  };

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clickSearchButton = () => {}; // 검색 버튼 클릭 시 액션이 될 함수

  return (
    <section>
      {/* 탭바가 포함된 상단바 */}
      <TopBar
        title="게시판"
        right={<CommunityTypeSelector mode={mode} changeMode={changeMode} />}
      />

      {/* 공지사항 */}
      <NoticeSection />

      {/* 작물 선택 */}
      <CropSelector
        onClick={setSelectedCropType}
        selectedCrop={selectedCropType}
      />

      {/* 검색창 */}
      <div className="px-8 my-3">
        <SearchBar
          clickButton={clickSearchButton}
          onChange={handleSearchText}
          value={searchText}
          placeholder="검색어를 입력하세요"
        />
      </div>

      <Horizon color="darkgray" />

      {/* 게시글 리스트 */}
      <BoardListSection data={boardList} />
    </section>
  );
};

export default CommunityPage;
