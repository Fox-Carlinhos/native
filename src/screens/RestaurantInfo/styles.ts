import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    height: 150,
    width: "100%",
  },
  backButton: {
    marginTop: 52,
    marginLeft: 39,
  },
  logoWrapper: {
    alignItems: "center",
    marginTop: "-20%",
  },
  logoSecondBorder: {
    borderRadius: 99,
    borderWidth: 4,
    borderColor: "#000",
  },
  logo: {
    width: 119,
    height: 119,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  contentContainer: {
    marginTop: -30,
    zIndex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 15,
    justifyContent: "flex-start",
  },
  wrapper: {
    marginBottom: 30,
  },
  name: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
  },
  title: {
    fontSize: 15,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 3,
    color: THEME.COLORS.TEXT,
  },
  textContent: {
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  line: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
});
