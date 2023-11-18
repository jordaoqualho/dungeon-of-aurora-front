import { Container } from "./styles";

type CheckboxProps = {
  checked: boolean;
};

export function Checkbox(props: CheckboxProps) {
  const { checked } = props;

  return (
    <Container title="checkbox">
      <label className="control control--checkbox">
        <input type="checkbox" className="checked" checked={checked} readOnly />
        <div className="control__indicator" />
      </label>
    </Container>
  );
}
