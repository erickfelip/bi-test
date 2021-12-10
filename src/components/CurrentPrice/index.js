import React from "react";
import {View, Text } from 'react-native'
import styles from'./styles'


export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.textPrice}>Faturamento do Dia</Text>
            <Text style={styles.currentPrice}>R$ 720.854,50</Text> 
        </View>
    )
}