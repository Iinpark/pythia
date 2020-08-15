import React from 'react';
import { View, StyleSheet } from 'react-native';
import Skeleton from './Skeleton';

const LaunchCardSkeleton = () => {
  return (
    <View style={s.launchCard}>
      <Skeleton s={{ height: 90, width: 90, borderRadius: 45 }} />
      <View style={s.launchCard__icons}>
        <Skeleton s={{ width: 30, height: 15 }} />
        <Skeleton s={{ width: 30, height: 15 }} />
        <Skeleton s={{ width: 30, height: 15 }} />
      </View>
      <View style={s.launchCard__section}>
        <Skeleton s={{ width: 140, height: 15 }} />
        <Skeleton s={{ width: 140, height: 15 }} />
        <Skeleton s={{ width: 140, height: 15 }} />
      </View>
    </View>
  );
};

export default LaunchCardSkeleton;

const s = StyleSheet.create({
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

    paddingVertical: 2,
    paddingLeft: 2,

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
