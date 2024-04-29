import uploadImage from '../../../public/uploadImage.svg';

const UploadImage = () => {
  return (
    <div className="flex flex-col items-center p-20 border-[1px] border-dashed rounded-md border-[#D9D9D9]">
      <img src={uploadImage} alt="selectImage" className="mb-2" />
      <p className="text-center">사진 업로드를 해주세요.</p>
    </div>
  );
};

export default UploadImage;
