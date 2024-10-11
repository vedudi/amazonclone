import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Router from "./src/navigation/Router";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#9ee4d4'}}>
      <StatusBar style={{backgroundColor:'#9ee4d4'}}/>
      <Router />
    </SafeAreaView>
  );
};

export default App;
