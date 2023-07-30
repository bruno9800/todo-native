import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  tag: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 14,
  },
  infoBox: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: THEME.COLORS["GRAY-400"],
    borderRadius: 999,
  },
  infoValue: {
    fontSize: 12,
    color: THEME.COLORS["GRAY-200"],
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  tagPrimary: {
    color: THEME.COLORS.BLUE
  },
  tagSecundary: {
    color: THEME.COLORS.PURPLE
  },

})