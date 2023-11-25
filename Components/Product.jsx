import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { AntDesign } from '@expo/vector-icons';
const Product = ({route}) => {
    const{jersey} = route.params
    const[number, setNumber] = useState(1)
    const handleClick = ()=>{
        if(number == 1){
            setNumber(1)
        }else{
            setNumber(number-1)
        }
    }
  return (
    <View style={styles.container}>
     <View style={styles.container2}>
        <View style={{marginBottom:20}}>
        <NavBar/>
        <Image source={{uri:jersey.image}}  style={{width: 350, height: 350}}/>
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>{jersey.name}</Text>
        <Text style={{textAlign: "center", opacity:0.5,marginTop:5, fontSize:15}}>{jersey.brand}</Text>
        <Text style={{textAlign: "center",marginTop:10, fontSize:18, fontWeight: "bold"}}>${jersey.price}</Text>
        </View>
     </View>
     <View style={{flexDirection: "row", justifyContent: "space-evenly",marginVertical:20, alignItems:"center"}}>
        <Text style={{fontWeight: "bold", fontSize: 15}}>Size</Text>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "aliceblue",borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13}}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:50,height:50,borderWidth:1,borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13}}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "black",borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"white"}}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "aliceblue",borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"black"}}>XL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "aliceblue",borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"black"}}>XXL</Text>
        </TouchableOpacity>
     </View>
     <View style={{flexDirection: "row",justifyContent: "space-evenly",alignItems: "center"}}>
        <Text style={{fontWeight: "bold", fontSize: 15}}>Kit</Text>
        <TouchableOpacity style={{width:90,height:50,backgroundColor: "black",borderRadius:2}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"white"}}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:50,backgroundColor: "aliceblue",borderRadius:2, borderWidth:1}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"black"}}>AWAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:50,backgroundColor: "aliceblue",borderRadius:2, borderWidth:1}}>
            <Text style={{textAlign: "center",paddingTop:13,color:"black"}}>THIRD</Text>
        </TouchableOpacity>
     </View>
     <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems:"center"}}>
        <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 15}}>Qty</Text>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "aliceblue",borderRadius:2,marginRight:20}} onPress={handleClick}>
            <AntDesign name="minus" size={24} color="black" style={{textAlign: "center",paddingTop:13,color:"black"}}/>
        </TouchableOpacity>
        <Text style={{marginRight:20}}>{number}</Text>
        <TouchableOpacity style={{width:50,height:50,backgroundColor: "aliceblue",borderRadius:2}} onPress={()=>setNumber(number+1)}>
            <AntDesign name="plus" size={24} color="black" style={{textAlign: "center",paddingTop:13,color:"black"}} />
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    container2:{
        borderBottomWidth:1,
    }
})