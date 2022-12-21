import { Button } from "@components/Button";
import { Image } from "react-native";
import { Container, Title, Text } from "./styles";
import failureImg from "@assets/quepena.png";

export function NewRefFailure() {
  return (
    <Container>
      <Title>Que pena!</Title>
      <Text>
        Você saiu da dieta dessa vez, mas continue se esforçando e não desista
      </Text>
      <Image source={failureImg} style={{ margin: 24 }} />
      <Button title="Ir para página inicial" />
    </Container>
  );
}
