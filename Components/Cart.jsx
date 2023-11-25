import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = ({route}) => {
    const {item} = route.params
  return (
    <View style={styles.container}>
      <View>
        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"red"}}>My Cart</Text>
        <Text>{item.name}</Text>
      </View>
      
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:68,
    }
})