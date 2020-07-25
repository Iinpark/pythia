import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const IconWidthUnderline = ({ value }) => {
  return (
    <View>
      <Text>{value}</Text>
      <View style={styles.underline}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 3,
  },
});

export default IconWidthUnderline;
