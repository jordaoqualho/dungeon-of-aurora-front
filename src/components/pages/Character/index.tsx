import {
  Abilities,
  CharacterInfo,
  EditingModal,
  Equipments,
  Menu,
  SpellsAndTricks,
  TurnActions,
} from "@/components";
import { characterService } from "@/connection";
import { useCharacter } from "@/hooks/useCharacter";
import { showToast } from "@/providers";
import { Character, User } from "@/types";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "./styles";
import { defaultCharacter } from "@/constants";

export function Character() {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const [activeMenu, setActiveMenu] = useState("Abilities");
  const [initialCharacter, setInitialCharacter] =
    useState<Character>(defaultCharacter);
  const [isEditing, setIsEditing] = useState(false);
  const user = useReadLocalStorage<User>("user");
  const { isLoading, error, data } = useCharacter(user?._id);

  if (error) {
    console.log(isLoading, error);
  }

  const saveCharacterData = async () => {
    try {
      setIsEditing(false);
      await characterService.put(character);
      showToast("Alterações Salvas", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setCharacter(initialCharacter);
  };

  useEffect(() => {
    if (!data || !data[0]) return;
    setCharacter(data[0]);
  }, [data]);

  useEffect(() => {
    if (!isEditing) return;
    setInitialCharacter({ ...character });
  }, [isEditing]);

  return (
    <Container className="flex_ccc">
      <CharacterInfo
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <EditingModal
        isOpen={isEditing}
        onSave={saveCharacterData}
        cancelEditing={cancelEditing}
      />
      <Menu setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Abilities
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        activeMenu={activeMenu}
      />
      <SpellsAndTricks
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        activeMenu={activeMenu}
      />
      <Equipments
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        activeMenu={activeMenu}
      />
      <TurnActions
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        activeMenu={activeMenu}
      />
    </Container>
  );
}
