import React from 'react';
import PropTypes from 'prop-types';
import СlassNames from 'classnames';

import { days, isCurrentDay } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      <span className="calendar__gmt">GMT+02</span>
      {weekDates.map((dayDate, index) => (
        <div
          key={index}
          className={СlassNames('calendar__day-label day-label', {
            'day-label_current': isCurrentDay(dayDate),
          })}
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
          <div className="day-label__day-gmt"></div>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
