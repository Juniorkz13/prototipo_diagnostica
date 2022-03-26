import React from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Header from './Header'
import CardPacote from './CardPacote'

const listaLocalidades = [
    {
        id: 1,
        tipo: 'Casa inteira em Praia de Tiririca',
        tipoLink: 'Casa na Praia Tiririca',
        tipoCarac: '4 hóspedes - 1 quarto - 2 camas - 1 banheiro',
        imagem: require('../assets/praia-da-tiririca-1.png'),
        promo: true
    },
    {
        id: 2,
        tipo: 'Chalé inteiro hospedado',
        tipoLink: 'Chalé no interior',
        tipoCarac: '3 hóspedes - 1 quarto - 3 camas - 1 banheiro',
        imagem: require('../assets/cabana-do-sossego.png'),
        promo: false
    },
    {
        id: 3,
        tipo: 'Casa na Praia de Tomás',
        tipoLink: 'Casa na Praia Bahia',
        tipoCarac: '2 hóspedes - 1 quarto - 1 camas - 1 banheiro',
        imagem: require('../assets/praia-tomas.png'),
        promo: true
    },
    {
        id: 4,
        tipo: 'Vila Amarela Pipa cozy house',
        tipoLink: 'Casa na Praia de Pipa',
        tipoCarac: '4 hóspedes - 2 quartos - 2 camas - 1 banheiro',
        imagem: require('../assets/praia-pipa.png'),
        promo: true
    },
    {
        id: 5,
        tipo: 'Casa inteiro hospedado',
        tipoLink: 'Chalé no interior',
        tipoCarac: '3 hóspedes - 1 quarto - 3 camas - 1 banheiro',
        imagem: require('../assets/chale-cuesta.png'),
        promo: false
    }
]

export default () => {
    const renderItem = ({ item }) => {
        return (
            <CardPacote
                imagem={item.imagem}
                tipo={item.tipo}
                tipoLink={item.tipoLink}
                tipoCarac={item.tipoCarac}
                promo={item.promo}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={listaLocalidades}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
})
