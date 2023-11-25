import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ReachHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.75 }}>
        <View style={styles.container1}></View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2023/09/07/22/56/peace-8240001_1280.png",
            }}
            style={{ width: 200, height: 200 }}
          />
          <View
            style={{
              flexDirection: "row",
              width: 305,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "blue" }}>
              Reach
            </Text>
            <Text style={{ width: 140, fontSize: 17, color: "blue" }}>
              Student Life Management
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.25,
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Welcome to Reach
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 100,
            padding: 5,
            borderRadius: 10,
            marginVertical: 35,
          }}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>LET'S GO</Text>
        </TouchableOpacity>
        <Text style={{ opacity: 0.2, fontWeight: "bold" }}>
          PWA version 1.0.5698
        </Text>
      </View>
    </View>
  );
};

export default ReachHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: "white",
    elevation: 10,
    paddingBottom: 80,
  },
});
