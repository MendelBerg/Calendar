import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import { fetchEvents } from './gateway/events.js';

import './common.scss';

const App = () => {
	const [weekStartDate, setWeekStartDate] = useState(new Date());
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [events, setEvents] = useState([]);

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

	function switchWeek(nextWeek = true) {
		const dateCopy = new Date(weekStartDate);
		dateCopy.setDate(dateCopy.getDate() + (nextWeek ? 7 : -7));
		setWeekStartDate(dateCopy);
	}

	function returnToday() {
		setWeekStartDate(new Date());
	}

	function showModal() {
		setIsVisibleModal(true);
	}

	function hideModal() {
		setIsVisibleModal(false);
	}

	const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

	return (
		<>
			{!isVisibleModal ? null : <Modal onCloseModal={hideModal} />}
			<Header
				weekDates={weekDates}
				onSwitchWeek={switchWeek}
				onReturnToday={returnToday}
				onCreateEvent={showModal}
			/>
			<Calendar weekDates={weekDates} events={events} />
		</>
	);
};

export default App;
