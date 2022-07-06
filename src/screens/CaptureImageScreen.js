import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { AccentColor, PrimaryColor } from "../styles/Colors";

const CaptureImageScreen = ({ addCapturedImage }) => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color={AccentColor}
          animating={true}
        />
        <Text
          style={{ color: { AccentColor }, alignSelf: "center", fontSize: 20 }}
        >
          Loading
        </Text>
      </View>
    );
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
        /* navigation.navigate({
          name: "BottomTabContainer",
          params: { photo: photo },
          merge: true,
        }); */
        addCapturedImage(photo);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo.uri }} />
        {hasMediaLibraryPermission ? (
          <Pressable
            style={{ ...styles.buttonContainer, left: 8 }}
            onPress={savePhoto}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        ) : undefined}
        <Pressable
          style={{ ...styles.buttonContainer, right: 8 }}
          onPress={() => setPhoto(undefined)}
        >
          <Text style={styles.buttonText}>Discard</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <Pressable
        style={{ ...styles.buttonContainer, left: 8 }}
        onPress={takePic}
      >
        <Text style={styles.buttonText}>Capture</Text>
      </Pressable>
      <Pressable
        style={{ ...styles.buttonContainer, right: 8 }}
        onPress={() => addCapturedImage(null)}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      {/* <StatusBar style="auto" /> */}
    </Camera>
  );
};

export default CaptureImageScreen;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  activityIndicator: { alignSelf: "center", marginBottom: 25 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  buttonContainer: {
    position: "absolute",
    backgroundColor: PrimaryColor,
    bottom: 24,
    alignSelf: "center",
    borderRadius: 20,
    padding: 12,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonText: { color: "white" },
});
