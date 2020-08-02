import React from 'react';
import { Image, TouchableHighlight } from 'react-native';

const addEventIcon = require('../assets/add_event.png');

const Reminder = ({ createReminder }) => {
  return (
    <TouchableHighlight onPress={() => createReminder()}>
      <Image style={{ height: 20, width: 20 }} source={addEventIcon} />
    </TouchableHighlight>
  );
};

export default Reminder;
