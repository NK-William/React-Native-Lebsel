import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-elements";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (loading) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoading(false);
        if (!user) {
          alert("Something went wrong. Please try again");
        }
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    }
  }, [loading]);

  const handleSignUp = async () => {
    // perform some input validation before showing a loader
    setLoading(true); // only reach to this setter hook method only if all the input fields are valid

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log("Registered with:", user.email);
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headerText} h1>
          Create Account
        </Text>
        <Text style={styles.text}>Please fill all the fields to sign up</Text>
        <Text style={styles.topHintText}>NAME</Text>
        <TextInput
          style={styles.textInput}
          textAlign={"center"}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.hintText}>SURNAME</Text>
        <TextInput
          style={styles.textInput}
          textAlign={"center"}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.hintText}>EMAIL</Text>
        <TextInput
          style={styles.textInput}
          textAlign={"center"}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.hintText}>PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          textAlign={"center"}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.hintText}>RE-ENTER PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          textAlign={"center"}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator
            style={{ alignSelf: "center", marginTop: 25 }}
            size="large"
            color="#0DF6E3"
            animating={true}
          />
        ) : (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              handleSignUp();
            }}
          >
            <Text style={styles.SubmitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        )}
        <View style={styles.bottom_container}>
          <View style={styles.signUpLinkContainer}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}
            >
              <Text style={styles.linkText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>testing</Text>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingRight: 12,
    backgroundColor: "#201C31",
  },
  scrollView: {
    paddingRight: 12,
  },
  headerText: { color: "white" },
  text: { color: "#615E67", marginTop: 16, fontSize: 15 },
  topHintText: {
    marginTop: 50,
    marginLeft: 8,
    marginBottom: 8,
    color: "#615E67",
    fontSize: 12,
  },
  hintText: {
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
    height: 60,
    width: 200,
    marginTop: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  SubmitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#201C31",
  },
  bottom_container: {
    flex: 0.1,
  },
  signUpLinkContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    color: "#0DF6E3",
    marginTop: 16,
    fontSize: 15,
    alignSelf: "center",
  },
});
