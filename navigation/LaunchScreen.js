import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Screen from './Screen';

export default class LaunchScreen extends Component {
  forRender = (
    <View>
      <Text>Я - Экран Пуска!!!</Text>
    </View>
  );
  render() {
    return <Screen toRender={this.forRender} />;
  }
}
