import React from 'react';
import moment from 'moment';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, events }) => {
  const currentDate = moment(new Date()).format('M D Y');

  return (
    <section className="calendar">
      <Navigation currentDate={currentDate} weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week currentDate={currentDate} weekDates={weekDates} events={events} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
