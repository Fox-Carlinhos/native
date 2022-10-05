import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 250,
    paddingLeft: 33,
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 24,
    width: 250,
  },
  subtitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 18,
    width: 315,
  },
  content: {
    marginTop: -20,
    zIndex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    borderColor: "#E6E6E6",
    marginBottom: 30,
  },
  input: {
    marginLeft: 15,
    fontSize: 16,
    color: THEME.COLORS.TEXT,
  },
  contentTitle: {
    fontSize: 15,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: "#333333",
    marginBottom: 10,
  },
  flatList: {
    marginBottom: 100,
  },
  contentList: {},
  reguede: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
