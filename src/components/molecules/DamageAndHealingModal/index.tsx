import { Modal } from "@/components";
import { useActionContext } from "@/contexts";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { Buttons, Container, FastButtons, modalStyles } from "./styles";

type DamageAndHealingModalProps = {
  damageAndHealingModal: string;
  setDamageAndHealingModal: (value: string) => void;
  character: Character;
  setCharacter: (value: Character) => void;
};

export const DamageAndHealingModal = (props: DamageAndHealingModalProps) => {
  const {
    damageAndHealingModal,
    setDamageAndHealingModal,
    character,
    setCharacter,
  } = props;
  const [value, setValue] = useState(0);
  const actionContext = useActionContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setValue(value);
  };

  const saveLifeValue = () => {
    const { hitPoints, maxHitPoints } = character;
    let newLifeValue = hitPoints;

    if (damageAndHealingModal === "damage") {
      newLifeValue -= value;
    } else if (damageAndHealingModal === "healing") {
      newLifeValue += value;
    }

    if (newLifeValue > maxHitPoints) newLifeValue = maxHitPoints;

    const newCharacterData = {
      ...character,
      hitPoints: newLifeValue,
    };

    setCharacter(newCharacterData);
    setDamageAndHealingModal("closed");
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  useEffect(() => {
    setValue(0);
  }, [damageAndHealingModal]);

  const getTitle = () => {
    switch (damageAndHealingModal) {
      case "damage":
        return "Quantos de dano você tomou?";

      case "healing":
        return "Quantos de vida você recuperou?";
    }
  };

  return (
    <Modal
      isOpen={damageAndHealingModal !== "closed"}
      customStyle={modalStyles}
    >
      <Container className="flex_ccc">
        <h4>{getTitle()}</h4>
        <input
          type="number"
          className="search_input"
          placeholder="Insira um valor"
          value={value}
          onChange={handleInputChange}
        />

        <FastButtons className="flex_csr">
          <button onClick={() => setValue((value) => value + 1)}>+1</button>
          <button onClick={() => setValue((value) => value + 5)}>+5</button>
          <button onClick={() => setValue((value) => value + 10)}>+10</button>
          <button onClick={() => setValue((value) => value + 25)}>+25</button>
        </FastButtons>

        <Buttons className="flex_csr">
          <button
            className="cancel"
            onClick={() => setDamageAndHealingModal("closed")}
          >
            Cancelar
          </button>
          <button className="save" onClick={() => saveLifeValue()}>
            Salvar
          </button>
        </Buttons>
      </Container>
    </Modal>
  );
};
