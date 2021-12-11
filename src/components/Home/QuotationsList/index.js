import React, { Fragment } from "react";
import {ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from'./styles'


export default function QuotationList(){
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
            <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
            <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
            <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
            <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
            <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>

        </View>
        <ScrollView>

        </ScrollView>
        </Fragment>
    )
}