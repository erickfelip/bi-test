import React from 'react';
import { StyleSheet, Text, StatusBar, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    justifyContent: 'center',
  },
});
