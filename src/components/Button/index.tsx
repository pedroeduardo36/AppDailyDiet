import { Container, ButtonText } from "./styles";

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <Container>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
