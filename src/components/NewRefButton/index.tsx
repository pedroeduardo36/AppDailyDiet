import { Container, ButtonText, Status } from "./styles";

type Props = {
  title: string;
};

export function NewRefButton({ title }: Props) {
  return (
    <Container>
      <Status />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
