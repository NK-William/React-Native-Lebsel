import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { PrimaryColor } from "../styles/Colors";

// current state: https://docs.expo.dev/versions/latest/sdk/location/#configuration (I already installed expo-location)
const CheckInsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //   console.log(location);
      setLocation(location);
    })();
  }, []);

  // let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
    alert(text);
  }
  //  else if (location) {
  //   text = JSON.stringify(location);
  // }

  const mapRegion = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      }
    : null;

  const confirmationAlert = () =>
    Alert.alert("Checking in", "Do you wish to proceed checking in", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Proceed", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {location ? (
          <Marker coordinate={mapRegion} title="Your location" />
        ) : null}
      </MapView>
      <TouchableOpacity
        onPress={() => confirmationAlert()}
        style={styles.checkButton}
      >
        <Text style={styles.checkButtonText}>Check in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckInsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
  checkButton: {
    backgroundColor: PrimaryColor,
    position: "absolute",
    bottom: 8,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
  },
  checkButtonText: {
    color: "white",
    alignSelf: "center",
  },
});
