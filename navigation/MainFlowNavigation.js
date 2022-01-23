import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeFlowNavigation from "./EmployeeFlowNavigation";
import { getDatabase, ref, child, get } from "firebase/database";
import SplashScreen from "../src/screens/SplashScreen";
import AdminFlowNavigation from "./AdminFlowNavigation";

const Stack = createNativeStackNavigator();

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
  }
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
    return <AdminFlowNavigation />;
  } else {
    console.log("is Employee");
    return <EmployeeFlowNavigation />;
  }
};

export default MainFlowNavigation;
