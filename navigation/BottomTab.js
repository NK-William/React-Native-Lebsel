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

function MainHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Tab.Screen name="CheckInAndOuts" component={CheckInAndOutsScreen} />
      <Tab.Screen name="Availability" component={AvailabilityScreen} />
      <Tab.Screen name="TimeSheets" component={TimeSheetsScreen} />
      <Tab.Screen name="UniformRecords" component={UniformRecordsScreen} />
      <Tab.Screen name="Promoters" component={PromotersScreen} />
    </Stack.Navigator>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="MainHome">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="MainHome"
        component={MainHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
