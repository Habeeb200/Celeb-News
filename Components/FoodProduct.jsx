import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { stickerData } from './DataSticker';
import { eat } from './Eatable';
const FoodProduct = ({navigation}) => {
    const[searchQuery, setSearchQuery] = useState("")
    console.log(searchQuery)
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center"}}>
        <View style={{marginRight:100}}>
            <Text style={{fontSize: 17, fontWeight: "bold", color: "red",marginVertical:5}}>Hi User</Text>
            <Text style={{fontSize: 15}}>Order & Eat</Text>
        </View>
        <View style={{borderWidth:3, borderRadius: 70, width: 70, padding:15, borderColor: "red"}}>
         <AntDesign name="user" size={35} color="black" />
        </View>
      </View>
      <View style={{marginVertical: 20, flexDirection: "row", backgroundColor: "#D2E0FB", width: 310,padding:10, alignItems: "center", marginHorizontal: 20, borderRadius:10}}>
             <EvilIcons name="search" size={25} color="black" style={{marginLeft: 10}} />
             <TextInput placeholder='Find your food' style={{fontSize: 15}} value={searchQuery} onChangeText={(text)=>setSearchQuery(text)}/>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",width:310, backgroundColor:"#FF8080",justifyContent:"space-between",padding:15,marginHorizontal:20,borderRadius:20,elevation:15,opacity:0.8}}>
            <Image source={{uri: "https://cdn.pixabay.com/photo/2016/05/30/14/10/delivery-guy-1424808_640.png"}}style={{width:150,height:150,marginRight:10}}/>
            <View>
                <Text style={{fontSize:15, fontWeight:"bold",marginBottom:5}}>Free delivery</Text>
                <Text style={{marginBottom:20}}>May 2 - June 10</Text>
                <TouchableOpacity style={{width:120, padding:15, backgroundColor:"#FF5B22",borderRadius: 30,alignItems:"center"}}>
                    <Text style={{color: "white"}}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{marginHorizontal:25, marginVertical:20}}>
            <Text style={{fontWeight: "bold", fontSize:20}}>Categories</Text>
            <View>
                <FlatList data={stickerData} renderItem={({item}) =>
                 <TouchableOpacity style={{alignItems:"center", backgroundColor: item.color,margin:10, padding:10, borderRadius: 20}}>
                    <Image source={{uri: item.image}} style={{width: 100,height:100}}/>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>{item.name}</Text>
                 </TouchableOpacity>
                 } horizontal={true} showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around",alignItems:"center"}}>
            <Text style={{fontWeight: "bold", fontSize:20,marginRight:80}}>Popular</Text>
            <TouchableOpacity>
                <Text style={{color:"#FF5B22", fontWeight:"bold"}}>See all</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:20,}}> 
        <FlatList data={eat} renderItem={({item})=>{
            if(searchQuery == ""){
                <TouchableOpacity style={{width:170,backgroundColor:"white",padding:10, borderRadius: 15,margin:10, elevation:10}} onPress={()=>navigation.navigate("FoodProductDetails", {item})}>
                    <Text style={{fontSize: 20, textAlign:"center",fontWeight:"bold"}}>{item.name}</Text>
                    <Image source={item.image} style={{width:150,height:140}}/>
                    <Text style={{fontSize:20,textAlign: "center",fontWeight:"bold"}}>${item.price}</Text>
                    <TouchableOpacity style={{backgroundColor: "#FF5B22", flexDirection:"row", width:80,padding:10, borderRadius:20,alignSelf:"center", marginTop:5}}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{color:"white"}} onPress={()=>navigation.navigate("Cart",{item})}>Add</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            }
            if(item.name.toLowerCase().includes(searchQuery.toLowerCase())){
                return(
                    <TouchableOpacity style={{width:170,backgroundColor:"white",padding:10, borderRadius: 15,margin:10, elevation:10}} onPress={()=>navigation.navigate("FoodProductDetails", {item})}>
                    <Text style={{fontSize: 20, textAlign:"center",fontWeight:"bold"}}>{item.name}</Text>
                    <Image source={item.image} style={{width:150,height:140}}/>
                    <Text style={{fontSize:20,textAlign: "center",fontWeight:"bold"}}>${item.price}</Text>
                    <TouchableOpacity style={{backgroundColor: "#FF5B22", flexDirection:"row", width:80,padding:10, borderRadius:20,alignSelf:"center", marginTop:5}}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{color:"white"}} onPress={()=>navigation.navigate("Cart",{item})}>Add</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                )
            }
        }} horizontal={true}/>
        </View>
    </ScrollView>
  )
}

export default FoodProduct

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:50
    }
})
