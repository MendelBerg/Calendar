import React, { useEffect, useState } from 'react';
import ClassNames from 'classnames';
import { deleteEvent } from '../../gateway/events.js';

import './event.scss';

const Event = ({ eventId, height, marginTop, title, time, weekDay }) => {
  const root = document.querySelector('#root');
  const [isVisible, setIsVisible] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const showBtnDelete = () => {
    setIsVisible(true);
    root.addEventListener('click', hideBtnDelete);
  };

  const hideBtnDelete = () => {
    setIsVisible(false);
    root.removeEventListener('click', hideBtnDelete);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={showBtnDelete}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        <button
          onClick={() => deleteEvent(eventId)}
          className={ClassNames('delete-event-btn', {
            'delete-event-btn_left': weekDay === 'Sun',
            hidden: !isVisible,
          })}
        >
          <i className="fas fa-trash"></i>Delete
        </button>
      </div>
    </>
  );
};

export default Event;
