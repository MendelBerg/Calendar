import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';

import { days } from '../../utils/dateUtils';

const Week = ({ setEvents, weekDates, events }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            setEvents={setEvents}
            key={dayStart.getDate()}
            dayStart={dayStart}
            weekDay={days[dayStart.getDay()]}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  setEvents: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
};

export default Week;
