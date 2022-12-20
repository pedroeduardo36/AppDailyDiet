import { NewRefForm } from "@components/NewRefForm";
import { TextHeader } from "@components/TextHeader";
import {
  Container,
} from "./styles";

export function NewRef() {
  return (
    <Container>
      <TextHeader title="Nova refeição" />
      <NewRefForm />
    </Container>
  );
}
