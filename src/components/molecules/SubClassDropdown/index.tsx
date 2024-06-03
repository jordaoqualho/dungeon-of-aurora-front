import { Dropdown } from "@/components/atoms";
import { defaultCharacter } from "@/constants";
import { useActionContext } from "@/contexts";
import { Character } from "@/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Container, Selector, dropdownStyle } from "./styles";

type SubClassDropdownProps = {
  uniqueSubClasses: (string | undefined)[];
  setSelectedSubClass: (subClasse: string) => void;
  selectedSubClass: string;
};

export const SubClassDropdown = ({
  uniqueSubClasses,
  selectedSubClass,
  setSelectedSubClass,
}: SubClassDropdownProps) => {
  const actionContext = useActionContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [character, setCharacter] = useLocalStorage<Character>(
    "character",
    defaultCharacter
  );

  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedSubClass = event.currentTarget.id;
    setSelectedSubClass(clickedSubClass);
    saveSubClass(clickedSubClass);
  };

  const saveSubClass = (subClass: string) => {
    const newCharacterData = {
      ...character,
      subClass: subClass,
    };

    setCharacter(newCharacterData);
    actionContext?.dispatchAction({
      action: "saveCharacter",
      content: newCharacterData,
    });
  };

  return (
    <Container
      className="flex_csb"
      $isDropdownOpen={isDropdownOpen}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <p className="selectedSubClass">
        {selectedSubClass || "nenhuma subclasse selecionada"}
      </p>
      <KeyboardArrowDownRoundedIcon className="menu_icon" />
      <Dropdown isOpen={isDropdownOpen} style={dropdownStyle}>
        <Selector className="flex">
          {uniqueSubClasses?.map((subClass, index) => (
            <div
              className="option flex_ccc"
              onClick={(e) => handleOptionClick(e)}
              id={subClass}
              key={index}
            >
              <p className="text">{subClass}</p>
            </div>
          ))}
        </Selector>
      </Dropdown>
    </Container>
  );
};
