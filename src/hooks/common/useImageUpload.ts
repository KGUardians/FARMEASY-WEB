import { useState } from 'react';

const useImageUpload = (maxImages = 10) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageUpload = (files: FileList) => {
    const newImagesCount = selectedImages.length + files.length;

    if (newImagesCount > maxImages) {
      alert(`이미지 업로드는 ${maxImages}장이 최대입니다.`);
      return;
    }

    setSelectedImages([...selectedImages, ...Array.from(files)]);
  };

  const handleImageCancel = (index: number) => {
    const image = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(image);
  };

  return {
    selectedImages,
    handleImageUpload,
    handleImageCancel,
  };
};

export default useImageUpload;
