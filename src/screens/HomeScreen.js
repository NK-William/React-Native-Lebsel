import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Pressable,
} from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import Carousel from "react-native-snap-carousel";

let FirstItem = 3;
// FirstItem = 20;  // <----- UNCOMMENT THIS

const SliderWidth = Dimensions.get("screen").width;
const ItemWidth = 250.0;
const ItemHeight = 400.0;

const NumItems = 5;
const Items = [];
for (var i = 0; i < NumItems; i++) {
  Items.push(i);
}

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log(item)}>
        <View
          style={{
            width: ItemWidth,
            height: ItemHeight,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white", fontSize: 40 }}>{item}</Text>
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
      <Button onPress={handleLogoutTest} title="logout test" />
      <Carousel
        layout={"stack"}
        data={Items}
        firstItem={FirstItem}
        itemWidth={ItemWidth}
        sliderWidth={SliderWidth}
        activeSlideAlignment="center"
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
