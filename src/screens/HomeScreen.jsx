import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Services from "../components/Services";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories/>
        <Carousel/>
        <Services/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
