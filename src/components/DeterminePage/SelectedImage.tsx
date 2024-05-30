import Button from '@components/common/Button/Button';
import cancelIcon from '/cancelIcon.svg';
import modifyImage from '/modifyImage.svg';
import { useNavigate } from 'react-router-dom';

interface SelectedImageProps {
  selected: Blob | MediaSource;
  onCancel: () => void;
  onModifyClick: () => void;
  onDetermineClick: () => void;
  onImageUpload: (file: File) => void;
}

const SelectedImage = ({
  selected,
  onCancel,
  onModifyClick,
  onDetermineClick,
  onImageUpload,
}: SelectedImageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex border-[1px] p-10 border-dashed rounded-md border-[#D9D9D9]">
        <div className="relative w-1/2">
          <img
            src={URL.createObjectURL(selected)}
            className="w-[150px] h-[150px] border-[1px] rounded-md border-black border-solid"
            alt="Uploaded"
          />
          <img
            src={cancelIcon}
            className="absolute top-[-4px] right-[4px] cursor-pointer"
            onClick={onCancel}
            alt="Cancel"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-1/2">
          <input
            id="upload-input"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => onImageUpload(e.target.files![0])}
          />
          <label htmlFor="image-upload">
            <img
              src={modifyImage}
              alt="modifyImage"
              className="cursor-pointer"
              onClick={onModifyClick}
            />
          </label>
          <p className="text-center mt-1">사진 수정하기</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-5">
        <div className="w-full h-12 bg-fp-green rounded-lg flex">
          <button
            className="w-1/3 h-full"
            onClick={() => navigate('/abnormal')}
          ></button>
          <button
            className="w-1/3 h-full text-white text-lg font-semibold"
            onClick={() => navigate('/unknown')}
          >
            판별하기
          </button>
          <button
            className="w-1/3 h-full"
            onClick={() => navigate('/normal')}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SelectedImage;
