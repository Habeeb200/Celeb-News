import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodProduct from './FoodProduct';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Cart from './Cart';
const Tab = createBottomTabNavigator();
const Another = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: "red"}}>
        <Tab.Screen name="Home" component={FoodProduct} options={{
            tabBarIcon: () => (
                <Entypo name="home" size={28} color="red" />
            ),
          }} />
        <Tab.Screen name="Profile" component={FoodProduct} options={{
            tabBarIcon: () => (
                <Ionicons name="person" size={28} color="black" />
            ),
          }} />
        <Tab.Screen name="Cart" component={FoodProduct} options={{
            tabBarIcon: () => (
                <Entypo name="shopping-cart" size={24} color="black" />
            ),
          }} />
        <Tab.Screen name="Settings" component={FoodProduct} options={{
            tabBarIcon: () => (
                <Ionicons name="settings" size={24} color="black" />
            ),
          }}/>
      </Tab.Navigator>
  )
}

export default Another

const styles = StyleSheet.create({})