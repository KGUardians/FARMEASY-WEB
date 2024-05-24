import PostSection from '@components/CommunityPostPage/PostSection';
import UploadImageSection from '@components/CommunityPostPage/UploadImageSection';
import TopBar from '@components/common/TopBar/TopBar';
import { useCropTypeStore } from '@store/cropTypeStore';

const CommunityPostPage = () => {
  const selectedCropType = useCropTypeStore((state) => state.selectedType);
  const setSelectedCropType = useCropTypeStore(
    (state) => state.setSelectedType,
  );

  return (
    <section className="px-4">
      <TopBar title="글쓰기" />

      <UploadImageSection />

      <PostSection
        selectedCrop={selectedCropType}
        setSelectedCrop={setSelectedCropType}
      />
    </section>
  );
};

export default CommunityPostPage;
