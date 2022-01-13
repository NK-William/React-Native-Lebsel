import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../src/screens/SettingsScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import HomeScreen from "../src/screens/HomeScreen";
import CheckInAndOutsScreen from "../src/screens/CheckInAndOutsScreen";
import AvailabilityScreen from "../src/screens/AvailabilityScreen";
import TimeSheetsScreen from "../src/screens/TimeSheetsScreen";
import UniformRecordsScreen from "../src/screens/UniformRecordsScreen";
import PromotersScreen from "../src/screens/PromotersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const BottomTab = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="CheckInAndOuts" component={CheckInAndOutsScreen} />
      <Stack.Screen name="Availability" component={AvailabilityScreen} />
      <Stack.Screen name="TimeSheets" component={TimeSheetsScreen} />
      <Stack.Screen name="UniformRecords" component={UniformRecordsScreen} />
      <Stack.Screen name="Promoters" component={PromotersScreen} />
    </Stack.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
