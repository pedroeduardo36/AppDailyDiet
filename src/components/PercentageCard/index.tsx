import { Container, ForwardButton, ForwardIcon } from "./styles";
import { HighLight } from "@components/Highlight";

export function PercentageCard() {
  return (
    <Container>
      <ForwardButton>
        <ForwardIcon />
      </ForwardButton>
      <HighLight title="90,28%" subtitle="De refeiçoões dentro da dieta" />
    </Container>
  );
}
