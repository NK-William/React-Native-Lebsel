import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeHomeScreen from "../src/screens/EmployeeHomeScreen";

const Stack = createNativeStackNavigator();

const EmployeeFlowNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="EmployeeHome">
      {/* <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen name="EmployeeHome" component={EmployeeHomeScreen} />
    </Stack.Navigator>
  );
};

export default EmployeeFlowNavigation;

const styles = StyleSheet.create({});
