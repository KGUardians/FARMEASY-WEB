import uploadImage from '/uploadImage.svg';
import cancelIcon from '/cancelIcon.svg';
import Horizon from '@components/common/Line/Horizon';

interface UploadImageSectionProps {
  selectedImages: File[];
  handleImageUpload: (files: FileList) => void;
  handleImageCancel: (index: number) => void;
}

const UploadImageSection = ({
  selectedImages,
  handleImageUpload,
  handleImageCancel,
}: UploadImageSectionProps) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max p-1 gap-1 overflow-x-auto scrollbar-hide items-center">
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
