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
  const window_start_iso = new Date(win_open).getTime();
  const window_close_iso = new Date(win_close).getTime();
  return (
    <View>
      <ReminderCont
        win_open={window_start_iso}
        win_close={window_close_iso}
        name={name}
      />
      <LaunchCard
        vehicle={vehicle}
        win_open={win_open === null ? 'НЕИЗВЕСТНО' : window_start_string}
        name={name}
        weather_icon={weather_icon}
      />
    </View>
  );
};

export default LaunchCardCont;
