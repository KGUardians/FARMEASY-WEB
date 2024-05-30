import uploadImage from '/uploadImage.svg';

interface UploadAreaProps {
  onImageUpload: (file: File) => void;
}

const UploadArea = ({ onImageUpload }: UploadAreaProps) => {
  return (
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
        onChange={(e) => onImageUpload(e.target.files![0])}
      />
    </div>
  );
};

export default UploadArea;
