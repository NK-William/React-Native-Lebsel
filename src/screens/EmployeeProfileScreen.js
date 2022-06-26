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

// Add Glassmorphism and line dividers between texts.
const EmployeeProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (route.params?.photo) {
      console.log("Route with" + route.params?.photo);
    }
  }, [route.params?.photo]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.blurImage}
        source={require("../../public/images/pp.jpg")}
        blurRadius={65}
      />
      {/* <View style={styles.cardView}> */}
      <Image
        style={styles.image}
        source={
          route.params?.photo
            ? { uri: "data:image/jpg;base64," + route.params?.photo.base64 }
            : require("../../public/images/pp.jpg")
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
          onPress={() => navigation.navigate("CaptureImage")}
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
          <View style={styles.lineDivider} />
          <Text style={styles.text}>William@gmail.com</Text>
          <View style={styles.lineDivider} />
          <Text style={styles.text}>Centurion, Pretoria, Village Valencia</Text>
          <View style={styles.lineDivider} />
          <View style={styles.lineDivider} />
          {/* Had to duplicate the code since the one above does not show the line divider */}
          <Text style={styles.text}>0712345678</Text>
        </View>
      )}

      {/* </View> */}
    </View>
  );
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
  },
  text: {
    color: PrimaryColor,
    marginBottom: 4,
    fontSize: 16,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  lineDivider: {
    height: 0.5,
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
  },
});
