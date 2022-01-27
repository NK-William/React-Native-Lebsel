import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { homeStyles } from "../styles/HomeStyles";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";

const handleLogoutTest = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
};

const EmployeeHomeScreen = () => {
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
        <View style={{ ...styles.bottomTab, ...styles.shadow }}>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="person" color={AccentColor} size={25} />
            <Text style={{ ...styles.tabLabel, color: AccentColor }}>
              Profile
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="person" color="grey" size={25} />
            <Text style={styles.tabLabel}>Availability</Text>
          </View>
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
          <View style={{ alignItems: "center" }}>
            <Ionicons name="time" color="grey" size={25} />
            <Text style={styles.tabLabel}>Timesheets</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="settings" color="grey" size={25} />
            <Text style={styles.tabLabel}>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({
  statusContainer: { flex: 1, backgroundColor: "white" },
  statusView: { flex: 1, borderWidth: 1, borderColor: "blue" },
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
