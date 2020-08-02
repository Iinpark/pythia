import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Screen from './Screen';

export default class LaunchScreen extends Component {
  render() {
    return (
      <Screen >
        <View>
          <Text>Я - Экран Пуска!!!</Text>
        </View>
      </Screen>
    );
  }
}
