import React, { Fragment } from "react";
import {View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import QuotationItems from "./QuotationItems";
import styles from'./styles'


export default function QuotationList(props){
const daysQuery = props.filterDay

    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>daysQuery(7)}
            >
            <Text style={styles.textButtonQuery}>7 D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>daysQuery(15)}
            >
            <Text style={styles.textButtonQuery}>15 D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>daysQuery(30)}
            >
            <Text style={styles.textButtonQuery}>1 M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>daysQuery(90)}
            >
            <Text style={styles.textButtonQuery}>3 M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() =>daysQuery(180)}
            >
            <Text style={styles.textButtonQuery}>6 M</Text>
            </TouchableOpacity>

        </View>
            <FlatList
            data={props.listTransactions}
            renderItem={({item})=>{
                return <QuotationItems valor={item.valor} data={item.data}
                />
            }}
            />
        </Fragment>
    )
}