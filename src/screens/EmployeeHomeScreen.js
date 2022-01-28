import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { homeStyles } from "../styles/HomeStyles";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";
import { TabOptions } from "../constants/TabOptions";

const EmployeeHomeScreen = () => {
  const handleLogoutTest = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

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
        <BottomTab selectedOption={TabOptions.Availability} />
      </View>
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  statusContainer: { flex: 1, backgroundColor: "white" },
  statusView: { flex: 1, borderWidth: 1, borderColor: "blue" },
});
