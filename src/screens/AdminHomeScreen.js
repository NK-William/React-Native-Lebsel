import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "../components/CarouselCard";
import { homeStyles } from "../styles/HomeStyles";

let FirstItem = 3;

const SliderWidth = Dimensions.get("screen").width;
const ItemWidth = 200.0;
const ItemHeight = 300.0;

const NumItems = 5;
const Items = [];
for (var i = 1; i <= NumItems; i++) {
  Items.push(i);
}

const AdminHomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    switch (item) {
      case 1:
        return (
          <CarouselCard
            item={item}
            onPress={() => {
              console.log(item);
              navigation.navigate("Availability");
            }}
            carouselViewItemText="Availability"
          />
        );
      case 2:
        return (
          <CarouselCard
            item={item}
            onPress={() => {
              console.log(item);
              navigation.navigate("Promoters");
            }}
            carouselViewItemText="Promoters"
          />
        );
      case 3:
        return (
          <CarouselCard
            item={item}
            onPress={() => {
              console.log(item);
              navigation.navigate("Check in and outs");
            }}
            carouselViewItemText="Check Ins"
          />
        );
      case 4:
        return (
          <CarouselCard
            item={item}
            onPress={() => {
              console.log(item);
              navigation.navigate("Timesheets");
            }}
            carouselViewItemText="Timesheets"
          />
        );
      case 5:
        return (
          <CarouselCard
            item={item}
            onPress={() => {
              console.log(item);
              navigation.navigate("Uniform records");
            }}
            carouselViewItemText="Uniform Records"
          />
        );
    }
  };

  const handleLogoutTest = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.subTopContainer}>
        <Text style={homeStyles.welcomeText}>Welcome</Text>
        <Text style={homeStyles.nameText}>Nkuna</Text>
        <Text style={homeStyles.nameText}>William</Text>
        <Button onPress={handleLogoutTest} title="logout test" />
      </View>
      <View style={homeStyles.subBottomContainer}>
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

export default AdminHomeScreen;

const styles = StyleSheet.create({});
