import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const handleLogoutTest = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
};

const EmployeeHomeScreen = () => {
  return (
    <View styles={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Employee home</Text>
      <Button onPress={handleLogoutTest} title="logout test" />
    </View>
  );
};

export default EmployeeHomeScreen;

const styles = StyleSheet.create({});
