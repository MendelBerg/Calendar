import React, { useState } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { setArrEvents } from './gateway/events';
import { getWeekDates, switchWeek } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
	const [weekStartDate, setWeekStartDate] = useState(new Date());
	const [events, setEvents] = useState('empty');
	const weekDates = getWeekDates(weekStartDate);

	if (events === 'empty') {
		setArrEvents(setEvents);
	}

	return (
		<>
			<Header
				setEvents={setEvents}
				weekDates={weekDates}
				onSwitchWeek={(isNext, today = false) =>
					switchWeek(weekStartDate, setWeekStartDate, isNext, today)
				}
			/>
			<Calendar events={events !== 'empty' ? events : []} weekDates={weekDates} />
		</>
	);
};

export default App;
