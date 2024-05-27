import uploadImage from '/uploadImage.svg';
import cancelIcon from '/cancelIcon.svg';
import Horizon from '@components/common/Line/Horizon';

interface ImageUploaderProps {
  handleImageUpload: (files: FileList) => void;
  handleImageCancel: (index: number) => void;
  selectedImages: File[];
}

const ImageUploader = ({
  handleImageUpload,
  handleImageCancel,
  selectedImages,
}: ImageUploaderProps) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max p-1 gap-1 overflow-x-auto scrollbar-hide items-center">
        <div className="grid place-items-center space-y-[-12px] size-[74px] border-[1.5px] border-solid border-gray-300 rounded-md">
          <label htmlFor="upload-input" className="cursor-pointer">
            <img className="size-6 mt-2" src={uploadImage} alt="upload" />
          </label>

          <p
            className={
              selectedImages.length > 0 ? 'text-fp-green font-bold' : ''
            }
          >
            {selectedImages.length}
            <span className="text-black font-medium">{' / 10'}</span>
          </p>

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
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                className="size-[74px] border-[1.5px] border-gray-300 border-solid rounded-md object-cover"
                alt={`Image ${index + 1}`}
              />
              <img
                src={cancelIcon}
                className="absolute top-[-4px] right-[-4px] cursor-pointer"
                onClick={() => handleImageCancel(index)}
                alt="Cancel"
              />
              {index === 0 && (
                <div className="absolute bottom-0 w-full h-5 flex flex-col opacity-80 border-x-[1.5px] border-b-[1.5px] justify-center bg-black rounded-b-md text-white text-xs text-center">
                  대표사진
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Horizon color="darkgray" />
    </>
  );
};

export default ImageUploader;
