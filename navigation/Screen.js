import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default class Screen extends Component {
  forRender() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        {this.props.toRender}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08283d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
