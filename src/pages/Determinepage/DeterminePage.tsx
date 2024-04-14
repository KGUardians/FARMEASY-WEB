import { useState } from 'react';
import SelectCard from '../../components/Determinepage/SelectCard';
import CropSelectModal from '../../components/Determinepage/CropSelectModal';

const DeterminePage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <section className="grid gap-5 px-6 pt-5 pb-5">
        {isShowModal && <CropSelectModal onClose={closeModal} />}
        <SelectCard openModal={openModal} />
      </section>
    </>
  );
};

export default DeterminePage;
