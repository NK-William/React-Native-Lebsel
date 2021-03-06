import { StyleSheet } from "react-native";
import { PrimaryColor } from "./Colors";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  subTopContainer: {
    flex: 0.3,
    backgroundColor: PrimaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#0DF6E3",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  nameText: { color: "white", fontSize: 16 },
  subBottomContainer: {
    flex: 0.7,
    paddingTop: 30,
    paddingBottom: 8,
    backgroundColor: "white",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
});
