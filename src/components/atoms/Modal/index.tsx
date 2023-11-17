import { ReactNode } from "react";
import { Container } from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const Modal = ({ children, isOpen }: ModalProps) => {
  return <>{isOpen && <Container>{children}</Container>}</>;
};
