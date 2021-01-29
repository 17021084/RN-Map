import React from 'react'
import { SafeAreaView, Text,StyleSheet } from 'react-native'

export default function MapListScreen() {
    return (
        <SafeAreaView forceInset = {{top: 'alway'}}>
        <Text style = {{ fontSize: 40 }}> Map List screen </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });