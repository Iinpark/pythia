import React from 'react';
import { View, BackgroundImage, FlatList, StyleSheet } from 'react-native';
import { LaunchCard } from '@components';
import Screen from './Screen';

class ScheduleScreen extends React.Component {
  forRender = (
    <View style={styles.main}>
      <LaunchCard />
    </View>
  );

  render() {
    return <Screen toRender={this.forRender} />;
  }
}
export default ScheduleScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
