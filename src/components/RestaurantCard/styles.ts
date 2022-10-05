import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    height: 160,
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 8,
    overflow: "hidden",
    padding: 10,
  },
  footer: {
    width: "100%",
    height: 102,
    padding: 16,
    justifyContent: "flex-end",
  },
  name: {
    color: THEME.COLORS.WHITE,
    fontSize: 12,
  },
});
