import { Character } from "@/types";
import { Container } from "./styles";

type ProficiencyProps = {
  character: Character;
  setCharacter: (char: Character) => void;
};

export const Proficiency = (props: ProficiencyProps) => {
  const { character, setCharacter } = props;

  if (!character) {
    console.log("📌  Proficiency");
  }

  return (
    <Container className="flex_ccc">
      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">DEX</p>
        <div className="skill">Acrobatics</div>
        <div className="bonus flex_ccc">
          <p>+5</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">WIS</p>
        <div className="skill">Animal Handling</div>
        <div className="bonus flex_ccc">
          <p>+3</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">WIS</p>
        <div className="skill">Insight</div>
        <div className="bonus flex_ccc">
          <p>+4</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">WIS</p>
        <div className="skill">Medicine</div>
        <div className="bonus flex_ccc">
          <p>+2</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">WIS</p>
        <div className="skill">Perception</div>
        <div className="bonus flex_ccc">
          <p>+1</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">WIS</p>
        <div className="skill">Survival</div>
        <div className="bonus flex_ccc">
          <p>+2</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">INT</p>
        <div className="skill">Arcana</div>
        <div className="bonus flex_ccc">
          <p>+1</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">INT</p>
        <div className="skill">History</div>
        <div className="bonus flex_ccc">
          <p>+3</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">INT</p>
        <div className="skill">Investigation</div>
        <div className="bonus flex_ccc">
          <p>+2</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">INT</p>
        <div className="skill">Nature</div>
        <div className="bonus flex_ccc">
          <p>+1</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">INT</p>
        <div className="skill">Religion</div>
        <div className="bonus flex_ccc">
          <p>+4</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">CHA</p>
        <div className="skill">Deception</div>
        <div className="bonus flex_ccc">
          <p>+2</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">CHA</p>
        <div className="skill">Intimidation</div>
        <div className="bonus flex_ccc">
          <p>+3</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">CHA</p>
        <div className="skill">Performance</div>
        <div className="bonus flex_ccc">
          <p>+1</p>
        </div>
      </div>

      <div className="prof flex_csb">
        <input type="checkbox" name="" id="" />
        <p className="type">CHA</p>
        <div className="skill">Persuasion</div>
        <div className="bonus flex_ccc">
          <p>+4</p>
        </div>
      </div>
    </Container>
  );
};
