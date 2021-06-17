import React from 'react';
import СlassNames from 'classnames';
import moment from 'moment';

import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ currentDate, weekDates }) => {

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => (
        <div
          key={index}
          className={СlassNames('calendar__day-label day-label', {
            'day-label_current': currentDate === moment(dayDate).format('M D Y'),
          })}
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
