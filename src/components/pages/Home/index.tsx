import { Attributes, Capabilities, CharacterInfo, Menu } from "@/components";
import { EditingModal } from "@/components/molecules/EditingModal";
import { Proficiency } from "@/components/molecules/Proficiency";
import { characterService } from "@/connection";
import { useCharacter } from "@/hooks/useCharacter";
import { showToast } from "@/providers";
import { Character, User, defaultCharacter } from "@/types";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { Container } from "./styles";

export function Home() {
  const [character, setCharacter] = useState<Character>(defaultCharacter);
  const [isEditing, setIsEditing] = useState(false);
  const user = useReadLocalStorage<User>("user");
  const { isLoading, error, data } = useCharacter(user?._id);

  if (error) {
    console.log(isLoading, error);
  }

  const saveCharacterData = async () => {
    try {
      await characterService.put(character);
      setIsEditing(false);
      showToast("Alterações Salvas", "success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data || !data[0]) return;
    setCharacter(data[0]);
  }, [data, isEditing]);

  return (
    <Container className="flex_ccc">
      <CharacterInfo
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Menu />
      <Capabilities
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />
      <Attributes
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />
      <Proficiency
        character={character}
        setCharacter={setCharacter}
        isEditing={isEditing}
      />
      <EditingModal
        isOpen={isEditing}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onSave={saveCharacterData}
      />
    </Container>
  );
}
