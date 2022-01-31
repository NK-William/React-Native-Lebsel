import React, { useState } from "react";

import { StyleSheet, Text, View, Pressable } from "react-native";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TabOptions } from "../constants/TabOptions";
import EmployeeHomeScreen from "../screens/EmployeeHomeScreen";
import EmployeeProfileScreen from "../screens/EmployeeProfileScreen";
import EmployeeAvailabilityScreen from "../screens/EmployeeAvailabilityScreen";
import EmployeeTimesheetsScreen from "../screens/EmployeeTimesheetsScreen";
import EmployeeSettingsScreen from "../screens/EmployeeSettingsScreen";

const BottomTabContainer = ({ selectedOption }) => {
  const [item, setItem] = useState(TabOptions.Home);
  console.log(selectedOption);
  return (
    <View style={styles.container}>
      {item == TabOptions.Profile ? (
        <EmployeeProfileScreen />
      ) : item == TabOptions.Availability ? (
        <EmployeeAvailabilityScreen />
      ) : item == TabOptions.Timesheets ? (
        <EmployeeTimesheetsScreen />
      ) : item == TabOptions.Settings ? (
        <EmployeeSettingsScreen />
      ) : (
        <EmployeeHomeScreen />
      )}
      <View style={{ backgroundColor: "white" }}>
        <View style={{ ...styles.bottomTab, ...styles.shadow }}>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => setItem(TabOptions.Profile)}
          >
            <Ionicons
              name="person"
              color={item == TabOptions.Profile ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Profile ? AccentColor : "grey",
              }}
            >
              Profile
            </Text>
          </Pressable>

          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => setItem(TabOptions.Availability)}
          >
            <Ionicons
              name="calendar"
              color={item == TabOptions.Availability ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Availability ? AccentColor : "grey",
              }}
            >
              Availability
            </Text>
          </Pressable>
          <View style={{ alignSelf: "flex-start", alignItems: "center" }}>
            <View
              style={{
                ...styles.shadow,
                backgroundColor: PrimaryColor,
                height: 50,
                width: 50,
                borderRadius: 50,
                marginTop: -16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="location" color="white" size={25} />
            </View>
          </View>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => setItem(TabOptions.Timesheets)}
          >
            <Ionicons
              name="time"
              color={item == TabOptions.Timesheets ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Timesheets ? AccentColor : "grey",
              }}
            >
              Timesheets
            </Text>
          </Pressable>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => setItem(TabOptions.Settings)}
          >
            <Ionicons
              name="settings"
              color={item == TabOptions.Settings ? AccentColor : "grey"}
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color: item == TabOptions.Settings ? AccentColor : "grey",
              }}
            >
              Settings
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BottomTabContainer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  bottomTab: {
    backgroundColor: "#F4F1FE",
    marginTop: 16,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 15,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#201C31",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabLabel: { fontSize: 10, alignSelf: "center" },
});
