import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../src/screens/SettingsScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import AdminHomeScreen from "../src/screens/AdminHomeScreen";
import CheckInAndOutsScreen from "../src/screens/CheckInAndOutsScreen";
import AvailabilityScreen from "../src/screens/AvailabilityScreen";
import TimeSheetsScreen from "../src/screens/TimeSheetsScreen";
import UniformRecordsScreen from "../src/screens/UniformRecordsScreen";
import PromotersScreen from "../src/screens/PromotersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import EmployeeFlowNavigation from "./EmployeeFlowNavigation";
import { getDatabase, ref, child, get } from "firebase/database";
import SplashScreen from "../src/screens/SplashScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const primaryColor = "#0DF6E3";

function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="AdminHome"
      tabBarOptions={{ showLabel: false }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="person"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  ...styles.tabLabel,
                }}
              >
                profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdminHome"
        component={AdminHomeScreen}
        options={{
          headerStyle: { backgroundColor: "#201C31" },
          headerTitleStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="home"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  ...styles.tabLabel,
                }}
              >
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="settings"
                color={focused ? primaryColor : "grey"}
                size={25}
              />
              <Text
                style={{
                  color: focused ? primaryColor : "grey",
                  marginLeft: -6,
                  ...styles.tabLabel,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainFlowNavigation = ({ user }) => {
  const [determinePage, setDeterminePage] = useState({
    isAdmin: false,
    pageInitialized: false,
  });

  if (!determinePage.pageInitialized) {
    console.log("Not initialized");
    const dbRef = ref(getDatabase());
    console.log(user.uid);
    get(child(dbRef, `users/admins/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("result is");
          console.log(snapshot.val());
          console.log("Ow true *********************");
          setDeterminePage({
            ...determinePage,
            isAdmin: true,
            pageInitialized: true,
          });
        } else {
          console.log("Ow false *********************");
          setDeterminePage({
            ...determinePage,
            isAdmin: false,
            pageInitialized: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!!");
      });
  } else {
    console.log("inititialized");
  }

  // const a = await get(reference, (snapshot) => {
  //   const highscore = snapshot;
  //   console.log("New high score: " + highscore);
  // });
  console.log("to return");
  if (!determinePage.isAdmin && !determinePage.pageInitialized) {
    console.log("is Splash");
    return (
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else if (determinePage.isAdmin) {
    console.log("is Admin");
    return (
      <Stack.Navigator initialRouteName="test">
        <Stack.Screen name="test" component={AdminHomeScreen} />
      </Stack.Navigator>
    );
  } else {
    console.log("is Employee");
    return <EmployeeFlowNavigation />;
  }
  // return (
  //   /* <Stack.Navigator initialRouteName="BottomTabNav">
  //     <Stack.Screen
  //       name="BottomTabNav"
  //       component={BottomTabNav}
  //       options={{ headerShown: false }}
  //     />

  //     <Stack.Screen name="Check in and outs" component={CheckInAndOutsScreen} />
  //     <Stack.Screen name="Availability" component={AvailabilityScreen} />
  //     <Stack.Screen name="Timesheets" component={TimeSheetsScreen} />
  //     <Stack.Screen name="Uniform records" component={UniformRecordsScreen} />
  //     <Stack.Screen name="Promoters" component={PromotersScreen} />
  //   </Stack.Navigator> */
  // );
};

export default MainFlowNavigation;
const styles = StyleSheet.create({
  tabLabel: { fontSize: 10, alignSelf: "center" },
});
