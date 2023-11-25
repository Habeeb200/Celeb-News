import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import NavBar from './NavBar';
import { AntDesign } from '@expo/vector-icons';
import { sportJersey } from './Data';
import {useFonts} from "expo-font";
import { PRIMARY_COLOR } from '../constants/constant';
const Home = ({navigation}) => {
  const [loaded] = useFonts({
		Kenia: require('../assets/fonts/Kenia-Regular.ttf')
	});
  if(!loaded){
		return null
	}
  return (
    <View>
    <NavBar/>
      <View style={{marginTop:20, opacity:0.6}}>
        <Text style={{marginLeft: 20, fontSize: 20, fontWeight:"bold", fontFamily: "Kenia"}}>Authentic World Cup Kits</Text>
      </View>
      <View style={styles.container}>
        <EvilIcons name="search" size={24} color="black" style={{marginRight:5}} />
        <TextInput placeholder='Search Kits' style={{fontSize:18}}/>
      </View>
      <View style={{flexDirection: "row", marginLeft: 20, justifyContent:'space-between'}}>
        <TouchableOpacity>
        <AntDesign name="bars" size={24} color="black" />
        </TouchableOpacity>
        <View style={{flexDirection: "row", marginRight:30}}>
          <TouchableOpacity>
          <Text>FILTER</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginLeft:30, backgroundColor: PRIMARY_COLOR}}>SELECT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* <ActivityIndicator style={{alignSelf: "center"}} size={100} color="blue"/> */}
          <View style={styles.shadowProp}>
            {sportJersey.map((jersey)=>(
              <TouchableOpacity onPress={()=>navigation.navigate("Product", {jersey})} key={jersey.id}>
                <View style={{width:160,borderWidth: 0.2,margin:10, elevation: 20}}>
                  <Image source={{uri: jersey.image}} style={{width: 160, height:160, borderTopLeftRadius:10, borderTopRightRadius:10}}/>
                  <View style={{backgroundColor: "white",padding:5, borderWidth:1, borderBottomLeftRadius:10, borderBottomRightRadius: 10, borderColor:"white", backgroundColor: "aliceblue"}}>
                    <Text>{jersey.name}</Text>
                    <Text style={{opacity:0.5}}>{jersey.brand}</Text> 
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                      <Text style={{fontWeight:"bold",marginRight:5}}>${jersey.price}</Text>
                      <TouchableOpacity>
                        <Text style={{color:"blue"}}>ADD TO CART</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      marginLeft: 20,
      flexDirection: "row",
      borderWidth: 1,
      width: 310,
      marginVertical:30,
      padding:10,
      opacity:0.35,
      alignItems: "center",
      borderRadius: 5
    },
    shadowProp: {  
      marginTop:25,
      flexDirection: "row",
      flexWrap:"wrap",
    },  
})