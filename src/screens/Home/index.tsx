import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";
import { SectionList } from "react-native";
import {
  Container,
  Text,
  SectionHeader,
  SectionCard,
  CardText,
  Status,
  Hour,
  HourView,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    title: "20.12.22",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "19.12.22",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "18.12.22",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "17.12.22",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

type Props = {
  title: string;
};

const Item = ({ title }: Props) => (
  <SectionCard>
    <HourView>
      <Hour>20:00</Hour>
    </HourView>
    <CardText>{title}</CardText>
    <Status />
  </SectionCard>
);

export function Home() {

  const navigation = useNavigation()

  function handleNewRef(){
    navigation.navigate('NewRef')
  }


  return (
    <Container>
      <Header />
      <PercentageCard />
      <Text>Refeições</Text>
      <Button onPress={handleNewRef} title="+ Nova refeição" />
      <SectionList
        style={{ width: "100%" }}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </Container>
  );
}
