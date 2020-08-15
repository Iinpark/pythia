import React from 'react';
import { View } from 'react-native';
import { LaunchCard } from '@components';
import { ReminderCont } from '@notifications';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
};

const LaunchCardCont = ({ vehicle, win_open, win_close, name }) => {
  let window_start_string = new Date(win_open);
  window_start_string = window_start_string.toLocaleString('ru', dateOptions);
  return (
    <View>
      <LaunchCard
        vehicle={vehicle}
        win_open={win_open === null ? 'НЕИЗВЕСТНО' : window_start_string}
        name={name}
        win_close={win_close}
      />
    </View>
  );
};

export default LaunchCardCont;
