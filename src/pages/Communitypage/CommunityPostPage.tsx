import PostSection from '@components/CommunityPostPage/PostSection';
import TopBar from '@components/common/TopBar/TopBar';

const CommunityPostPage = () => {
  return (
    <section className="px-4">
      <TopBar title="글쓰기" />

      <PostSection />
    </section>
  );
};

export default CommunityPostPage;
