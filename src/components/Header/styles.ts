import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  header: {
    height: 173,
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS["GRAY-700"],
    paddingHorizontal: 24,


  },
  logo: {
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 4,
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: THEME.COLORS["GRAY-500"],
    borderRadius: 6,
    color: THEME.COLORS["GRAY-100"],
    borderWidth: 1,
    borderColor: THEME.COLORS["GRAY-700"]
  },
  inputFocus: {
    borderColor: THEME.COLORS.PURPLE_DARK
  },
  button: {
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.BLUE_DARK,
    borderRadius: 6,
  },
})