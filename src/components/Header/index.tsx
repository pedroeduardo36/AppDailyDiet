import { Container, Logo } from "./styles";
import logoImg from "@assets/dailyLogo.png";
import { Image } from "react-native";

export function Header() {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
}
