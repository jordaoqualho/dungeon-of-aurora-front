import { male_character } from "@/assets";
import { ClassSelector, PictureModal, RaceSelector } from "@/components";
import { Character, User, defaultUser } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { LevelSelector } from "../LevelSelector";
import { Container, Controls } from "./styles";

type CharacterInfoProps = {
  character: Character;
  setCharacter: (char: Character) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

export const CharacterInfo = (props: CharacterInfoProps) => {
  const [user, setUser] = useLocalStorage<User>("user", defaultUser);
  const [showRaceSelector, setShowRaceSelector] = useState(false);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);
  const [showControls, setShowControls] = useState(false);
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
    <Container className="flex_csr">
      <section className="photo_level flex_ccr">
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
      </section>
      <section className="name_info flex_scc">
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
            onClick={() => isEditing && setShowRaceSelector(!showRaceSelector)}
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
      </section>

      <Controls>
        <button
          className="control_button flex_ccc"
          onClick={() => setShowControls(!showControls)}
        >
          {showControls ? (
            <CloseIcon className="icon" />
          ) : (
            <MoreVertIcon className="icon" />
          )}
        </button>
        {showControls && (
          <div className="control_options flex_scc">
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                setShowControls(false);
              }}
            >
              Editar
            </button>
            <button onClick={() => handleExit()}>Sair</button>
          </div>
        )}
      </Controls>

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
