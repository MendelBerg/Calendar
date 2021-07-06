import React, { Component } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { setArrEvents } from './gateway/events';
import { getWeekDates, switchWeek } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			weekStartDate: new Date(),
			events: [],
		};
	}

	setEvents(events) {
		this.setState({
			...this.state,
			events,
		});
	}

	setWeekStartDate(weekStartDate) {
		this.setState({
			...this.state,
			weekStartDate,
		});
	}

	componentDidMount() {
		setArrEvents(this.setEvents.bind(this));
	}

	render() {
		const weekDates = getWeekDates(this.state.weekStartDate);
		return (
			<>
				<Header
					setEvents={this.setEvents.bind(this)}
					weekDates={weekDates}
					onSwitchWeek={(isNext, today = false) =>
						switchWeek(this.state.weekStartDate, this.setWeekStartDate.bind(this), isNext, today)
					}
				/>
				<Calendar events={this.state.events} weekDates={weekDates} />
			</>
		);
	}
}

export default App;
