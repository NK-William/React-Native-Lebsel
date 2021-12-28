import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <View style={styles.top_sub_container}></View>
      <View style={styles.middle_sub_container}></View>
      <View style={styles.bottom_sub_container}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "green",
    backgroundColor: "#1F1A30",
    borderWidth: 5,
  },
  top_sub_container: {
    flex: 0.1,
    borderColor: "yellow",
    borderWidth: 5,
  },
  middle_sub_container: {
    flex: 0.2,
    borderColor: "red",
    borderWidth: 5,
  },
  bottom_sub_container: {
    flex: 0.7,
    borderColor: "blue",
    borderWidth: 5,
  },
});
