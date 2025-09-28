import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

interface ModalContentProps {
  children: React.ReactNode;
}
interface BackDropProps {
  onClose: () => void;
}

function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="bg-white rounded-3xl fixed transform-[50%, -50%] z-20 max-w-[90%] p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}

function BackDrop({ onClose }: BackDropProps) {
  return (
    <div
      onClick={onClose}
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10"
    ></div>
  );
}

function Modal(props: ModalProps) {
  const { onClose, children, isOpen } = props;
  return (
    isOpen &&
    createPortal(
      <>
        <BackDrop onClose={onClose} />
        <ModalContent>{children}</ModalContent>
      </>,
      document.getElementById("modal")!
    )
  );
}

export default Modal;
