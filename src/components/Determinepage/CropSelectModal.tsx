import Modal from '../common/Modal/Modal';

interface CropSelectModalProps {
  onClose: () => void;
}

const CropSelectModal = ({ onClose }: CropSelectModalProps) => {
  const handleConfirm = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-6">
          <p className="text-xl font-semibold text-center">
            작물을 선택해주세요 !
          </p>
        </div>
        <button
          onClick={handleConfirm}
          className="px-4 py-2 text-white bg-[#ACCB7A] hover:bg-[#8dab5e] rounded-md shadow-md"
        >
          확인
        </button>
      </div>
    </Modal>
  );
};

export default CropSelectModal;
