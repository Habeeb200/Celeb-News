import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PrimaryColor } from '../color/classwork'
import { LinearGradient } from 'expo-linear-gradient';
const FoodHome = ({navigation}) => {
  return (
    <View style={styles.container2}>
      <LinearGradient colors={['#FF6C22', 'orange',"#FF6C22"]} style={styles.container}>
            <Text style={{fontSize: 45, fontWeight: "bold", color: "blue", marginVertical:40}}>Foodator</Text>
            <Image source={require("../assets/jerseys/real.png")} style={{width: 300, height: 200}}/>
            <Text style={{fontSize: 25, fontWeight: "bold", color: "blue", marginTop:90}}>Food Delivery App</Text>
      </LinearGradient>
      <View style={styles.container3}>
        <TouchableOpacity style={{padding:15, alignItems:"center",backgroundColor: PrimaryColor, width: 200, borderRadius: 30}} onPress={()=>navigation.navigate("Product")}>
          <Text style={{color: "white", fontSize:20}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
      

        
    
  )
}

export default FoodHome

const styles = StyleSheet.create({
    container: {
        width: 990,
        alignSelf: "center",
        flex: 0.8,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: PrimaryColor,
        borderBottomLeftRadius:1000,
        borderBottomRightRadius:1000
    },
    container2: {
      flex: 1,
    },
    container3:{
      justifyContent: "center",
      flex: 0.2,
      alignItems:"center"
    }
})