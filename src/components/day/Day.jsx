import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';

const Day = ({ setEvents, isCurrentDay, dataDay, dayEvents, weekDay }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            setEvents={setEvents}
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

Day.propTypes = {
  setEvents: PropTypes.func.isRequired,
  dayEvents: PropTypes.array.isRequired,
  isCurrentDay: PropTypes.bool.isRequired,
  dataDay: PropTypes.number.isRequired,
  weekDay: PropTypes.string.isRequired,
};

export default Day;
