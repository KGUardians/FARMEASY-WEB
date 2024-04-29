import { useState } from 'react';
import SelectCard from '../../components/Determinepage/SelectCard';
import CropSelectModal from '../../components/Determinepage/CropSelectModal';
import selectCropImage from '../../../public/image/selelctCrop.png';
import UploadImage from '../../components/Determinepage/UploadImage';
import useCropStore from '../../store/cropStore';

const DeterminePage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const selectedCrop = useCropStore((state) => state.selectedCrop);

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <section className="grid gap-5 px-6 pt-5 pb-5">
        {isShowModal && <CropSelectModal onClose={closeModal} />}
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
