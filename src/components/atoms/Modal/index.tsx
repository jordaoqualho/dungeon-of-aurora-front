import { ReactNode } from "react";
import { Container, Overlay } from "./styles";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const handleOverlayClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <Container>{children}</Container>
        </Overlay>
      )}
    </>
  );
};
