import React from 'react';
import { View, BackgroundImage, FlatList, StyleSheet } from 'react-native';
import { LaunchCard } from '@components';

const ScheduleScreen = () => {
  return (
    <View style={styles.main}>
      <LaunchCard />
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});