import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';
import React from 'react';
import Reminder from './Reminder';

const ReminderCont = ({ win_open, win_close, name }) => {
  return (
    <Reminder
      win_open={win_open}
      win_close={win_close}
      createReminder={() => {
        createReminder(win_open, win_close, name);
      }}
    />
  );
};

export default ReminderCont;

const createReminder = async (win_open, win_close, name) => {
  const { status } = await Permissions.getAsync(
    Permissions.CALENDAR,
    Permissions.REMINDERS
  );

  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync();
    const editableCalendar = calendars.find((item) => {
      return item.allowsModifications === true;
    });
    Calendar.createEventAsync(editableCalendar.id, {
      title: 'Пуск ракеты',
      notes: name,
      startDate: win_open,
      // при отсутствии инфы об окончании пускового окна,
      // считаем что окно моментальное
      endDate: win_close == 0 ? win_open : win_close,
      alarms: [{ relativeOffset: -15 }],
    })
      .then(() => alert('Напоминание установлено'))
      .catch(() => alert('Не могу установить напоминание'));
  } else {
    alert(
      'Не могу установить напоминание. Возможно, у нас нет доступа к Вашему календарю'
    );
  }
};
