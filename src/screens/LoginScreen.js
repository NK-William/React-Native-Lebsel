import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Text } from "react-native-elements";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={styles.safeAreaContainer}
      forceInset={{ top: "always" }}
    >
      <View style={styles.container}>
        <View style={styles.top_space}></View>
        <View style={styles.sub_container}>
          <Text style={styles.headerText} h1>
            Login
          </Text>
          <Text style={styles.text}>Please sign in to continue</Text>
          <Text style={styles.emailText}>EMAIL</Text>
          <TextInput style={styles.textInput} textAlign={"center"} />
          <Text style={styles.passwordText}>PASSWORD</Text>
          <TextInput style={styles.textInput} textAlign={"center"} />
          <Button
            style={styles.submitButton}
            title="LOGIN"
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerText: { color: "white" },
  text: { color: "#615E67", marginTop: 8, fontSize: 15 },
  emailText: {
    marginTop: 50,
    marginLeft: 8,
    marginBottom: 8,
    color: "#615E67",
    fontSize: 12,
  },
  passwordText: {
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 8,
    color: "#615E67",
    fontSize: 12,
  },
  textInput: {
    borderColor: "#0DF6E3",
    borderWidth: 1,
    color: "white",
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
  },
  submitButton: {
    backgroundColor: "#0DF6E3",
    // height: 60,
    // width: 200,
    // marginTop: 50,
    // borderRadius: 50,
  },
  safeAreaContainer: { flex: 1 },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#201C31",
  },
  top_space: {
    flex: 0.1,
  },
  sub_container: {
    flex: 0.9,
  },
});
