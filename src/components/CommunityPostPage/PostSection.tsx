import { SubmitHandler } from 'react-hook-form';
import Horizon from '@components/common/Line/Horizon';
import CommunityTypeSelector from '@components/common/CommunityTypeSelector/CommunityTypeSelector';
import Button from '@components/common/Button/Button';
import { PostData } from '@type/postData';
import InputContent from '@components/CommunityPostPage/InputContent';
import useImageUpload from '@/hooks/common/useImageUpload';
import usePostCommunityForm from '@/hooks/common/usePostCommunityForm';
import ImageUploader from './ImageUploader';
import CropSelector from './CropSelector';
import InputTitle from './InputTitle';

const PostSection = () => {
  const { selectedImages, handleImageUpload, handleImageCancel } =
    useImageUpload();

  const {
    register,
    handleSubmit,
    errors,
    mode,
    cropCategory,
    changeMode,
    onSelectCrop,
  } = usePostCommunityForm();

  const onSubmit: SubmitHandler<PostData> = (data) => {
    const postData: PostData = {
      ...data,
      images: selectedImages,
      cropType: cropCategory?.value,
      type: mode === 'question' ? 'question' : 'free',
    };
    console.log(postData);
  };

  return (
    <form
      className="flex flex-col p-4 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* 사진 업로드 */}
      <ImageUploader
        handleImageUpload={handleImageUpload}
        handleImageCancel={handleImageCancel}
        selectedImages={selectedImages}
      />

      {/* 글 유형 선택 */}
      <div className="flex gap-5 items-center">
        <h1 className="font-bold">글 유형</h1>
        <div>
          <CommunityTypeSelector mode={mode} changeMode={changeMode} />
        </div>
      </div>

      {/* 작물 카테고리 선택 */}
      <CropSelector
        register={register}
        selected={cropCategory}
        onSelect={onSelectCrop}
      />

      {/* 제목 */}
      <InputTitle register={register} error={errors} />

      {/* 내용 */}
      <InputContent register={register} error={errors} />

      <Horizon color="darkgray" />
      <Button type="submit">작성하기</Button>
    </form>
  );
};

export default PostSection;
