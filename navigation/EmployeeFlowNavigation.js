import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeHomeScreen from "../src/screens/EmployeeHomeScreen";
import EmployeeProfileScreen from "../src/screens/EmployeeProfileScreen";
import EmployeeAvailabilityScreen from "../src/screens/EmployeeAvailabilityScreen";
import EmployeeCheckInsScreen from "../src/screens/EmployeeCheckInsScreen";
import EmployeeTimesheetsScreen from "../src/screens/EmployeeTimesheetsScreen";
import EmployeeSettingsScreen from "../src/screens/EmployeeSettingsScreen";

const Stack = createNativeStackNavigator();

const EmployeeFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={EmployeeHomeScreen} />
      <Stack.Screen name="Profile" component={EmployeeProfileScreen} />
      <Stack.Screen
        name="Availability"
        component={EmployeeAvailabilityScreen}
      />
      <Stack.Screen name="Check ins" component={EmployeeCheckInsScreen} />
      <Stack.Screen name="Timesheets" component={EmployeeTimesheetsScreen} />
      <Stack.Screen name="Settings" component={EmployeeSettingsScreen} />
    </Stack.Navigator>
  );
};

export default EmployeeFlowNavigation;

const styles = StyleSheet.create({});
