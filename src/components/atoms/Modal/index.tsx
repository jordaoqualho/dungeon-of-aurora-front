import { ReactNode, useEffect } from "react";
import { Container, Overlay } from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  customStyle?: string;
  overlay?: boolean;
  lockScroll?: boolean;
};

export const Modal = ({
  children,
  isOpen,
  customStyle,
  overlay = true,
  lockScroll = true,
}: ModalProps) => {
  useEffect(() => {
    if (!lockScroll) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <Container $customStyle={customStyle}>{children}</Container>
  );

  return overlay ? <Overlay>{modalContent}</Overlay> : modalContent;
};
