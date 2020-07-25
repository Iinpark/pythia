import React from 'react';
import { View } from 'react-native';
import { LaunchCard } from '@components';

const LaunchCardCont = ({ vehicle, win_open, name, weather_icon }) => {

  const date = new Date(win_open).toLocaleString();

  return (
    <View>
      <LaunchCard
        vehicle={vehicle}
        win_open={win_open === null ? 'НЕИЗВЕСТНО' : date}
        name={name}
        weather_icon={weather_icon}
      />
    </View>
  );
};

export default LaunchCardCont;
