import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const height = Dimensions.get("window").height;

const Map = () => {
  const [marker, setMarker] = useState({
    latitude: 21.0281465,
    longitude: 105.7882117,
  });

  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 21.0281465,
        longitude: 105.7882117,
        latitudeDelta: 0.00015,
        longtitudeDelta: 0.0002,
      }}
      // onRegionChange={(data) => console.log(data)}
    >
      <MapView.Marker
        draggable
        coordinate={marker}
        title={"Toạ độ hiện tại "}
        description={`kinh độ (long): ${marker.longitude} Vĩ độ (Lati): ${marker.latitude} `}
        onDragEnd={(e) => setMarker( e.nativeEvent.coordinate )}
      ></MapView.Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: height,
  },
});
