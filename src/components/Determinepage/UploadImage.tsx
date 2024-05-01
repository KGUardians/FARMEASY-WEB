import { useState } from 'react';
import modifyImage from '../../../public/modifyImage.svg';
import uploadImage from '../../../public/uploadImage.svg';
import cancelIcon from '../../../public/cancelIcon.svg';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const handleImageCancel = () => {
    setSelectedImage(null);
  };

  const handleModifyImageClick = () => {
    const input = document.getElementById('upload-input');
    if (input) {
      input.click();
    }
  };

  const handleDetermineClick = () => {
    navigate('/determine/result');
  };

  return (
    <>
      {selectedImage ? (
        <>
          <div className="flex border-[1px] p-10 border-dashed rounded-md border-[#D9D9D9]">
            <div className="relative w-1/2">
              <img
                src={URL.createObjectURL(selectedImage)}
                className="w-[150px] h-[150px] border-[1px] rounded-md border-black border-solid"
                alt="Uploaded"
              />
              <img
                src={cancelIcon}
                className="absolute top-[-4px] right-[1px] cursor-pointer"
                onClick={handleImageCancel}
                alt="Cancel"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-1/2">
              <input
                id="upload-input"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files![0])}
              />
              <label htmlFor="image-upload">
                <img
                  src={modifyImage}
                  alt="modifyImage"
                  className="cursor-pointer"
                  onClick={handleModifyImageClick}
                />
              </label>
              <p className="text-center">사진 수정하기</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="absolute top-[640px]">
              <Button onClick={handleDetermineClick} className="w-[340px]">
                판별하기
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center p-20 border-[1px] border-dashed rounded-md border-[#D9D9D9]">
          <label htmlFor="upload-input" className="cursor-pointer">
            <img src={uploadImage} alt="selectImage" className="mb-2" />
          </label>
          <p className="text-center">사진 업로드를 해주세요.</p>
          <input
            id="upload-input"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files![0])}
          />
        </div>
      )}
    </>
  );
};

export default UploadImage;
