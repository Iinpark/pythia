import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import TextWidthUnderline from './TextWidthUnderline';
import IconWidthUnderline from './IconWithUnderline';
import { ReminderCont } from '@notifications';

const LaunchCard = ({ vehicle, win_open, name, win_close }) => {
  return (
    <View style={styles.launchCard}>
      <Image
        style={{ height: 90, width: 90, borderRadius: 45 }}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg',
        }}
      />
      <View style={styles.launchCard__icons}>
        <IconWidthUnderline value="⏳" />
        <IconWidthUnderline value="🚀" />
        <IconWidthUnderline value="📃" />
      </View>
      <View style={styles.launchCard__section}>
        <TextWidthUnderline value={win_open || 'Неизвестно'} />
        <TextWidthUnderline value={vehicle || 'Неизвестно'} />
        <TextWidthUnderline value={name || 'Неизвестно'} />
      </View>
      <ReminderCont win_open={win_open} win_close={win_close} name={name} />
    </View>
  );
};

export default LaunchCard;

const styles = StyleSheet.create({
  launchCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.3)',

    width: 330,
    height: 93,

    alignItems: 'center',
    justifyContent: 'space-between',

    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,

    paddingVertical: 1,
    paddingLeft: 1,

    marginVertical: 3,
  },

  launchCard__icons: {
    margin: 5,
    height: '100%',
    justifyContent: 'space-around',
  },
  launchCard__section: {
    margin: 5,
    width: '45%',
    height: '100%',
    justifyContent: 'space-around',
  },
});
