import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LaunchCard from './components/LaunchCard';
import  ScheduleScreen  from './navigation/ScheduleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" />
      <ScheduleScreen />
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
