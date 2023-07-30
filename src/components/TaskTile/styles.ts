import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: THEME.COLORS["GRAY-500"],
    borderColor: THEME.COLORS["GRAY-400"],
    borderRadius: 4,
    marginBottom: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

  },
  taskChecked: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  check: {
    borderRadius: 999,
    borderColor: THEME.COLORS.BLUE,
    backgroundColor: THEME.COLORS.PURPLE,
    padding: 2, 
  },
  task: {
    flex: 1,
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS["GRAY-100"],
    lineHeight: 20,

  },
  trash: {
    width: 32,
    height: 32,
  },
})