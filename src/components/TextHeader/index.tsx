import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Text } from "./styles";

type Props = {
  title: string;
};

export function TextHeader({ title }: Props) {
    const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack('Home')
  }
  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon size={15} color="#333638" />
      </BackButton>
      <Text>{title}</Text>
    </Container>
  );
}
