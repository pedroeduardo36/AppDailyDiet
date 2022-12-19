import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";

import { Container, Text } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <PercentageCard />
    </Container>
  );
}
