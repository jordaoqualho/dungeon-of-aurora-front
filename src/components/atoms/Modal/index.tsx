import { ReactNode } from "react";
import { Container } from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  customStyle?: string;
};

export const Modal = ({ children, isOpen, customStyle }: ModalProps) => {
  return (
    <>
      {isOpen && <Container $customStyle={customStyle}>{children}</Container>}
    </>
  );
};
