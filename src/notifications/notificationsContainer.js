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
  const { status } = await Permissions.askAsync(
    Permissions.CALENDAR,
    Permissions.REMINDERS
  );
  const window_start_unix_like = new Date(win_open).getTime();
  const window_close_unix_like = new Date(win_close).getTime();
  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync();
    const editableCalendar = calendars.find((item) => {
      return item.allowsModifications === true;
    });
    Calendar.createEventAsync(editableCalendar.id, {
      title: 'Пуск ракеты',
      notes: name,
      startDate: window_start_unix_like,
      // при отсутствии инфы об окончании пускового окна,
      // считаем что окно моментальное
      endDate:
        window_close_unix_like == 0
          ? window_start_unix_like
          : window_close_unix_like,
      alarms: [{ relativeOffset: -15 }],
    })
      .then(() => alert('Напоминание установлено'))
      .catch(() =>
        alert(
          'Не могу установить напоминание. Возможно, мы не знаем даты начала стартового окна'
        )
      );
  } else {
    alert(
      'Не могу установить напоминание. Возможно, у нас нет доступа к Вашему календарю'
    );
  }
};
