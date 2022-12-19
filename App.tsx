import { Home } from "@screens/Home";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
