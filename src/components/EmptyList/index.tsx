import { Container, Text, SadEmoji } from "./styles";

export function EmptyList() {
  return (
    <Container>
      <Text>Não há refeições cadastradas</Text>
      <SadEmoji />
    </Container>
  );
}
