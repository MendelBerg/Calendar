import React from 'react';
import Day from '../day/Day';
import moment from 'moment';

import './week.scss';
import { days } from '../../utils/dateUtils.js';

const Week = ({ currentDate, weekDates, events }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            isCurrentDay={currentDate === moment(dayStart).format('M D Y')}
            weekDay={days[dayStart.getDay()]}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
