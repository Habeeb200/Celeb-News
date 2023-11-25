import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const FoodProductDetails = ({route}) => {
    const {item} = route.params
    const[number,setNumber] = useState(1)
    const handleClick = ()=>{
        if(number == 1){
            setNumber(1)
        }else{
            setNumber(number-1)
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{fontSize:25, fontWeight:"bold"}}>{item.name}</Text>
        <Text style={{fontSize:28, color: "red",fontWeight:"bold",marginTop:10}}>${item.price}</Text>
        <Image source={item.image} style={{width:310,height:310}}/>
        <View style={{flexDirection:"row",alignItems:"center",marginTop: 20}}>
            <TouchableOpacity style={{backgroundColor:"red",borderRadius:5,padding:2,marginRight:10}} onPress={handleClick}><AntDesign name="minus" size={24} color="white" /></TouchableOpacity>
                <Text style={{fontWeight:"bold",fontSize:25}}>{number}</Text>
            <TouchableOpacity style={{backgroundColor:"red",borderRadius:5,padding:2,marginLeft:10}} onPress={()=>setNumber(number+1)}><AntDesign name="plus" size={24} color="white" /></TouchableOpacity>
        </View>
        <View style={{marginHorizontal:18,marginTop:20}}>
            <Text style={{fontWeight:"bold"}}>Lorem ipsum dolor sit amet, enim. Aliquam lorem ante,  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:"red",marginVertical:40, padding:10,width:300,borderRadius:25}}>
            <Text style={{color:"white",textAlign:"center", fontSize:20, fontWeight:"bold"}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FoodProductDetails

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white"
    },
    container1:{
        alignItems: "center",
        marginTop:100
    }
})