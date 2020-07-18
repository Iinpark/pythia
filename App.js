import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {CompanyCardCont, LaunchCardCont} from '@containers'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LaunchCardCont />
      <CompanyCardCont />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08283d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
