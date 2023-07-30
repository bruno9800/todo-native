import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS["GRAY-600"],
  },
  content: {
    paddingHorizontal: 24,
    marginTop: 55,
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  listTasks: {
    height: 500
  }
})