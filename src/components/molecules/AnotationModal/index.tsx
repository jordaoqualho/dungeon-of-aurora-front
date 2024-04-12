import { AnotationType } from "@/types";
import { Container, FullModal } from "./styles";

type ClassSelectorProps = {
  isOpen: boolean;
  anotation: AnotationType;
};

export const AnotationModal = ({ isOpen, anotation }: ClassSelectorProps) => {
  // useEffect(() => {
  //   classService
  //     .get()
  //     .then((allClasses: Class[]) => {
  //       setClasses(allClasses.sort((a, b) => a.name.localeCompare(b.name)));
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <FullModal $show={isOpen}>
      <Container className="flex">
        <h1>{anotation.title}</h1>
      </Container>
    </FullModal>
  );
};

export default AnotationModal;
