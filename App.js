import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase-config";
import MainFlowNavigation from "./navigation/MainFlowNavigation";
import AuthenticationFlowNavigation from "./navigation/AuthenticationFlowNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  console.log(user);
  // the following method behaves like a useEffect hook method
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <NavigationContainer>
      {user ? <MainFlowNavigation /> : <AuthenticationFlowNavigation />}
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
