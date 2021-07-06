import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange, switchWeek } from '../src/utils/dateUtils.js';
import { fetchEvents } from './gateway/events.js';

import './common.scss';

const App = () => {
	const [events, setEvents] = useState([]);
	const [weekStartDate, setWeekStartDate] = useState(new Date());
	const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

	useEffect(() => {
		fetchEvents().then(response => {
			setEvents(
				response.map(el => ({
					...el,
					dateFrom: new Date(el.dateFrom),
					dateTo: new Date(el.dateTo),
				})),
			);
		});
	}, []);

	return (
		<>
			<Header
				weekDates={weekDates}
				onSwitchWeek={(isNext, today = false) =>
					switchWeek(weekStartDate, setWeekStartDate, isNext, today)
				}
			/>
			<Calendar weekDates={weekDates} events={events} />
		</>
	);
};

export default App;
