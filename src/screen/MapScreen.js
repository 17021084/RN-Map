import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Map from '../components/Map';

const MapScreen = ({navigation}) => {
    return (
        <SafeAreaView forceInset = {{top: 'alway'}} >
            <Text style = {{ fontSize:60 }}> Map screen </Text>
            <Map/>

        </SafeAreaView>
    );
};

export default MapScreen;