import { ReactNode } from "react";
import { Container, Overlay } from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  customStyle?: string;
  overlay?: boolean;
};

export const Modal = ({
  children,
  isOpen,
  customStyle,
  overlay = true,
}: ModalProps) => {
  if (!isOpen) return null;

  const modalContent = (
    <Container $customStyle={customStyle}>{children}</Container>
  );

  return overlay ? <Overlay>{modalContent}</Overlay> : modalContent;
};
