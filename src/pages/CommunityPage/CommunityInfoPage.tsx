import CommunityInfo from '@components/CommunityInfoPage/WriterInfo';
import CommunityTopBar from '@components/CommunityInfoPage/PostTopBar';
import { postInfoData, userData } from '@mocks/mockData';
import CommunityPostInfo from '@components/CommunityInfoPage/PostInfo';
import Comments from '@components/CommunityInfoPage/Comments';

const CommunityInfoPage = () => {
  const writer = userData;
  const post = postInfoData;

  return (
    <section>
      <CommunityTopBar />
      <div className="px-8">
        <CommunityInfo data={writer} />

        <CommunityPostInfo data={post} />

        <Comments data={writer}/>
      </div>
    </section>
  );
};
export default CommunityInfoPage;
