import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    gap: 16,
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    color: THEME.COLORS["GRAY-300"],
    lineHeight: 20,
  },
  bold: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  regular: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
})