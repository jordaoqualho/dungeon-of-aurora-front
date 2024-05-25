import { male_character } from "@/assets";
import {
  CharacterItem,
  ClassSelector,
  PictureModal,
  RaceSelector,
} from "@/components";
import { characterService } from "@/connection";
import { defaultCharacter } from "@/constants";
import { Character, User, defaultUser } from "@/types";
import { DiceType } from "@/utils";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { LevelSelector } from "../LevelSelector";
import {
  CharactersList,
  Container,
  ManageButton,
  ManageOptions,
  NameAndInfo,
  PhotoAndLevel,
} from "./styles";

type CharacterInfoProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

export const CharacterInfo = (props: CharacterInfoProps) => {
  const [user, setUser] = useLocalStorage<User>("user", defaultUser);
  const [showRaceSelector, setShowRaceSelector] = useState(false);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCharacterList, setShowCharacterList] = useState(false);
  const [characterList, setCharacterList] = useState<Character[]>();
  const { isEditing, setIsEditing } = props;
  const navigate = useNavigate();
  const [character, setCharacter] = useLocalStorage<Character>(
    "character",
    defaultCharacter
  );

  const handleExit = () => {
    if (user) {
      setUser(null as unknown as User);
    }
    navigate("/");
  };

  const closeAll = () => {
    setShowOptions(false);
    setShowCharacterList(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  const createNewCharacter = async () => {
    try {
      if (!user || !user._id) {
        throw new Error("User is not authenticated");
      }

      const response = await characterService.post({
        userId: user._id,
      });

      setCharacter(response);
      setIsEditing(true);
      closeAll();
    } catch (error) {
      console.error("Error creating character:", error);
    }
  };

  useEffect(() => {
    if (user._id)
      characterService
        .getByUserId(user._id)
        .then((allCharacters: Character[]) => {
          setCharacterList(
            allCharacters.filter((char) => char._id !== character._id)
          );
        })
        .catch((error) => console.error(error));
  }, [character]);

  return (
    <Container className="flex_ccc">
      <div className="flex_csr">
        <div className="flex_csr">
          <PhotoAndLevel className="flex_ccr">
            <img
              className={`photo ${isEditing ? "editing" : ""}`}
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
                onClick={() => isEditing && setShowRaceSelector(true)}
              >
                {character.race || "Raça"}
              </button>
              <p>/</p>
              <button
                className={`class ${isEditing ? "editing" : ""}`}
                onClick={() => isEditing && setShowClassSelector(true)}
              >
                {character.class || "Classe"}
              </button>
            </div>
          </NameAndInfo>
        </div>

        <ManageButton
          className="flex_ccc"
          onClick={() => {
            setShowOptions(!showOptions);
            setShowCharacterList(false);
          }}
        >
          {showOptions || showCharacterList ? (
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
          Editar {character.name?.split(" ")[0]}
        </button>
        <button
          onClick={() => {
            setShowOptions(false);
            setShowCharacterList(true);
          }}
        >
          Meus Personagens
        </button>
        <button onClick={() => handleExit()}>Sair</button>
      </ManageOptions>

      <CharactersList
        className="flex_ccc"
        $showCharacterList={showCharacterList}
      >
        {characterList?.map((char) => (
          <CharacterItem
            key={char._id}
            character={char}
            closeAll={closeAll}
            setShowPictureModal={setShowPictureModal}
            setShowLevelSelector={setShowLevelSelector}
            setShowClassSelector={setShowClassSelector}
            setShowRaceSelector={setShowRaceSelector}
          />
        ))}

        <button
          className="create_btn flex_csr"
          onClick={() => createNewCharacter()}
        >
          <div className="icon">+</div>
          <p>Novo personagem</p>
        </button>
      </CharactersList>

      <RaceSelector
        isOpen={showRaceSelector}
        setSelection={(newRace: string) => {
          setCharacter({ ...character, race: newRace });
          setShowRaceSelector(false);
        }}
      />

      <ClassSelector
        isOpen={showClassSelector}
        setSelection={(className: string, hitDice: DiceType) => {
          setCharacter({
            ...character,
            class: className,
            hitPointDices: { ...character.hitPointDices, dice: hitDice },
          });
          setShowClassSelector(false);
        }}
      />

      <LevelSelector
        isOpen={showLevelSelector}
        setSelection={(newLevel: number) => {
          setCharacter({
            ...character,
            level: newLevel,
            hitPointDices: { ...character.hitPointDices, quantity: newLevel },
          });
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
