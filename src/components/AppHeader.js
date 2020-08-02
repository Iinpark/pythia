import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const burger = require('../assets/burger.png');
const globe = require('../assets/globe.png');

const AppHeader = ({ toggleDrawer }) => {
  return (
    <View style={s.main}>
      {/* кнопка открывающая бургер меню */}
      {/* <TouchableOpacity onPress={toggleDrawer}>
        <Image style={s.icon} source={burger} />
      </TouchableOpacity> */}
      <Image style={s.icon} source={globe} />
    </View>
  );
};

const s = StyleSheet.create({
  main: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,

    backgroundColor: '#08283d',
  },

  icon: {
    height: 25,
    width: 25,
  },
});

export default AppHeader;
