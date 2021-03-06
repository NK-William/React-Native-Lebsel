import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/AdminHomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase-config";
import MainFlowNavigation from "./navigation/MainFlowNavigation";
import AuthenticationFlowNavigation from "./navigation/AuthenticationFlowNavigation";
import { Provider as PromoterProvider } from "./src/context/PromoterContext";

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
        <PromoterProvider>
          <MainFlowNavigation user={user} />
        </PromoterProvider>
      ) : (
        <AuthenticationFlowNavigation />
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
