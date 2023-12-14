import { ReactNode } from "react";
import { Container } from "./styles";

type DropdownProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const Dropdown = ({ children, isOpen }: DropdownProps) => {
  return <Container $show={isOpen}>{children}</Container>;
};
