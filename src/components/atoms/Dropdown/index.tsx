import { ReactNode } from "react";
import { Container } from "./styles";

type DropdownProps = {
  children: ReactNode;
  isOpen: boolean;
  style?: React.CSSProperties;
};

export const Dropdown = ({ children, isOpen, style }: DropdownProps) => {
  return (
    <Container $show={isOpen} style={style}>
      {children}
    </Container>
  );
};
