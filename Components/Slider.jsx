import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
const Slider = () => {
    const images=  [
        require("../assets/food/america.png"),
        require("../assets/food/bake.png"),
        require("../assets/food/cookies.jpg"),
        require("../assets/food/eat.png"),
    ]
  return (
    <View>
      <SliderBox 
       images={images}
       dotColor = "blue"
       autoplay= {true}
       autoplayInterval = {2000}
       circleLoop={true}/>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})