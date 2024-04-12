import {
  Abilities,
  AnotationList,
  CharacterInfo,
  Characteristics,
  EditingModal,
  Equipments,
  LoadingScreen,
  Menu,
  SpellsAndTricks,
} from "@/components";
import { characterService } from "@/connection";
import { defaultCharacter } from "@/constants";
import { useCharacter } from "@/hooks/useCharacter";
import { showToast } from "@/providers";
import { Character, User } from "@/types";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "./styles";

export function CharacterPage() {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const [activeMenu, setActiveMenu] = useState("Abilities");
  const [initialCharacter, setInitialCharacter] =
    useState<Character>(defaultCharacter);
  const [isEditing, setIsEditing] = useState(false);
  const user = useReadLocalStorage<User>("user");
  const { isLoading, data } = useCharacter(user?._id);

  const saveCharacterData = async () => {
    try {
      setIsEditing(false);
      await characterService.put(character);
      showToast("Alterações Salvas", "success");
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setCharacter(initialCharacter);
  };

  useEffect(() => {
    if (!data || !data[0]) return;
    setCharacter(data[0]);
    if (data[0].name === "") setIsEditing(true);
  }, [data]);

  useEffect(() => {
    if (!isEditing) return;
    setInitialCharacter({ ...character });
  }, [isEditing]);

  return (
    <Container className="flex_ssc">
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
      <Characteristics
        character={character}
        setCharacter={setCharacter}
        activeMenu={activeMenu}
      />
      <AnotationList character={character} activeMenu={activeMenu} />
      <LoadingScreen isLoading={isLoading} />
    </Container>
  );
}
