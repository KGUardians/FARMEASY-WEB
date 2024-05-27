import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@components/common/Input/Input';
import Horizon from '@components/common/Line/Horizon';
import CommunityTypeSelector from '@components/common/CommunityTypeSelector/CommunityTypeSelector';
import Button from '@components/common/Button/Button';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import UploadImageSection from '@components/CommunityPostPage/UploadImageSection';
import { z } from 'zod';
import { CROP_LIST } from '@constants/CROP_LIST';
import { PostData } from '@type/postData';
import { useCropTypeStore } from '@store/cropTypeStore';

const formSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '내용을 입력해주세요.'),
});

const PostSection = () => {
  const [mode, setMode] = useState<'free' | 'question'>('free');
  const [cropCategory, setCropCategory] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const selectedCropType = useCropTypeStore((state) => state.selectedType);
  const setSelectedCropType = useCropTypeStore(
    (state) => state.setSelectedType,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: zodResolver(formSchema),
  });

  const changeMode = (value: string) => {
    setMode(value === '질문' ? 'question' : 'free');
  };

  const handleCropCategoryClick = (category: string) => {
    setCropCategory(category);
  };

  const handleImageUpload = (files: FileList) => {
    const newImagesCount = selectedImages.length + files.length;
    // 이미지 업로드 제한 로직
    if (newImagesCount > 10) {
      alert('이미지 업로드는 10장이 최대입니다.');
      return;
    }

    setSelectedImages([...selectedImages, ...Array.from(files)]);
  };

  const handleImageCancel = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const onSubmit: SubmitHandler<PostData> = (data) => {
    const postData: PostData = {
      ...data,
      type: mode,
      cropCategory: cropCategory,
      images: selectedImages,
    };
    console.log(postData);
  };

  return (
    <form
      className="flex flex-col p-4 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* 이미지 업로드 */}
      <UploadImageSection
        selectedImages={selectedImages}
        handleImageUpload={handleImageUpload}
        handleImageCancel={handleImageCancel}
      />

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
          {CROP_LIST.map((crop) => (
            <div key={crop.value}>
              <button
                type="button"
                onClick={() => {
                  setSelectedCropType(crop);
                  handleCropCategoryClick(crop.name);
                }}
                className={`${
                  selectedCropType?.value === crop.value
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
        <Input
          {...register('title')}
          id="post-title"
          placeholder="제목을 입력해주세요."
        />
        {errors.title && <ErrorMessage text={errors.title.message} />}
      </div>

      {/* 내용 */}
      <div>
        <h1 className="font-bold mb-3">내용</h1>
        <textarea
          {...register('content')}
          id="post-content"
          className="w-full p-2 h-44 text-sm bg-gray-200 rounded-md outline-none"
          placeholder="내용을 입력해주세요."
        />
        {errors.content && <ErrorMessage text={errors.content.message} />}
      </div>

      <Horizon color="darkgray" />
      <Button type="submit">작성하기</Button>
    </form>
  );
};

export default PostSection;
