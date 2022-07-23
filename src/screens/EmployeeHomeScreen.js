import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import { homeStyles } from "../styles/HomeStyles";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import BottomTabContainer from "../components/BottomTabContainer";
import { TabOptions } from "../constants/TabOptions";
import EmployeeTimesheetsScreen from "./EmployeeTimesheetsScreen";
import { Context as PromoterContext } from "../context/PromoterContext";

const EmployeeHomeScreen = () => {
  const { state, getPromoters } = useContext(PromoterContext);
  console.log("**********************4444444444");
  useEffect(() => getPromoters(), []);
  console.log(state);
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.subTopContainer}>
        <Text style={homeStyles.welcomeText}>Welcome</Text>
        <Text style={homeStyles.nameText}>{state.surname}</Text>
        <Text style={homeStyles.nameText}>{state.name}</Text>
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
