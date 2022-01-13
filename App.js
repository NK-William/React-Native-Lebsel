import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase-config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  // the following method behaves like a useEffect hook method
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: "#201C31" },
              headerTitleStyle: { color: "white" },
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "",
              headerStyle: { backgroundColor: "#201C31" },
              headerTintColor: "#615E67",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
