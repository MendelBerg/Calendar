import React from 'react';
import Day from '../day/Day';

import { days, isCurrentDay } from '../../utils/dateUtils';

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
						isCurrentDay={isCurrentDay(dayStart)}
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
