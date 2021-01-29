import React, { useState, useEffect } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

const height = Dimensions.get("window").height;

const isMarkerOverRegion = (marker, region) => {
  const longBorder = Math.abs(region.longitude - marker.longitude);
  const latiBorder = Math.abs(region.latitude - marker.latitude);

  if (region.longitudeDelta < longBorder) return true;
  if (region.latitudeDelta < latiBorder) return true;
  return false;
};

const Map = () => {
  const [marker, setMarker] = useState({
    latitude: 21.0281465,
    longitude: 105.7882117,
  });
  const [region, setRegion] = useState({
    latitude: 21.0281465,
    longitude: 105.7882117,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [desc, setDesc] = useState();

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
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (isMarkerOverRegion(marker, region)) {
      let newRegion = {
        ...region,
        latitude: marker.latitude,
        longitude: marker.longitude,
      };
      setRegion(newRegion);
    }
  }, [marker]);

  const getCurrentLocation = () => {
    let { latitude, longitude } = location.coords;
    setMarker({
      latitude: latitude,
      longitude: longitude,
    });
  };

  const onDragEnd = (e) => {
    const coord = e.nativeEvent.coordinate;
    axios
      .get(
        `https://geocode.xyz/${coord.latitude},${coord.longitude}?geoit=json`
      )
      .then((res) => {
        let address = res.data.poi;
        // let address = res.data.poi.addr_street
        console.log(address);
      })
      .catch((error) => {
        console.log(error);
      });
    setMarker(e.nativeEvent.coordinate);
  };

  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={region}
      // onRegionChange={(data) => console.log(data)}
    >
      <MapView.Marker
        draggable
        coordinate={marker}
        title={"Toạ độ hiện tại "}
        description={`kinh độ (long): ${marker.longitude} Vĩ độ (Lati): ${marker.latitude} `}
        onDragEnd={onDragEnd}
      ></MapView.Marker>

      <Button title="current" onPress={getCurrentLocation} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: height,
  },
});
