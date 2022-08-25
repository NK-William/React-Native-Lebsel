import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeFlowNavigation from "./EmployeeFlowNavigation";
import { getDatabase, ref, child, get } from "firebase/database";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import SplashScreen from "../src/screens/SplashScreen";
import EnterInAppErrorScreen from "../src/screens/EnterInAppErrorScreen";
import AdminFlowNavigation from "./AdminFlowNavigation";

const Stack = createNativeStackNavigator();

const MainFlowNavigation = ({ user }) => {
  const [determinePage, setDeterminePage] = useState({
    isAdmin: false,
    isEmployee: false,
    pageInitialized: false,
    isError: false,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (!determinePage.pageInitialized) {
        console.log("get database");
        const dbRef = ref(getDatabase());
        console.log("Query");
        get(child(dbRef, `users/admins/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              setDeterminePage({
                ...determinePage,
                isAdmin: true,
                isEmployee: false,
                pageInitialized: true,
                isError: false,
              });
            } else {
              setDeterminePage({
                ...determinePage,
                isAdmin: false,
                isEmployee: true,
                pageInitialized: true,
                isError: false,
              });
            }
          })
          .catch((error) => {
            console.error("********************************* ", error);
            //alert("Opps...Something went wrong!");
            setDeterminePage({
              ...determinePage,
              isAdmin: false,
              isEmployee: false,
              pageInitialized: true,
              isError: true,
            });
          });
      }
    })();
  }, [determinePage]);

  if (!determinePage.isAdmin && !determinePage.pageInitialized) {
    return (
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else if (determinePage.isInitialized && determinePage.isError) {
    console.log("******************************** in error statement");
  } else if (determinePage.isAdmin) {
    console.log("****************** admin pages");
    return <AdminFlowNavigation />;
  } else if (determinePage.isEmployee) {
    console.log("****************** employee pages");
    return <EmployeeFlowNavigation />;
  } else {
    // display error page
    console.log("****************** error page");
    return <EnterInAppErrorScreen />;
  }
};

export default MainFlowNavigation;
