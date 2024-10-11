import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";


const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      >
        <View style={styles.inputbox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={"#848484"}
              style={styles.textInput}
            />
          </View>
            <AntDesign name="scan1" size={24} color="#909594" />
        </View>
            <Feather name="mic" size={24} color="#0000000" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  inputbox: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#ffffff",
    borderColor:"#a1bcc0",
    borderWidth:1,
    width:"90%",
    paddingHorizontal:10,
    borderRadius:10
  },
  textInput: {
    padding:10,

  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
});
