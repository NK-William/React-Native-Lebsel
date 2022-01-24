import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { homeStyles } from "../styles";

const handleLogoutTest = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
};

const EmployeeHomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.subTopContainer}>
        <Text style={homeStyles.welcomeText}>Welcome</Text>
        <Text style={homeStyles.nameText}>Nkuna</Text>
        <Text style={homeStyles.nameText}>William</Text>
        <Button onPress={handleLogoutTest} title="logout test" />
      </View>
      <View
        style={{
          ...homeStyles.subBottomContainer,
          ...styles.statusContainer,
        }}
      >
        <View style={styles.statusView}></View>
        <View style={{ ...styles.bottomTab, ...styles.shadow }}>
          <View>
            <Text>P</Text>
          </View>
          <View>
            <Text>A</Text>
          </View>
          <View style={{ alignSelf: "flex-start" }}>
            <Text>C</Text>
          </View>
          <View>
            <Text>T</Text>
          </View>
          <View>
            <Text>S</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  statusContainer: { flex: 1, backgroundColor: "white" },
  statusView: { flex: 0.85, borderWidth: 1, borderColor: "blue" },
  bottomTab: {
    backgroundColor: "#F4F1FE",
    marginTop: 8,
    marginHorizontal: 8,
    marginBottom: 8,
    flex: 0.15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#201C31",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
