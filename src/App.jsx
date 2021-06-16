import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  function switchWeek(nextWeek = true) {
    const dateCopy = new Date(weekStartDate);
    dateCopy.setDate(dateCopy.getDate() + (nextWeek ? 7 : -7));
    setWeekStartDate(dateCopy);
  }

  function returnToday() {
    setWeekStartDate(new Date());
  }

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header weekDates={weekDates} onSwitchWeek={switchWeek} onReturnToday={returnToday} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
