import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default ({
    imagem,
    tipo = 'exemplo',
    tipoLink = 'exemplo',
    tipoCarac = 'exemplo',
    promo = false
}) => {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.image} />
            <View style={styles.descricao}>
                <Text style={styles.nomeTipo}>{tipo}</Text>
                <TouchableOpacity>
                    <Text style={styles.link}>{tipoLink}</Text>
                </TouchableOpacity>
                <Text style={styles.caracteristicas}>{tipoCarac}</Text>
                {promo ? (
                    <View style={styles.promo}>
                        <Text style={styles.promocao}>PROMOÇÃO</Text>
                    </View>
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(195, 195, 195)'
    },

    image: {
        width: 160,
        height: 120,
        borderRadius: 10
    },
    descricao: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    nomeTipo: {
        fontSize: 15,
        color: 'rgb(195, 195, 195)',
        fontWeight: 'bold',
        marginBottom: 5
    },
    link: {
        fontSize: 20,
        color: '#34495E',
        fontWeight: 'bold',
        marginBottom: 5
    },
    caracteristicas: {
        fontSize: 10,
        color: 'rgb(195, 195, 195)',
        marginBottom: 5
    },
    promocao: {
        fontSize: 15,
        color: 'white',
        marginBottom: 5
    },
    promo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(242, 140, 0)',
        borderRadius: 10,
        width: 70
    }
})
