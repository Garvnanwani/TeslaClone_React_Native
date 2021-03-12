import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'
import styles from './styles'

const CarsList = ({ name, tagline, taglineCTA, image }) => {
    console.log(cars)
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}

export default CarsList
