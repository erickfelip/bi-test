import React from "react";
import {View, Text} from 'react-native'
import { color } from "react-native-reanimated";
import styles from'./styles'


export default function QuotationItems(props){
    return(
        <View style={styles.mainContent}>
         <View style={styles.contextLeft}>
            <View>
                <Text style={styles.dayCotation}>{props.data}</Text>
            </View>
         </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ {props.valor}</Text>
            </View>
        </View> 
    )
}