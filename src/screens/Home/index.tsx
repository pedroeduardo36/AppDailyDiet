import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './styles';

export function Home() {
  return (
    <Container>
      <Text>Daily Diet</Text>
      <StatusBar style='dark'/>
    </Container>
  );
}

