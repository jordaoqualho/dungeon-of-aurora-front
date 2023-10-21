import { useState } from "react";
import { Container } from "./styles";

export function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsChecked(!isChecked);
    }
  };

  return (
    <Container title="checkbox">
      <label className="control control--checkbox">
        <input
          type="checkbox"
          className="checked"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          onKeyDown={handleKeyDown}
        />
        <div className="control__indicator" />
      </label>
    </Container>
  );
}
