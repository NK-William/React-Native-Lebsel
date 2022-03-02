import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeFlowNavigation from "./EmployeeFlowNavigation";
import { getDatabase, ref, child, get } from "firebase/database";
import SplashScreen from "../src/screens/SplashScreen";
import AdminFlowNavigation from "./AdminFlowNavigation";

const Stack = createNativeStackNavigator();

const MainFlowNavigation = ({ user }: any) => {
  const [determinePage, setDeterminePage] = useState({
    isAdmin: false,
    pageInitialized: false,
  });

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
            pageInitialized: true,
          });
        } else {
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
  } else if (determinePage.isAdmin) {
    return <AdminFlowNavigation />;
  } else {
    return <EmployeeFlowNavigation />;
  }
};

export default MainFlowNavigation;
