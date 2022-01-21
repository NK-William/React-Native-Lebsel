import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const ItemWidth = 200.0;
const ItemHeight = 300.0;

const CarouselCard = ({ onPress, item, carouselViewItemText }) => {
  return (
    <Pressable onPress={() => onPress}>
      <>
        <View style={styles.carouselItemView}>
          <Image
            source={
              item === 1
                ? require("../../assets/availability.jpg")
                : item === 2
                ? require("../../assets/promoters.jpg")
                : item === 3
                ? require("../../assets/checkins.jpg")
                : item === 4
                ? require("../../assets/timesheets.jpg")
                : require("../../assets/uniform.jpg")
            }
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          />
        </View>
        <Text style={{ color: "#000", fontSize: 16, alignSelf: "center" }}>
          {carouselViewItemText}
        </Text>
      </>
    </Pressable>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
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
