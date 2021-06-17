import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ isCurrentDay, dataDay, dayEvents, weekDay }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            isCurrentHour={isCurrentDay && hour === new Date().getHours()}
            weekDay={weekDay}
            dataHour={hour}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
