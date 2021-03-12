import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import CarItem from './components/Caritem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
