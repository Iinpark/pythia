import React from 'react';
import { View } from 'react-native';
import { LaunchCard } from '@components';
import { ReminderCont } from '@notifications';

const LaunchCardCont = ({
  vehicle,
  win_open,
  win_close,
  name,
  weather_icon,
}) => {
  const window_start_string = new Date(win_open).toLocaleString();

  return (
    <View>
      <LaunchCard
        vehicle={vehicle}
        win_open={win_open === null ? 'НЕИЗВЕСТНО' : window_start_string}
        name={name}
        weather_icon={weather_icon}
        win_close={win_close}
      />
    </View>
  );
};

export default LaunchCardCont;
