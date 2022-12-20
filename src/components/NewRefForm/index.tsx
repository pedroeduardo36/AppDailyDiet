import { Button } from "@components/Button";
import { NewRefButton } from "@components/NewRefButton";
import { View } from "react-native";
import {
  DescInput,
  Form,
  Input,
  Text,
  RowContainer,
  DateInput,
} from "./styles";

export function NewRefForm() {
  return (
    <Form>
      <Text>Nome</Text>
      <Input placeholder="Nome da refeição" />
      <Text style={{ marginTop: 32 }}>Descrição</Text>
      <DescInput />

      <RowContainer>
        <View style={{ width: "48%" }}>
          <Text>Data</Text>
          <DateInput placeholder="12/12/12" />
        </View>
        <View style={{ width: "48%" }}>
          <Text>Hora</Text>
          <DateInput placeholder="12:30" />
        </View>
      </RowContainer>
      <Text>Está dentro da dieta?</Text>

      <RowContainer style={{marginBottom: 32}}>
        <View style={{ width: "48%" }}>
          <NewRefButton title="Sim" />
        </View>
        <View style={{ width: "48%" }}>
          <NewRefButton title="Não" />
        </View>
      </RowContainer>

      <Button title="Cadastrar refeição"/>
    </Form>
  );
}
