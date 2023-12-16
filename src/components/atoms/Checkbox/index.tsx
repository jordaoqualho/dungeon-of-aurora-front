import { Container } from "./styles";

type CheckboxProps = {
  checked: boolean;
  customStyle?: string;
};

export function Checkbox(props: CheckboxProps) {
  const { checked, customStyle } = props;

 const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
   event.stopPropagation();
 };

 return (
   <Container title="checkbox" $customStyle={customStyle}>
     <label className="control control--checkbox">
       <input
         type="checkbox"
         className="checked"
         checked={checked}
         readOnly
         onClick={handleCheckboxClick}
       />
       <div className="control__indicator" />
     </label>
   </Container>
 );
}
