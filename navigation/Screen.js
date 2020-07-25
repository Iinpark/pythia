import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// TODO: REMOVE IMPORT BELOW
import { actions } from '../storage/dataReducer';

export default class Screen extends Component {
  API = actions.fetchData;
  forRender() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        {this.props.children}
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
