import React, { useEffect, useState } from 'react';
import './hour.scss';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ isCurrentHour, dataHour, hourEvents, weekDay }) => {
  const [redLineTop, setRedLineTop] = useState(new Date().getMinutes());
  useEffect(() => {
    const id = setInterval(() => setRedLineTop(redLineTop + 1), 1000 * 60);
    return () => clearTimeout(id);
  });
  const style = {
    top: redLineTop,
  };

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {!isCurrentHour ? null : <div style={style} className="timeLine"></div>}

      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            eventId={id}
            weekDay={weekDay}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default Hour;
