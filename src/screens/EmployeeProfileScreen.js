import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { LighterPrimaryColor, PrimaryColor } from "../styles/Colors";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

// Add Glassmorphism and line dividers between texts.
const EmployeeProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Image
          style={styles.image}
          source={require("../../public/images/pp.jpg")}
        />
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity style={styles.floatingButton}>
            <FontAwesome5 name="pen" size={24} color={PrimaryColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <FontAwesome name="camera" size={24} color={PrimaryColor} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: PrimaryColor,
            marginBottom: 8,
            marginTop: 4,
            fontSize: 20,
            marginHorizontal: 20,
            fontWeight: "bold",
          }}
        >
          William Nkuna
        </Text>
        <Text
          style={{
            color: PrimaryColor,
            marginBottom: 4,
            fontSize: 16,
            marginHorizontal: 20,
          }}
        >
          William@gmail.com
        </Text>
        <Text
          style={{
            color: PrimaryColor,
            marginBottom: 4,
            fontSize: 16,
            marginHorizontal: 20,
          }}
        >
          Centurion, Pretoria, Village Valencia
        </Text>
        <Text
          style={{
            color: PrimaryColor,
            marginBottom: 4,
            fontSize: 16,
            marginHorizontal: 20,
          }}
        >
          0712345678
        </Text>
      </View>
    </View>
  );
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardView: {
    flex: 1,
    backgroundColor: LighterPrimaryColor,
    margin: 12,
    marginTop: 24,
    borderRadius: 8,
  },
  image: {
    marginTop: 40,
    alignSelf: "center",
    width: 300,
    borderRadius: 8,
    height: 300,
  },
  floatingButtonContainer: {
    marginTop: 8,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  floatingButton: {
    marginRight: 18,
  },
});
