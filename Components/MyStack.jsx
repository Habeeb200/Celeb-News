import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Product from "./Product";
import FoodHome from "./FoodHome";
import FoodProduct from "./FoodProduct";
import Another from "./Another";
import FoodProductDetails from "./FoodProductDetails";
import Slider from "./Slider";
import ReachHome from "./Reach/ReachHome";
import ReachSearch from "./Reach/ReachSearch";
import ReachLogin from "./Reach/ReachLogin";
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ReachHome} />
        <Stack.Screen name="Login" component={ReachLogin} />
        <Stack.Screen name="Search" component={ReachSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
