import SelectCard from '../../components/Determinepage/SelectCard';
import selectCropImage from '../../../public/image/selelctCrop.png';
import UploadImage from '../../components/Determinepage/UploadImage';
import useCropStore from '../../store/cropStore';
import { Navbar } from '../../components/common/Navbar/Navbar';

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
