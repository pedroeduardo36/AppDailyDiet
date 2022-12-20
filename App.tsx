import { Home } from "@screens/Home";
import { NewRef } from "@screens/NewRef";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark"/>
      {fontsLoaded ? <NewRef /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
