import { Container, Loader } from "./styles";

type LoadingScreenProps = {
  isLoading: boolean;
};

export const LoadingScreen = (props: LoadingScreenProps) => {
  const { isLoading } = props;

  if (!isLoading) return <></>;

  return (
    <Container className="flex_ccc">
      <Loader />
    </Container>
  );
};
