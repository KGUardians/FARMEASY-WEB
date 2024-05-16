import SelectCard from '../../components/Determinepage/SelectCard';
import selectCropImage from '../../../public/image/selelctCrop.png';
import UploadImage from '../../components/Determinepage/UploadImage';
import useCropStore from '../../store/cropStore';

const DeterminePage = () => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);

  return (
    <>
      <section className="grid px-6 pt-5 pb-5">
        <SelectCard />

        {selectedCrop ? (
          <UploadImage />
        ) : (
          <img src={selectCropImage} alt="selectCrop" />
        )}
      </section>
    </>
  );
};

export default DeterminePage;
