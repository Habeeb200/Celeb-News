import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const ReachLogin = ({ route }) => {
  const { user } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0.55 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: user.picture.large }}
            style={{ width: width, height: 430 }}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 0.45,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 30 }}>
          Username: {user.name.first}
        </Text>
        <Text style={{ fontSize: 15, marginVertical: 10, fontWeight: "bold" }}>
          Email: {user.email}
        </Text>
        <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: "bold" }}>
          Country: {user.location.country}
        </Text>
        <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: "bold" }}>
          Age: {user.dob.age}
        </Text>
        <Text style={{ fontSize: 17, marginVertical: 10, fontWeight: "bold" }}>
          Phone Number: {user.cell}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ReachLogin;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    elevation: 10,
    backgroundColor: "white",
  },
});
