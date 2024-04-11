import { SlotLevel } from "@/components/atoms";
import { useActionContext } from "@/contexts";
import { Character, SpellSlotType } from "@/types";
import { useEffect, useState } from "react";
import { Container } from "./styles";

type SpellSlotsProps = {
  character: Character;
  setCharacter: (char: Character) => void;
};

export const SpellSlots = (props: SpellSlotsProps) => {
  const { character, setCharacter } = props;
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const actionContext = useActionContext();

  const handleAvailableSlots = () => {
    const { level, spellSlots } = character;

    if (!spellSlots) return;

    const slotMap: Record<string, number> = {
      "1": 1,
      "2": 3,
      "3": 5,
      "4": 7,
      "5": 9,
      "6": 11,
      "7": 13,
      "8": 15,
      "9": 17,
    };

    let maxSlotLevel = 1;
    for (const key in slotMap) {
      const slotValue = slotMap[key];
      if (level >= slotValue) {
        maxSlotLevel = parseInt(key);
      } else {
        break;
      }
    }

    const availableSlots = Object.keys(spellSlots).slice(0, maxSlotLevel);
    setAvailableSlots(availableSlots);
  };

  const reduceUsedSlot = (slotLevel: keyof SpellSlotType) => {
    const { spellSlots } = character;

    if (spellSlots[slotLevel].available < 1) return;

    const newCharacterData = {
      ...character,
      spellSlots: {
        ...spellSlots,
        [slotLevel]: {
          ...spellSlots[slotLevel],
          available: spellSlots[slotLevel].available - 1,
        },
      },
    };

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  useEffect(() => {
    handleAvailableSlots();
  }, [character.level]);

  return (
    <Container className="flex_ccc">
      <div className="title">Espaços de Magia</div>
      <div className="slots_container flex_ccr">
        {availableSlots.map((level, index) => (
          <SlotLevel
            key={level}
            slotLevel={character.spellSlots[level as keyof SpellSlotType]}
            index={index}
            reduceUsedSlot={() => reduceUsedSlot(level as keyof SpellSlotType)}
          />
        ))}
      </div>
    </Container>
  );
};
