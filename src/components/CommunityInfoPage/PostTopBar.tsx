import TopBar from '@components/common/TopBar/TopBar';
import notification from '/notification.svg';
import upload from '/upload.svg';
import kebab from '/kebab.svg';
import carrot from '/cropIcon/carrot.svg';

const CommunityTopBar = () => {
  return (
    <>
      <TopBar
        title={'게시판'}
        right={
          <div className="flex items-center gap-5 mx-4">
            <img src={notification} alt="notification" />
            <img src={upload} alt="upload" />
            <img src={kebab} alt="kebab" />
          </div>
        }
      />
      <div className="px-6 mt-4">
        <div className="inline-flex items-center gap-1 border border-1 border-gray-400 rounded-[31px] px-2 py-1">
          <img className="w-6 h-6" src={carrot} alt="carrot" />
          <p className="mx-[1px]">당근</p>
        </div>
      </div>
    </>
  );
};

export default CommunityTopBar;
