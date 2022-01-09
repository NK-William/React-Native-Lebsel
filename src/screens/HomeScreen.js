import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const handleLogoutTest = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button onPress={handleLogoutTest} title="logout test" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
