import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
const MapScreen = props => {
    return (
    <View style={styles.screen}>
        <Text>map Screen</Text>    
    </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30
    }
})
export default MapScreen