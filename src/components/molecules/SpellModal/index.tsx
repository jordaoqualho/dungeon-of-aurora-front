/* eslint-disable @typescript-eslint/no-misused-promises */
import { Modal } from "@/components";
import { useState } from "react";
import { Container, modalStyles } from "./styles";

type SpellModalProps = {
  isOpen: boolean;
};

export const SpellModal = (props: SpellModalProps) => {
  const [search, setSearch] = useState("");
  const { isOpen } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} customStyle={modalStyles}>
      <Container className="flex_ccc">
        <h4>Truques e magias</h4>
        <input
          type="text"
          className="search_input"
          placeholder="Digite o nome da magia ou truque"
          value={search}
          onChange={handleInputChange}
        />
      </Container>
    </Modal>
  );
};
