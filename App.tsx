import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "./src/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS["GRAY-600"],
    alignItems: "center",
    justifyContent: "center",
  },
});
