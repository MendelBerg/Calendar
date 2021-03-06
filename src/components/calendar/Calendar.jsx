import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ onDeleteEvent, weekDates, events }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />

      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week onDeleteEvent={onDeleteEvent} weekDates={weekDates} events={events} />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  onDeleteEvent: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
};

export default Calendar;
