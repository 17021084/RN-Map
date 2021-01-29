import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import * as Location from "expo-location";

export default function MapListScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);
 
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView forceInset={{ top: "alway" }}>
      <Text style={{ fontSize: 40 }}> Map List screen </Text>
      <Button title="get" />

      <Text style={styles.paragraph}>{text}</Text>
    </SafeAreaView>
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
