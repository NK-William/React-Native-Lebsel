import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'

const CheckInsScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

export default CheckInsScreen

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: "100%", height: "100%" }
})