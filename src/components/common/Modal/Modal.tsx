import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-60"
        onClick={onClose}
      ></div>
      <dialog
        open
        className="fixed z-50 h-40 p-6 bg-white border rounded-md top-1/3 w-80"
      >
        {children}
      </dialog>
    </>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
