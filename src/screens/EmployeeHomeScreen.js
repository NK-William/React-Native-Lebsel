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
        <View style={styles.bottomTab}></View>
      </View>
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  statusContainer: { flex: 1, backgroundColor: "blue" },
  statusView: { flex: 0.8, backgroundColor: "yellow" },
  bottomTab: { flex: 0.2, backgroundColor: "red" },
});
