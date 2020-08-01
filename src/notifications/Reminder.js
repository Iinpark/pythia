import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';

const Reminder = ({ createReminder }) => {
  return (
    <TouchableHighlight onPress={() => createReminder()}>
      <Text style={{ color: 'white' }}>Установить Напоминание</Text>
    </TouchableHighlight>
  );
};

export default Reminder;
