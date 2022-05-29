import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LighterPrimaryColor } from "../styles/Colors";

const EmployeeProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}></View>
    </View>
  );
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardView: {
    flex: 1,
    backgroundColor: LighterPrimaryColor,
    margin: 12,
    marginTop: 24,
    borderRadius: 8,
  },
});
