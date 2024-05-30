import selectCropImage from '/image/selectCrop.png';
import SelectCard from '@components/DeterminePage/SelectCard';
import UploadImage from '@components/DeterminePage/UploadImage';
import { Navbar } from '@components/common/Navbar/Navbar';
import useCropStore from '@store/cropStore';

const DeterminePage = () => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);

  return (
    <section>
      <Navbar />

      <div className="px-5 mt-8">
        <SelectCard />

        {selectedCrop ? (
          <UploadImage />
        ) : (
          <img src={selectCropImage} alt="selectCrop" />
        )}
      </div>
    </section>
  );
};

export default DeterminePage;
