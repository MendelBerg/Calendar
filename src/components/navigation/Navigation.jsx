import React from 'react';
import СlassNames from 'classnames';

import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ weekDates }) => {
  const currentDate = new Date().getDate();

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => (
        <div
          key={index}
          className={СlassNames('calendar__day-label day-label', {
            'day-label_current': currentDate === dayDate.getDate(),
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
