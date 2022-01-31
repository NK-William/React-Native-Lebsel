import { StyleSheet, Text, View } from "react-native";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TabOptions } from "../constants/TabOptions";
import EmployeeHomeScreen from "../screens/EmployeeHomeScreen";

const BottomTabContainer = ({ selectedOption }) => {
  console.log(selectedOption);
  return (
    <View style={styles.container}>
      <EmployeeHomeScreen />
      <View style={{ backgroundColor: "white" }}>
        <View style={{ ...styles.bottomTab, ...styles.shadow }}>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="person"
              color={
                selectedOption == TabOptions.Profile ? AccentColor : "grey"
              }
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color:
                  selectedOption == TabOptions.Profile ? AccentColor : "grey",
              }}
            >
              Profile
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="person"
              color={
                selectedOption == TabOptions.Availability ? AccentColor : "grey"
              }
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color:
                  selectedOption == TabOptions.Availability
                    ? AccentColor
                    : "grey",
              }}
            >
              Availability
            </Text>
          </View>
          <View style={{ alignSelf: "flex-start", alignItems: "center" }}>
            <View
              style={{
                ...styles.shadow,
                backgroundColor: PrimaryColor,
                height: 50,
                width: 50,
                borderRadius: 50,
                marginTop: -16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="location" color="white" size={25} />
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="time"
              color={
                selectedOption == TabOptions.Timesheets ? AccentColor : "grey"
              }
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color:
                  selectedOption == TabOptions.Timesheets
                    ? AccentColor
                    : "grey",
              }}
            >
              Timesheets
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="settings"
              color={
                selectedOption == TabOptions.Settings ? AccentColor : "grey"
              }
              size={25}
            />
            <Text
              style={{
                ...styles.tabLabel,
                color:
                  selectedOption == TabOptions.Settings ? AccentColor : "grey",
              }}
            >
              Settings
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomTabContainer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  bottomTab: {
    backgroundColor: "#F4F1FE",
    marginTop: 16,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 15,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#201C31",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabLabel: { fontSize: 10, alignSelf: "center" },
});
