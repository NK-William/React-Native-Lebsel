import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { homeStyles } from "../styles/HomeStyles";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import BottomTabContainer from "../components/BottomTabContainer";
import { TabOptions } from "../constants/TabOptions";
import EmployeeTimesheetsScreen from "./EmployeeTimesheetsScreen";

const EmployeeHomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.subTopContainer}>
        <Text style={homeStyles.welcomeText}>Welcome</Text>
        <Text style={homeStyles.nameText}>Nkuna</Text>
        <Text style={homeStyles.nameText}>William</Text>
      </View>
      <View
        style={{
          ...homeStyles.subBottomContainer,
        }}
      >
        <View style={styles.statusView}></View>
      </View>
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  statusContainer: { flex: 1, backgroundColor: "white" },
  statusView: { flex: 1, borderWidth: 1, borderColor: "blue" },
});
