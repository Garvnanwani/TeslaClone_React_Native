import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = ({ car }) => {

  const { name, tagline, taglineCTA, image } = car

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA} >{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonscontainer}>
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
    </View>
  )
}

export default CarItem
