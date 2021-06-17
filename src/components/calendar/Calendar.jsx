import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents } from '../../gateway/events.js';

import './calendar.scss';

const Calendar = ({ weekDates }) => {
  const [events, setEvents] = useState([]);
  const currentDate = moment(new Date()).format('M D Y');

  useEffect(() => {
    fetchEvents().then(response => {
      setEvents(
        response.map(el => ({
          ...el,
          dateFrom: new Date(el.dateFrom),
          dateTo: new Date(el.dateTo),
        })),
      );
    });
  }, []);

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
