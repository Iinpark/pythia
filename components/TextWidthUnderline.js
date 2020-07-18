import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TextWidthUnderline = ({ value }) => {
  return (
    <View>
      <Text
        style={{ color: 'white', textTransform: 'uppercase', fontSize: 11 }}>
        {value}
      </Text>
      <View style={styles.underline}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: 'white',
    width: 70,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 3,
  },
});

export default TextWidthUnderline;
