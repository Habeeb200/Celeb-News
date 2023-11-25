import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const ReachSearch = ({ navigation }) => {
  const [state, setState] = useState(0.2);
  const [text, setText] = useState("");
  const handleClick = (value) => {
    fetchapi();
    setText(value);
    if (text.length > -1) {
      setState(0.9);
    } else {
      setState(0.2);
    }
  };
  const [userdata, setData] = useState(null);
  const fetchapi = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    data.key = 1;
    data.results.map((item) => {
      item.key = data.key;
      data.key += 1;
    });
    setData(data.results);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"black"} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 19 }}>Portal Login</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
            Portal Search
          </Text>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/11/15/11/09/search-2951638_640.jpg",
            }}
            style={{ width: width, height: 310 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: state,
          padding: 30,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text
          style={{
            marginHorizontal: 6,
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Search
        </Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            label="Email"
            placeholder="Search for an individual..."
            style={{
              width: 290,
              padding: 10,
              fontSize: 13,
              backgroundColor: "#D0A2F7",
            }}
            value={text}
            onChangeText={handleClick}
          />
        </View>
        <ScrollView>
          {userdata ? (
            userdata.map((user) => {
              if (user.name.first.toLowerCase().includes(text.toLowerCase())) {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      width: 400,
                      flexDirection: "row",
                      margin: 10,
                      padding: 10,
                      elevation: 10,
                      alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("Login", { user })}
                  >
                    <Image
                      source={{ uri: user.picture.large }}
                      style={{ width: 50, height: 50, borderRadius: 90 }}
                    />
                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        {user.name.title + " "}
                        {user.name.first + " "}
                        {user.name.last}
                      </Text>
                      <Text>{user.email}</Text>
                    </View>
                  </TouchableOpacity>

                  // <FlatList
                  //   data={userdata}
                  //   renderItem={({ eachuser }) => (
                  //
                  //   )}
                  //   // keyExtractor={(item) => (item.id += item.name)}
                  // />
                );
              }
            })
          ) : (
            <ActivityIndicator />
          )}
        </ScrollView>
        {/* {userdata &&
        userdata.map(
          (eachuser) => eachuser.name.first.toLowerCase() == text.toLowerCase()
        ) ? (
          
        ) : (
          
        )} */}
      </View>
    </SafeAreaView>
  );
};

export default ReachSearch;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    elevation: 10,
    backgroundColor: "white",
  },
});
