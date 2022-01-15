import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const primaryColor = "#0DF6E3";

function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="person"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  ...styles.tabLabel,
                }}
              >
                profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="home"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  ...styles.tabLabel,
                }}
              >
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="settings"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  marginLeft: -6,
                  ...styles.tabLabel,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainFlowNavigation = () => {
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

export default MainFlowNavigation;
const styles = StyleSheet.create({
  tabLabel: { fontSize: 10, alignSelf: "center" },
});
