import { male_character } from "@/assets";
import { ClassSelector, PictureModal, RaceSelector } from "@/components";
import { Character, User, defaultUser } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { LevelSelector } from "../LevelSelector";
import {
  Container,
  ManageButton,
  ManageOptions,
  NameAndInfo,
  PhotoAndLevel,
} from "./styles";

type CharacterInfoProps = {
  isEditing: boolean;
  character: Character;
  setCharacter: (char: Character) => void;
  setIsEditing: (value: boolean) => void;
};

export const CharacterInfo = (props: CharacterInfoProps) => {
  const [user, setUser] = useLocalStorage<User>("user", defaultUser);
  const [showRaceSelector, setShowRaceSelector] = useState(false);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { character, setCharacter, isEditing, setIsEditing } = props;
  const navigate = useNavigate();

  const handleExit = () => {
    if (user) {
      setUser(null as unknown as User);
    }
    navigate("/");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  return (
    <Container className="flex_ccc">
      <div className="flex_csr">
        <PhotoAndLevel className="flex_ccr">
          <img
            className="photo"
            src={character?.picture || male_character}
            alt="photo"
            onClick={() => isEditing && setShowPictureModal(true)}
          />
          <div
            className="level flex_ccr"
            onClick={() => isEditing && setShowLevelSelector(true)}
          >
            <p>{character.level}</p>
          </div>
        </PhotoAndLevel>
        <NameAndInfo className="flex_scc">
          <input
            className={`name ${isEditing ? "editing" : ""}`}
            name="name"
            value={character.name || ""}
            placeholder="Nome do Personagem"
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
          <div className="info flex_ccr">
            <button
              className={`race ${isEditing ? "editing" : ""}`}
              onClick={() =>
                isEditing && setShowRaceSelector(!showRaceSelector)
              }
            >
              {character.race || "Raça"}
            </button>
            <p>/</p>
            <button
              className={`class ${isEditing ? "editing" : ""}`}
              onClick={() =>
                isEditing && setShowClassSelector(!showClassSelector)
              }
            >
              {character.class || "Classe"}
            </button>
          </div>
        </NameAndInfo>

        <ManageButton
          className="flex_ccc"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? (
            <CloseIcon className="icon" />
          ) : (
            <MoreVertIcon className="icon" />
          )}
        </ManageButton>
      </div>

      <ManageOptions className="flex_ccc" $showOptions={showOptions}>
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            setShowOptions(false);
          }}
        >
          Editar Personagem
        </button>
        <button onClick={() => handleExit()}>Sair da Conta</button>
      </ManageOptions>

      <RaceSelector
        isOpen={showRaceSelector}
        setSelection={(value: string) => {
          setCharacter({ ...character, race: value });
          setShowRaceSelector(false);
        }}
      />
      <ClassSelector
        isOpen={showClassSelector}
        setSelection={(value: string) => {
          setCharacter({ ...character, class: value });
          setShowClassSelector(false);
        }}
      />
      <LevelSelector
        isOpen={showLevelSelector}
        setSelection={(value: number) => {
          setCharacter({ ...character, level: value });
          setShowLevelSelector(false);
        }}
      />
      <PictureModal
        isOpen={showPictureModal}
        setCharacter={setCharacter}
        character={character}
        closeModal={() => setShowPictureModal(false)}
      />
    </Container>
  );
};
