import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeHomeScreen from "../src/screens/EmployeeHomeScreen";
import EmployeeProfileScreen from "../src/screens/EmployeeProfileScreen";
import EmployeeAvailabilityScreen from "../src/screens/EmployeeAvailabilityScreen";
import EmployeeCheckInsScreen from "../src/screens/EmployeeCheckInsScreen";
import EmployeeTimesheetsScreen from "../src/screens/EmployeeTimesheetsScreen";
import EmployeeSettingsScreen from "../src/screens/EmployeeSettingsScreen";
import BottomTabContainer from "../src/components/BottomTabContainer";
import CheckInsScreen from "../src/components/BottomTabContainer";

const Stack = createNativeStackNavigator();

const EmployeeFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabContainer">
      <Stack.Screen
        name="BottomTabContainer"
        component={BottomTabContainer}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
          title: "Home",
        }}
      />
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfileScreen}
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="EmployeeAvailability"
        component={EmployeeAvailabilityScreen}
        options={{
          title: "Availability",
        }}
      />
      <Stack.Screen
        name="EmployeeCheckIns"
        component={EmployeeCheckInsScreen}
        options={{
          title: "Check ins",
        }}
      />
      <Stack.Screen
        name="EmployeeTimesheets"
        component={EmployeeTimesheetsScreen}
        options={{
          title: "Timesheets",
        }}
      />
      <Stack.Screen
        name="EmployeeSettings"
        component={EmployeeSettingsScreen}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="CheckIns"
        component={CheckInsScreen}
        options={{
          title: "Check-ins ",
        }}
      />
    </Stack.Navigator>
  );
};

export default EmployeeFlowNavigation;

const styles = StyleSheet.create({});
