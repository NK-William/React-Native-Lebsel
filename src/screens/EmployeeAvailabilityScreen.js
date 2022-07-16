import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { PrimaryColor, AccentColor } from "../styles/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import DayBubble from "../components/DayBubble";

const EmployeeAvailabilityScreen = () => {
  const [radioButtons, setRadioButtons] = useState({
    mondayWeekly: false,
    tuesdayWeekly: false,
    wednesdayWeekly: false,
    thursdayWeekly: false,
    fridayWeekly: false,
    saturdayWeekly: false,
    sundayWeekly: false,
  });

  const mondayRadioBtnName = radioButtons.mondayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const tuesdayRadioBtnName = radioButtons.tuesdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const wednesdayRadioBtnName = radioButtons.wednesdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const thursdayRadioBtnName = radioButtons.thursdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const fridayRadioBtnName = radioButtons.fridayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const saturdayRadioBtnName = radioButtons.saturdayWeekly
    ? "radio-button-on"
    : "radio-button-off";
  const sundayRadioBtnName = radioButtons.sundayWeekly
    ? "radio-button-on"
    : "radio-button-off";

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Choose your availability</Text>
      <View style={styles.gridView}>
        <View style={styles.gridRowView}>
          <DayBubble
            bubbleRightColor="yellow"
            day="Moondayy"
            dayRadioBtnName={mondayRadioBtnName}
            setRadioButtons={() =>
              setRadioButtons({
                ...radioButtons,
                mondayWeekly: !radioButtons.mondayWeekly,
              })
            }
          />

          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "pink"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Tuesday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    tuesdayWeekly: !radioButtons.tuesdayWeekly,
                  })
                }
              >
                <Ionicons
                  name={tuesdayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.gridRowView}>
          <LinearGradient
            style={{ ...styles.dayBubble, marginRight: 8 }}
            colors={[PrimaryColor, "green"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Wednesday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    wednesdayWeekly: !radioButtons.wednesdayWeekly,
                  })
                }
              >
                <Ionicons
                  name={wednesdayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "orange"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Thursday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    thursdayWeekly: !radioButtons.thursdayWeekly,
                  })
                }
              >
                <Ionicons
                  name={thursdayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.gridRowView}>
          <LinearGradient
            style={{ ...styles.dayBubble, marginRight: 8 }}
            colors={[PrimaryColor, "blue"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Friday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    fridayWeekly: !radioButtons.fridayWeekly,
                  })
                }
              >
                <Ionicons
                  name={fridayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "purple"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Saturday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    saturdayWeekly: !radioButtons.saturdayWeekly,
                  })
                }
              >
                <Ionicons
                  name={saturdayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.gridRowView}>
          <LinearGradient
            style={{ ...styles.dayBubble, marginBottom: 18 }}
            colors={[PrimaryColor, "red"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Sunday</Text>
            <View style={styles.weeklySelectView}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <TouchableOpacity
                onPress={() =>
                  setRadioButtons({
                    ...radioButtons,
                    sundayWeekly: !radioButtons.sundayWeekly,
                  })
                }
              >
                <Ionicons
                  name={sundayRadioBtnName}
                  size={16}
                  color={AccentColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default EmployeeAvailabilityScreen;

const styles = StyleSheet.create({
  titleText: {
    alignSelf: "center",
    color: PrimaryColor,
    fontWeight: "bold",
    margin: 8,
    fontSize: 16,
  },
  dayText: { color: "white", fontSize: 18 },
  container: { flex: 1 },
  gridRowView: {
    flexDirection: "row",
    marginVertical: 8,
  },
  weeklySelectView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    marginBottom: 4,
  },
  weeklyText: {
    color: "white",
    fontSize: 10,
    marginRight: 2,
  },
  radioButton: {},
  gridView: {
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  dayBubble: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 150,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
