import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'

// current state: https://docs.expo.dev/versions/latest/sdk/location/#configuration (I already installed expo-location)
const CheckInsScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
        </View>
    )
}

export default CheckInsScreen

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: "100%", height: "100%" }
})