import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LighterPrimaryColor, PrimaryColor } from "../styles/Colors";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import * as ImagePicker from "expo-image-picker";
import CaptureImageScreen from "./CaptureImageScreen";
import ImagePickerOrTakePhotoPopUp from "../components/ImagePickerOrTakePhotoPopUp";

// Add Glassmorphism and line dividers between texts.
const EmployeeProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState();

  const [capturing, Setcapturing] = useState(false);
  const [photoPopUpVisible, setPhotoPopUpVisible] = useState(false);

  /*  useEffect(() => {
    setImage(photo);
  }, [photo]); */

  const pickImage = async () => {
    setPhotoPopUpVisible(false);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Picked image: " + result);
    if (!result.cancelled) {
      setImage(result);
    }
  };

  const addCapturedImage = (captureImage) => {
    if (!captureImage && !image) setImage(null);
    else if (!captureImage && image) setImage(image);
    else setImage(captureImage);

    Setcapturing(false);
  };

  const captureImage = () => {
    setPhotoPopUpVisible(false);
    Setcapturing(true);
  };

  if (capturing) {
    return <CaptureImageScreen addCapturedImage={addCapturedImage} />;
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={styles.blurImage}
          source={
            image ? { uri: image.uri } : require("../../public/images/pp.jpg")
          }
          blurRadius={65}
        />
        {/* <View style={styles.cardView}> */}
        <Image
          style={styles.image}
          source={
            image ? { uri: image.uri } : require("../../public/images/pp.jpg")
          }
        />
        <View style={styles.floatingButtonContainer}>
          {isEdit ? (
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => setIsEdit(false)}
            >
              <FontAwesome5 name="save" size={24} color={PrimaryColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => setIsEdit(true)}
            >
              <FontAwesome5 name="pen" size={24} color={PrimaryColor} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => setPhotoPopUpVisible(true)}
          >
            <FontAwesome name="camera" size={24} color={PrimaryColor} />
          </TouchableOpacity>
        </View>
        {isEdit ? (
          <View>
            <TextInput
              style={styles.textInput}
              textAlign={"center"}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.textInput}
              textAlign={"center"}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.textInput}
              textAlign={"center"}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.textInput}
              textAlign={"center"}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        ) : (
          <View>
            <Text style={{ ...styles.text, fontSize: 20, fontWeight: "bold" }}>
              William Nkuna
            </Text>
            {/* <View style={styles.lineDivider} /> */}
            <Text style={styles.text}>William@gmail.com</Text>
            <Text style={styles.text}>
              Centurion, Pretoria, Village Valencia
            </Text>
            <Text style={styles.text}>0712345678</Text>
          </View>
        )}

        {/* </View> */}
        <ImagePickerOrTakePhotoPopUp
          photoPopUpVisible={photoPopUpVisible}
          hidePhotoPopUp={() => setPhotoPopUpVisible(false)}
          captureImage={captureImage}
          pickImage={pickImage}
        />
      </View>
    );
  }
};

export default EmployeeProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  /*cardView: {
    flex: 1,
    backgroundColor: `${LighterPrimaryColor}00`,
    margin: 12,
    marginTop: 24,
    borderRadius: 8,
  },*/
  blurImage: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  text: {
    color: PrimaryColor,
    marginBottom: 8,
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf: "center",
    borderRadius: 50,
    backgroundColor: LighterPrimaryColor,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  lineDivider: {
    height: 0.0,
    alignSelf: "center",
    width: 180,
    backgroundColor: "white",
    margin: 2,
  },
  image: {
    marginTop: 40,
    alignSelf: "center",
    width: 300,
    borderRadius: 150,
    height: 300,
  },

  floatingButtonContainer: {
    marginTop: 8,
    alignSelf: "flex-end",
    height: 26,
    flexDirection: "row",
  },
  floatingButton: {
    marginRight: 18,
  },
  textInput: {
    borderColor: PrimaryColor,
    borderWidth: 1,
    color: PrimaryColor,
    alignItems: "center",
    padding: 4,
    marginTop: 8,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: LighterPrimaryColor,
  },
});
