import React from "react";
import {View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";



export default function HistoryGraphic(props){
    return(
        <View >
            <LineChart
            data={{
                datasets:[
                    {
                    data: props.infoDataGraphic
                },
            ],
            }}
            width={350} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            withVerticalLines={false}
            yLabelsOffset={1}
            withVerticalLabels={false}
            chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#232323",
            backgroundGradientTo: "#3F3F3F",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "2",
                strokeWidth: "1",
                stroke: "#ffa726"
              },
            }}
            bezier//ondas suaves do grafico
            style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
            />
        </View>
    )
}