import React from 'react'
import { FlatList, View } from 'react-native'
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
            />
        </View>
    )
}

export default CarsList
