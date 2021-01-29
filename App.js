import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MapListScreen from "./src/screen/MapListScreen";
import MapScreen from "./src/screen/MapScreen";
import {setNavigator} from "./src/NavigationRef"

const swithNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App = createAppContainer(swithNavigator)

export default ()=> {
  return (
   <App
      ref={navigator =>{
        setNavigator(navigator)
      }}
   />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
