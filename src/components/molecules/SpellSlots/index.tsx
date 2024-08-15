import { SlotLevel } from "@/components/atoms";
import { useActionContext } from "@/contexts";
import { Character, SpellSlotType } from "@/types";
import { useEffect, useState } from "react";
import { Container } from "./styles";

type SpellSlotsProps = {
  character: Character;
  setCharacter: (char: Character) => void;
};

export const SpellSlots = ({ character, setCharacter }: SpellSlotsProps) => {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const actionContext = useActionContext();

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

  const handleAvailableSlots = () => {
    const { level, spellSlots } = character;

    if (!spellSlots) return;

    const maxSlotLevel = Object.keys(slotMap).reduce((maxLevel, key) => {
      return level >= slotMap[key] ? parseInt(key) : maxLevel;
    }, 1);

    const slots = Object.keys(spellSlots).slice(0, maxSlotLevel);
    setAvailableSlots(slots);
  };

  const modifySlot = (slotLevel: keyof SpellSlotType) => {
    const { spellSlots } = character;

    if (!spellSlots[slotLevel]) return;

    const available = spellSlots[slotLevel].available;

    const newCharacterData = {
      ...character,
      spellSlots: {
        ...spellSlots,
        [slotLevel]: {
          ...spellSlots[slotLevel],
          available: available > 0 ? available - 1 : spellSlots[slotLevel].max,
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
            reduceUsedSlot={() => modifySlot(level as keyof SpellSlotType)}
          />
        ))}
      </div>
    </Container>
  );
};
