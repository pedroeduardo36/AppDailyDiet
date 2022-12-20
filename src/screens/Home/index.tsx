import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";
import { SectionList, StyleSheet, View } from "react-native";
import {
  Container,
  Text,
  SectionHeader,
  SectionCard,
  CardText,
} from "./styles";

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
    <CardText>{title}</CardText>
  </SectionCard>
);

export function Home() {
  return (
    <Container>
      <Header />
      <PercentageCard />
      <Text>Refeições</Text>
      <Button title="+ Nova refeição" />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />
    </Container>
  );
}
