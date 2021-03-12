import React from 'react'
import {ImageBackground, Text, View} from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,500</Text>
      </View>

      <StyledButton
        type="primary"
        content="custom order"
        onPress={() => {
          console.warn('custom order pressed')
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inverntory"
        onPress={() => {
          console.warn('inventory pressed')
        }}
      />
    </View>
  )
}

export default CarItem
