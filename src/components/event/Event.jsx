import React from 'react';
import ClassNames from 'classnames';

import './event.scss';

const Event = ({ height, marginTop, title, time, weekDay }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <>
      <div style={eventStyle} className="event">
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        <button
          className={ClassNames('delete-event-btn', { 'delete-event-btn_left': weekDay === 'Sun' })}
        >
          <i className="fas fa-trash"></i>Delete
        </button>
      </div>
    </>
  );
};

export default Event;
