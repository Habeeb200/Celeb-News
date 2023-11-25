import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import MyStack from "./Components/MyStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
export default function App() {
  return <MyStack />;
}

const styles = StyleSheet.create({});
