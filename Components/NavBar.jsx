import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const NavBar = () => {
  return (
    <View>
      <View style={styles.container2}>
        <View style={styles.container}>
        <TouchableOpacity>
        <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontWeight: "bold"}}>FIFA World Cup Kits</Text> 
        <TouchableOpacity >
        <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
   </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:20
      },
      container2: {
        borderBottomWidth: 1,
        borderColor:"gray"
      }
})