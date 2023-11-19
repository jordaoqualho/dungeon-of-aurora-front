import { Container } from "./styles";

type CheckboxProps = {
  checked: boolean;
  customstyle?: string;
};

export function Checkbox(props: CheckboxProps) {
  const { checked, customstyle } = props;

  return (
    <Container title="checkbox" customstyle={customstyle}>
      <label className="control control--checkbox">
        <input type="checkbox" className="checked" checked={checked} readOnly />
        <div className="control__indicator" />
      </label>
    </Container>
  );
}
