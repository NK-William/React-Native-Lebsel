import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import Carousel from "react-native-snap-carousel";

let FirstItem = 3;
// FirstItem = 20;  // <----- UNCOMMENT THIS

const SliderWidth = Dimensions.get("screen").width;
const ItemWidth = 200.0;
const ItemHeight = 300.0;

const NumItems = 5;
const Items = [];
for (var i = 1; i <= NumItems; i++) {
  Items.push(i);
}

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          console.log(item);
          navigation.navigate("Availability");
        }}
      >
        <View style={styles.carouselItemView}>
          <Image
            source={require("../../assets/availability.jpg")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Text style={{ color: "#0DF6E3", fontSize: 40 }}>{item}</Text>
        </View>
      </Pressable>
    );
  };

  const handleLogoutTest = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subTopContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.nameText}>Nkuna</Text>
        <Text style={styles.nameText}>William</Text>
        {/* <Button onPress={handleLogoutTest} title="logout test" /> */}
      </View>
      <View style={styles.subBottomContainer}>
        <Carousel
          layout={"default"}
          data={Items}
          firstItem={FirstItem}
          itemWidth={ItemWidth}
          sliderWidth={SliderWidth}
          activeSlideAlignment="center"
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201C31",
  },
  subTopContainer: {
    flex: 0.3,
    backgroundColor: "#201C31",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#0DF6E3",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  nameText: { color: "white", fontSize: 16 },
  subBottomContainer: {
    flex: 0.7,
    paddingTop: 30,
    paddingBottom: 8,
    backgroundColor: "white",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  carouselItemView: {
    width: ItemWidth,
    height: ItemHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0DF6E3",
  },
});
