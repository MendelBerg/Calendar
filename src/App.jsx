import React, { useState, useEffect } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { setArrEvents } from './gateway/events';
import { getWeekDates, switchWeek } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setStateEvents] = useState([]);
  const weekDates = getWeekDates(weekStartDate);

  const onNextWeek = () => {
    const startDateCopy = new Date(weekStartDate);
    startDateCopy.setDate(startDateCopy.getDate() + 7);
    setWeekStartDate(startDateCopy);
  };

  const onPrevWeek = () => {
    const startDateCopy = new Date(weekStartDate);
    startDateCopy.setDate(startDateCopy.getDate() - 7);
    setWeekStartDate(startDateCopy);
  };

  const onToday = () => {
    setWeekStartDate(new Date());
  };

  const setEvents = events => {
    setStateEvents(events);
  };

  useEffect(() => {
    setArrEvents(setEvents);
  }, []);

  return (
    <>
      <Header
        setEvents={setEvents}
        weekDates={weekDates}
        onNextWeek={onNextWeek}
        onPrevWeek={onPrevWeek}
        onToday={onToday}
      />
      <Calendar setEvents={setEvents} events={events} weekDates={weekDates} />
    </>
  );
};

export default App;
