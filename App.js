import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';
import Map from './screens/MapScreen'
import MapNavigator from './navigation/MapNavigation'
export default function App() {
  return (
    <View style={styles.screen}>
      {/* <MapNavigator/> */}
      <Text>tstfeet</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  screen:{margin:40}
});
