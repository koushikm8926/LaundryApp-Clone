import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
    "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://media.istockphoto.com/id/1442622128/vector/washing-machine-and-ironing-board-in-the-bathroom.jpg?s=1024x1024&w=is&k=20&c=KBEC_OOCLqWRrgkOnbAzHxzwP0Vc5IO5aYvxdS1ETaM=",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleloop
        dotColor={"#13274F"}
        inactiveDotColor={"#90A4AE"}
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
