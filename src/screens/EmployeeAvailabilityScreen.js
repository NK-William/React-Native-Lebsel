import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryColor } from "../styles/Colors";
import { LinearGradient } from "expo-linear-gradient";

const EmployeeAvailabilityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Choose your availability</Text>
      <View style={styles.gridView}>
        <View style={styles.gridRowView}>
          <LinearGradient
            style={{ ...styles.dayBubble, marginRight: 8 }}
            colors={[PrimaryColor, "yellow"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Monday</Text>
          </LinearGradient>
          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "pink"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Tuesday</Text>
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
          </LinearGradient>
          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "orange"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Thursday</Text>
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
          </LinearGradient>
          <LinearGradient
            style={{ ...styles.dayBubble, marginLeft: 8 }}
            colors={[PrimaryColor, "purple"]}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.dayText}>Saturday</Text>
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
