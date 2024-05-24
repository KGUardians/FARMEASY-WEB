import { useState } from 'react';
import uploadImage from '/uploadImage.svg';
import cancelIcon from '/cancelIcon.svg';
import Horizon from '@components/common/Line/Horizon';

const UploadImageSection = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageUpload = (files: FileList) => {
    const newImagesCount = selectedImages.length + files.length;

    // 업로드 제한 로직 (모달창으로 구현?)
    if (newImagesCount > 10) {
      alert('이미지 업로드는 10장이 최대입니다.');
      return;
    }

    setSelectedImages([...selectedImages, ...Array.from(files)]);
  };

  const handleImageCancel = (index: number) => {
    const image = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(image);
  };

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max mb-4 mt-8 p-1 gap-1 overflow-x-auto scrollbar-hide items-center">
        <div className="grid place-items-center space-y-[-20px] size-[74px] border-[1.5px] border-solid border-gray-300 rounded-md">
          <label htmlFor="upload-input" className="cursor-pointer">
            <img className="w-6 h-6" src={uploadImage} alt="Upload" />
          </label>

          <div className="flex">
            <p>
              <span
                className={
                  selectedImages.length > 0 ? 'text-fp-green font-bold' : ''
                }
              >
                {selectedImages.length}
              </span>
              {' / 10'}
            </p>
          </div>

          <input
            id="upload-input"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e.target.files!)}
          />
        </div>

        <div className="flex gap-1">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={URL.createObjectURL(image)}
                className="size-[74px] rounded-md object-cover"
                alt={`Image ${index + 1}`}
              />
              <img
                src={cancelIcon}
                className="absolute top-[-4px] right-[-4px] cursor-pointer"
                onClick={() => handleImageCancel(index)}
                alt="Cancel"
              />
            </div>
          ))}
        </div>
      </div>

      <Horizon color="darkgray" />
    </>
  );
};

export default UploadImageSection;
