import { Button } from "@components/Button";
import { Image } from "react-native";
import { Container, Title, Text } from "./styles";
import successImg from "@assets/Illustration.png";

export function NewRefSuccess() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Text>Você continua dentro da dieta. Muito bom</Text>
      <Image source={successImg} style={{margin: 24}} />
      <Button title="Ir para página inicial" />
    </Container>
  );
}
