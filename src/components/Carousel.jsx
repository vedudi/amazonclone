import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        autoplay={true}
        showsButtons={false}
        style={styles.wrapper}
      >
        {CarouselData.map((item) => (
          <View style={styles.imgStyle}>
            <Image style={styles.imgStyle} source={item.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  wrapper: {
    height:300,
  },
  imgStyle: {
    width: "100%",
    height: 250,
  },
});
