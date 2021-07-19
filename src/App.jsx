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
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const onPrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
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
