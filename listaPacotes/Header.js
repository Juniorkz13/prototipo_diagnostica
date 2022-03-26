import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import logoAviao from '../assets/aviao.png'

export default () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoAviao} style={styles.image} />
            <Text style={styles.text}> Vamos Viajar?</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderBottomColor: 'rgb(195, 195, 195)',
        borderBottomWidth: 1,
        margin: 10
    },

    image: {
        width: 50,
        height: 50
    },
    text: {
        fontSize: 40,
        color: '#34495E'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
