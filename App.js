import React from 'react';
import { StyleSheet, Text, StatusBar, View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#fff"
      barStyle="dark-content"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    justifyContent: 'center',
  },
});
