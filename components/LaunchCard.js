import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import TextWidthUnderline from './TextWidthUnderline';

// challenge: only hooks
const LaunchCard = ({ vehicle, win_open, name, weather_icon }) => {
  console.log('CARD', vehicle);

  return (
    <View style={styles.launchCard}>
      <Image
        style={{ height: 80, width: 80, borderRadius: 45 }}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg',
        }}
      />
      <View style={styles.launchCard__section}>
        <TextWidthUnderline value="Т -0" />
        <TextWidthUnderline value="Ракета-носитель" />
        <TextWidthUnderline value="Миссия" />
        <TextWidthUnderline value="Погода" />
      </View>
      <View style={styles.launchCard__section}>
        <TextWidthUnderline value={win_open || 'Неизвестно'} />
        <TextWidthUnderline value={vehicle || 'Неизвестно'} />
        <TextWidthUnderline value={name || 'Неизвестно'} />
        <TextWidthUnderline value={weather_icon || 'Неизвестно'} />
      </View>
    </View>
  );
};

export default LaunchCard;

const styles = StyleSheet.create({
  launchCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.3)',

    width: 330,

    alignItems: 'center',
    justifyContent: 'space-between',

    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,

    paddingVertical: 1,
    paddingLeft: 2,

    marginVertical: 3,
  },

  launchCard__section: {
    margin: 5,
  },
});
