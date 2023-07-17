import { Container } from "./CheckboxStyle";

export default function Checkbox() {
  return (
    <Container title="checkbox">
      <label className="control control--checkbox">
        <input type="checkbox" className="checked" />
        <div className="control__indicator"></div>
      </label>
    </Container>
  );
}
